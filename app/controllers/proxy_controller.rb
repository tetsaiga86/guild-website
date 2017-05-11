class ProxyController < ApplicationController
  def news
    bnet_response = HTTParty.get 'https://worldofwarcraft.com/en-US/news'
    render body: bnet_response.body
  end

  def guild_members
    # guild_members = bnet_client.guild_members(ENV['GUILD_NAME'])
    # filtered_guild_members = guild_members.select do |member|
    #   member['rank']<=4
    # end
    #
    # membersArr=[]
    # filtered_guild_members.each do |member|
    #   puts "fetching #{member['character']['name']}"
    #   member_datum = MembersDatum.find_by(bnet_id: member['character']['name'])
    #   # if !member_datum
    #     # member_info = bnet_client.character_info(member['character']['name'])
    #     # member_datum = MembersDatum.find_or_create_by(bnet_id: member['character']['name'])
    #     # member_datum.update(body: member_info.to_json)
    #   end
    #   membersArr.push(JSON.parse(member_datum.body))
    # end
    #
    # render json: membersArr
    guild_members = MembersDatum.recent.to_a
    member_jsons = guild_members.map do |member|
      JSON.parse(member.body)
    end
    render json: member_jsons
  end

  def character_info
    render json: bnet_client.character_info(params[:name])
  end

  def officer_info
    officers = MembersDatum.find_all_officers

    legion_raid_officer_info = data_manipulation_officer_info.legion_raid_officer_info(officers)

    merged_legion_raid_officer_info = data_manipulation_officer_info.merge_legion_raid_officer_info(legion_raid_officer_info)

    render json: merged_legion_raid_officer_info
  end

  def latest_logs
    guild_log_ids = logs_client.guild_log_ids(ENV['GUILD_NAME'])
    guild_leader_personal_log_ids = logs_client.guild_leader_personal_logs()
    all_log_ids = guild_log_ids.push(*guild_leader_personal_log_ids)
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

    logs_arr=[]
    log_ids_to_be_rendered.last(ENV['LOG_COUNT'].to_i).each do |log_id|
      raid_log = RaidLog.find_by(w_log_id: log_id['id'])
      if !raid_log
        raid_log_body = logs_client.guild_log(log_id['id'])
        raid_log = RaidLog.find_or_create_by(w_log_id: log_id['id'])
        raid_log.update(body: raid_log_body.to_json)
      end
      logs_arr.push(JSON.parse(raid_log.body))
      # logs_arr.push(logs_client.guild_log(log_id['id']))
    end
    render json: logs_arr;
  end

  def achievements
    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    render json: data_manipulation_achievements.massage_achievements(guild_data)
  end


  def log
    render json: logs_client.guild_log(params[:id])
  end

  def character_parse
    render json: logs_client.character_parse(params[:name])
  end

  private

  def bnet_client
    ::Bnet::Client.new
  end

  def logs_client
    ::Warcraftlogs::Client.new
  end

  def data_manipulation_officer_info
    ::DataManipulation::OfficerInfo.new
  end

  def data_manipulation_achievements
    ::DataManipulation::Achievements.new
  end
end
