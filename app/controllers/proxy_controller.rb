class ProxyController < ApplicationController
  skip_before_filter :verify_authenticity_token
  include Thredded::Engine.routes.url_helpers
  def user_private_message
    user = User.find(params[:id])

    if user == current_user
      redirect_to "https://worldofwarcraft.com/en-us/character/#{ENV['REALM']}/#{user.character_name}"
    else
      redirect_to new_private_topic_path(user_names: user.character_name)
    end
  end

  def news
    bnet_response = HTTParty.get 'https://worldofwarcraft.com/en-US/news'
    render body: bnet_response.body
  end

  def guild_members
    render json: MembersDatum.with_dkp
    # guild_members = MembersDatum.recent.to_a
    # member_jsons = guild_members.map(&:body)
    # render json: "[#{member_jsons.join(',')}]"
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
    # guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    # render json: data_manipulation_achievements.massage_achievements(guild_data)
    return head :not_found unless GuildUpdateCache.count > 0
    render json: GuildUpdateCache.first.json
  end

  def announcements
    render json: Announcement.active.order(:order)
  end

  def all_announcements
    render json: Announcement.order(:order)
  end

  def recruitment
    render json: WowSpec.includes(:wow_class).active, include: :wow_class
  end

  def all_recruitments
    render json: WowSpec.includes(:wow_class), include: :wow_class
  end

  def wow_classes
    render json: WowClass.includes(:wow_specs), include: :wow_specs
  end

  def log
    render json: logs_client.guild_log(params[:id])
  end

  def character_parse
    render json: logs_client.character_parse(params[:name])
  end

  def recruitment_application
    applicant = RecruitApplication.find_or_create_by(battletag: params[:battletag])
    applicant.update(name_server: params[:name_server], class_spec: params[:class_spec], armoryUrl: params[:armoryUrl], email: params[:email], q1: params[:q1], q2: params[:q2], q3: params[:q3], q4: params[:q4], q5: params[:q5])
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
