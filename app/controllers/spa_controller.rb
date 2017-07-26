class SpaController < ApplicationController
  def index
    js_env
  end
  def spa_route
    js_env({ route: "/spa/#{params[:spa_route]}" })
    render :index
  end

  protected

  def js_env(values = {})
    @js_env = {
      api_key: ENV['API_KEY'],
      realm: ENV['REALM'],
      guild_name: ENV['GUILD_NAME'],
      wow_logs_api_key: ENV['WOW_LOGS_API_KEY'],
      membership_level: membership_level,
      current_user_name: current_user_name,
      current_user_thumbnail: current_user_thumbnail
    }.merge(values).to_json
  end

  def membership_level
    if user_signed_in?
      current_user.user_level || 100
    else
      100
    end
  end

  def current_user_name
    if user_signed_in?
      current_user.character_name || 'not signed in'
    else
      'not signed in'
    end
  end

  def current_user_thumbnail
    if user_signed_in?
      current_user.thumbnail || 'not signed in'
    else
      'not signed in'
    end
  end
end
