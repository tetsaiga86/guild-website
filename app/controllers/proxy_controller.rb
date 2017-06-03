class ProxyController < ApplicationController
  def news
    bnet_response = HTTParty.get 'https://worldofwarcraft.com/en-US/news'
    render body: bnet_response.body
  end

  def guild_members
    guild_members = MembersDatum.recent.to_a
    member_jsons = guild_members.map(&:body)
    render json: "[#{member_jsons.join(',')}]"
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
    render json: data_manipulation_latest_logs.massage_logs(logs_client)
  end

  def achievements
    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    render json: data_manipulation_achievements.massage_achievements(guild_data)
  end

  def announcements
    render json: Announcement.active.order(:order)
  end

  def recruitment
    render json: Recruitment.active
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

  def data_manipulation_latest_logs
    ::DataManipulation::LatestLogs.new
  end
end
