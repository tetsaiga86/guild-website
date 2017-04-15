class SessionsController < ApplicationController
  def create
    # session[:characters] = user_guild_characters
    # session[:membership_level] = user_level
    redirect_to '/'
  end

  protected

  def wow_profile
    @wow_profile ||= auth_hash.extra
  end

  def user_level
    @user_level ||= begin
      user_guild_characters.map do |character|

        membership = guild_members.find do |membership_candidate|
          membership_candidate['character']['name'] == character['name']
        end

        membership['rank']
      end.min
    end
  end

  def user_guild_characters
    @user_guild_characters ||= wow_profile['characters'].filter do |character|
      character['guild'] == ENV['GUILD_NAME']
    end
  end

  def guild_members
    @guild_members ||= client.guild_members(ENV['REALM'], ENV['GUILD_NAME'])
  end

  def client
    @client ||= Bnet::Client.new
  end

  def auth_hash
    request.env['omniauth.auth']
  end
end
