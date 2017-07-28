require 'httparty'
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :rememberable, :trackable

  devise :omniauthable, :omniauth_providers => [:bnet]

  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid, battletag: auth.info['battletag']).first_or_create

    user_access_token = auth.credentials.token
    # characters = user_bnet_client(user_access_token).profile_wow_characters['characters']
    characters = get_user_characters(user_access_token)['characters']
    user_character = get_best_character(characters)

    user.character_name = user_character['name']
    user.user_level = user_character['rank']
    user.thumbnail = user_character['thumbnail']
    user.moderator = user.user_level <= ENV['OFFICER_RANK']
    user.save

    # debugger
    user
  end

  def self.get_best_character(characters)
    guild_members = bnet_client.guild_members(ENV['GUILD_NAME'])
    characters_in_guild = characters.select do |character|
      character['guild'] == ENV['GUILD_NAME'] && character['realm'].downcase.sub("'", "") == ENV['REALM']
    end

    characters_in_guild.each do |character|
      matching_member = guild_members.select do |member|
        member['character']['name'] == character['name']
      end.first

      unless matching_member.nil?
        character['rank'] = matching_member['rank']
      end
    end

    characters_in_guild.sort! do |a,b|
      a['rank']<=>b['rank']
    end.first
  end

  def self.bnet_client
    ::Bnet::Client.new
  end

  def self.user_bnet_client(token)
    ::Bnet::Client.new(1, token)
  end

  def self.get_user_characters(user_access_token)
    HTTParty.get("https://us.api.battle.net/wow/user/characters?access_token=#{user_access_token}").parsed_response
  end
end
