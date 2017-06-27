module Admin
  class DkpController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def update_all
      xml = Nokogiri::XML(params[:xml_string])
      xml.css('PLAYER').each do |player|
        Dkp
          .find_or_create_by(name: player['playername'])
          .update(rank: player['rank'], net_dkp: player['net'], total_dkp: player['total'], spent_dkp: player['spent'], hours: player['hours'])
      end
    end
  end
end
