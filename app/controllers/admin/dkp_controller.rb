module Admin
  class DkpController < AdminController
    skip_before_filter :verify_authenticity_token

    def update_all
      xml_string = params[:xml_string].sub('ISO-8859-1', 'UTF-8')
      xml = Nokogiri::XML(xml_string)
      xml.css('PLAYER').each do |player|
        Dkp
          .find_or_create_by(name: player['playername'].split('-')[0])
          .update(rank: player['rank'], net_dkp: player['net'], total_dkp: player['total'], spent_dkp: player['spent'], hours: player['hours'])
      end
      head(:ok)
    end
  end
end
