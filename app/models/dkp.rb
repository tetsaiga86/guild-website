class Dkp < ApplicationRecord
  def to_json_str
    "{
      \"total_dkp\": #{total_dkp},
      \"spent_dkp\": #{spent_dkp},
      \"net_dkp\": #{net_dkp}
    }"
  end
end
