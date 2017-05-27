require 'httparty'
require 'addressable'
require 'addressable/uri'

module Bnet
  class Client
    BASE_URL = 'https://us.api.battle.net/wow/'.freeze
    LOCALE = 'en_US'.freeze
    def realm
      ENV['REALM']
    end

    def api_key
      ENV['API_KEY']
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

    def item_info(id)
      request "item/#{id}"
    end

    def character_info(name)
      query_values = { fields: 'items stats talents progression'}

      request "character/#{realm}/#{URI.escape name}", query_values
    end

    private

    def request(request_path, query_values = {})
      uri = ::Addressable::URI.new
      uri.query_values = {
        apikey: api_key,
        locale: LOCALE
      }.merge(query_values)

      response = HTTParty.get "#{BASE_URL}#{request_path}?#{uri.query}"

      response.parsed_response
    end
  end
end
