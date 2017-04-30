namespace :prepopulate do
  task achievements: :environment do
    bnet_client = ::Bnet::Client.new

    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    bnet_achievements = guild_data['achievements']

    achievement_timestamps = Hash[bnet_achievements['achievementsCompleted'].zip(bnet_achievements['achievementsCompletedTimestamp'])]
    achievement_ids = bnet_achievements['achievementsCompleted']

    achievement_ids.each do |achievementId|
      achievement_info = bnet_client.achievement_info(achievementId)
      achievement_datum = AchievementDatum.find_or_create_by(bnet_id: achievementId)
      achievement_datum.update(body: achievement_info.to_json)
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
