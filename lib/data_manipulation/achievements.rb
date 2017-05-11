module DataManipulation
  class Achievements
    def massage_achievements(guild_data)
      bnet_achievements = guild_data['achievements']

      achievement_timestamps = Hash[bnet_achievements['achievementsCompleted'].zip(bnet_achievements['achievementsCompletedTimestamp'])]
      achievement_ids = bnet_achievements['achievementsCompleted']

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

      filtered_news.select! do |newsItem|
        newsItem['item']['quality'] && newsItem['item']['itemLevel'] && ((newsItem['item']['quality'] >= ENV['MINIMUM_ITEM_QUALITY'].to_i) && (newsItem['item']['itemLevel'] >= ENV['MINIMUM_ITEM_LEVEL'].to_i))
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

      massaged_achievements.sort! do |a,b|
        b[:timestamp] <=> a[:timestamp]
      end

      guild_data['news'] = filtered_news
      guild_data['achievements'] = massaged_achievements

      return guild_data
    end
  end
end
