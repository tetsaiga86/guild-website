class ProxyController < ApplicationController
  def news
    bnet_response = HTTParty.get 'https://worldofwarcraft.com/en-US/news'
    render body: bnet_response.body
  end

  def guild_members
    render json: bnet_client.guild_members(ENV['GUILD_NAME'])
  end

  def character_info
    render json: bnet_client.character_info(params[:name])
  end

  def log_ids
    render json: logs_client.guild_log_ids(ENV['GUILD_NAME'])
  end

  def achievements
    render json: bnet_client.achievements(ENV['GUILD_NAME'])
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
end
