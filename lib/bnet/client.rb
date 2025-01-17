require 'httparty'
require 'addressable'
require 'addressable/uri'

module Bnet
  class Client
    BASE_URL = 'https://us.api.battle.net/wow/'.freeze
    LOCALE = 'en_US'.freeze

    def initialize(limit=1, token=nil)
      @limit = limit
      @token = token
    end

    def realm
      ENV['REALM']
    end

    def api_key
      @token || ENV['API_KEY']
    end

    def guild_members(name)
      query_values = { fields: 'members' }

      parsed_response = request "guild/#{realm}/#{URI.escape name}", query_values
      parsed_response['members']
    end

    def achievements(name)
      query_values = { fields: 'news achievements' }

      request "guild/#{realm}/#{URI.escape name}", query_values
    end

    def achievement_info(id)
      request "achievement/#{id}"
    end

    def item_description(id)
      request "item/#{id}"
    end

    def item_info(item)
      request "item/#{item['itemId']}/#{item['context']}", bl: item['bonusLists']
    end

    def character_info(name)
      query_values = { fields: 'items stats talents progression'}

      request "character/#{realm}/#{URI.escape name}", query_values
    end

    def profile_wow_characters
      raise "Can't look at profile without token" unless @token
      request "wow/user/characters"
    end

    private

    def request(request_path, query_values = {})
      uri = ::Addressable::URI.new
      uri.query_values = {
        apikey: api_key,
        locale: LOCALE
      }.merge(query_values)

      response = with_retry(@limit) do
        HTTParty.get "#{BASE_URL}#{request_path}?#{uri.query}"
      end

      if response.code == 200
        response.parsed_response
      else
        nil
      end
    end

    def with_retry(limit=5)
      response = nil
      1.upto(limit) do
        response = yield
        if response.code == 200
          break
        end
      end
      response
    end
  end
end
