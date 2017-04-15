require 'httparty'
require 'addressable/uri'

module Bnet
  class Client
    FIELDS = 'members'.freeze
    LOCALE = 'en_US'.freeze
    API_KEY = ENV['API_KEY']

    def guild_members(realm, guild_name)
      uri = Adressable::URI.new
      uri.query_values = {
        fields: FIELDS,
        locale: LOCALE,
        apikey: API_KEY
      }

      response = HTTParty.get "https://us.api.battle.net/wow/guild/#{realm}/#{URI::Escape guild_name}?#{uri.query}"
      response.parsed_response['members']
    end
  end
end
