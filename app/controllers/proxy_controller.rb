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
    guild_data = bnet_client.achievements(ENV['GUILD_NAME'])
    bnet_achievements = guild_data['achievements']

    achievement_timestamps = Hash[bnet_achievements['achievementsCompleted'].zip(bnet_achievements['achievementsCompletedTimestamp'])]
    achievement_ids = bnet_achievements['achievementsCompleted']
    # achievements_data = achievement_ids.map { |id| bnet_client.achievement_info(id) }

    # guild_data['achievements'] = achievements_data

    filtered_news = guild_data['news'].select do |news_item|
      news_item['context'].include?('raid') || news_item['context'].include?('dungeon')
    end

    filtered_news.each do |newsItem|
      item_info = CharacterLootDatum.find_by(bnet_id: newsItem['itemId'])

      unless item_info
        item_info_body = bnet_client.item_info(newsItem['itemId'])
        item_info = CharacterLootDatum.create(bnet_id: newsItem['itemId'], body: item_info_body.to_json)
      end

      newsItem['item'] = JSON.parse(item_info.body)
    end

    massaged_achievements = []

    # Iterate over all achievements

    massaged_achievements = AchievementDatum.all.map do |datum|
      {
        id: datum.bnet_id.to_i,
        timestamp: achievement_timestamps[datum.bnet_id.to_i],
        details: JSON.parse(datum.body)
      }
    end

    guild_data['news'] = filtered_news
    guild_data['achievements'] = massaged_achievements

    render json: guild_data
    # render json: bnet_client.achievements(ENV['GUILD_NAME'])
  end

  # def achievement_info(id)
  #   # TODO
  # end
  #
  # def item_info(item_id)
  #   # TODO
  # end

  def filter_items(item_data)
    # TODO : return true or false
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
