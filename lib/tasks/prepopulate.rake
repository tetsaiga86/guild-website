namespace :prepopulate do
  task achievements: :environment do
    bnet_client = ::Bnet::Client.new

    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    bnet_achievements = guild_data['achievements']

    achievement_timestamps = Hash[bnet_achievements['achievementsCompleted'].zip(bnet_achievements['achievementsCompletedTimestamp'])]
    achievement_ids = bnet_achievements['achievementsCompleted']

    achievement_ids.each do |achievementId|
      puts "fetching #{achievementId}"
      achievement_info = bnet_client.achievement_info(achievementId)
      achievement_datum = AchievementDatum.find_or_create_by(bnet_id: achievementId)
      achievement_datum.update(body: achievement_info.to_json)
    end
  end

  task members: :environment do
    bnet_client = ::Bnet::Client.new
    guild_members = bnet_client.guild_members(ENV['GUILD_NAME'])
    filtered_guild_members = guild_members.select do |member|
      member['rank']<=4
    end

    filtered_guild_members.each do |member|
      puts "fetching #{member['character']['name']}"
      character_info = bnet_client.character_info(member['character']['name'])
      members_datum = MembersDatum.find_or_create_by(bnet_id: member['character']['name'])
      members_datum.update(body: character_info.to_json)
    end
  end

  task raid_logs: :environment do
    raid_log_client = ::Warcraftlogs::Client.new
    log_data = raid_log_client.guild_log_ids(ENV['GUILD_NAME'])
    guild_leader_personal_log_ids = raid_log_client.guild_leader_personal_logs()
    all_log_ids = log_data.push(*guild_leader_personal_log_ids)
    all_log_ids.sort! do |a,b|
      a['start'] <=> b['start']
    end

    massaged_log_ids = all_log_ids.select do |log|
      log['date']=Time.at(log['start']/1000).strftime('%a, %d %b %Y')
      log['time']=Time.at(log['start']/1000).strftime('%H:%M')
      log['raid_day']=log['date'].include?('Tue') || log['date'].include?('Wed') || log['date'].include?('Thu')
    end

    filtered_log_ids = massaged_log_ids.select do |log|
      log['owner']==ENV['GUILD_LEADER'] || log['raid_day']
    end

    logged_dates = []
    filtered_log_ids.each do |logCandidate|
        logged_date = logged_dates.find do |dateObject|
          dateObject[:date] == logCandidate['date']
        end

        if !logged_date
          logged_date = { date: logCandidate['date'], entries: [] }
          logged_dates.push(logged_date)
        end

        logged_date[:entries].push logCandidate
    end

    log_ids_to_be_rendered = []

    logged_dates.each do |logged_date|
      logged_date[:entries].sort! do |a,b|
        b['end']-b['start'] <=> a['end']-a['start']
      end
      log_ids_to_be_rendered.push(logged_date[:entries][0])
    end

    log_ids_to_be_rendered.last(ENV['LOG_COUNT'].to_i).each do |log_id|
      puts "fetching #{log_id['id']}"
      raid_log_info = raid_log_client.guild_log(log_id['id'])
      raid_log_datum = RaidLog.find_or_create_by(w_log_id: log_id['id'])
      raid_log_datum.update(body: raid_log_info.to_json)
    end

  end

  task news: :environment do
    bnet_client = ::Bnet::Client.new

    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    filtered_news = guild_data['news'].select do |news_item|
      news_item['context'].include?('raid') || news_item['context'].include?('dungeon')
    end

    filtered_news.each do |newsItem|
      puts "fetching #{newsItem['itemId']}"
      item_info = bnet_client.item_info(newsItem['itemId'])
      character_loot_datum = CharacterLootDatum.find_or_create_by(bnet_id: newsItem['itemId'])
      character_loot_datum.update(body: item_info.to_json)
    end
  end
end
