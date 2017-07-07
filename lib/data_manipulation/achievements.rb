module DataManipulation
  class Achievements
    def massage_achievements(guild_data)
      bnet_achievements = guild_data['achievements']

      achievement_timestamps = Hash[bnet_achievements['achievementsCompleted'].zip(bnet_achievements['achievementsCompletedTimestamp'])]
      achievement_ids = bnet_achievements['achievementsCompleted']

      # Iterate over all achievements
      massaged_achievements = AchievementDatum.all.map do |datum|
        {
          id: datum.bnet_id.to_i,
          timestamp: achievement_timestamps[datum.bnet_id.to_i],
          details: JSON.parse(datum.body)
        }
      end

      massaged_achievements.sort! do |a, b|
        b[:timestamp] <=> a[:timestamp]
      end

      guild_data['achievements'] = massaged_achievements

      # Filter News Items

      filtered_news = guild_data['news'].select do |fn|
        fn['type'] == 'itemLoot'
      end

      filtered_news_ids = filtered_news.map {|fn| fn_id(fn)}
      item_infos = CharacterLootDatum.where(bnet_id: filtered_news_ids).to_a

      filtered_news.each do |newsItem|
        item_info = item_infos.select { |i| i.bnet_id == fn_id(newsItem) }.first

        unless item_info
          item_info_body = bnet_client.item_info(newsItem)
          item_info = CharacterLootDatum.create(bnet_id: fn_id(newsItem), body: item_info_body.to_json)
          newsItem['item'] = item_info_body
        else
          newsItem['item'] = JSON.parse(item_info.body)
        end
      end

      filtered_news.select! do |newsItem|
        newsItem['item'] && newsItem['item']['quality'] && newsItem['item']['itemLevel'] && newsItem['item']['itemLevel'] >= ENV['MINIMUM_ITEM_LEVEL'].to_i
      end

      filtered_news.sort! do |a,b|
        b['timestamp'] <=> a['timestamp']
      end

      topFourtyNews = filtered_news.first(40)

      guild_data['news'] = topFourtyNews

      return guild_data
    end

    def bnet_client
      ::Bnet::Client.new
    end

    def fn_id(fn)
      bonusLists = fn['bonusLists'] || []
      "#{fn['itemId']}_#{fn['context']}_#{bonusLists.join('*')}"
    end
  end
end
