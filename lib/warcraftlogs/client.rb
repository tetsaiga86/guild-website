require 'httparty'
require 'addressable'
require 'addressable/uri'

module Warcraftlogs
  class Client
    LOCALE = 'US'.freeze
    REALM = ENV['REALM']
    API_KEY = ENV['WOW_LOGS_API_KEY']
    GUILD_LEADER = ENV['GUILD_LEADER']
    BASE_URL = 'https://www.warcraftlogs.com/v1/'.freeze

    def guild_log_ids(name)
      parsed_response = request "reports/guild/#{URI.escape name}/#{REALM}/#{LOCALE}"
      # parsed_response.last(12)
    end

    def guild_leader_personal_logs()
      parsed_response = request "reports/user/#{URI.escape GUILD_LEADER}"
    end

    def guild_log(log_id)
      request "report/fights/#{log_id}"
    end

    def character_parse(name)
      request "parses/character/#{URI.escape name}/#{REALM}/#{LOCALE}"
    end

    private

    def request(request_path)
      uri = ::Addressable::URI.new
      uri.query_values = {
        api_key: API_KEY
      }

      response = HTTParty.get "#{BASE_URL}#{request_path}?#{uri.query}"
      response.parsed_response
    end
  end
end
