class MembersDatum < ApplicationRecord
  scope :recent, -> { where updated_at: 59.minutes.ago..Time.now}

  def self.find_all_officers
    ENV['OFFICERS'].split(' ').map do |officer|
      officer = JSON.parse(MembersDatum.find_by(bnet_id: officer).body)
    end
  end

  def update_from_hash(hash)
    if hash['code']!=504
      update(body: hash.to_json, updated_at:Time.now)
    else
      update(updated_at:Time.now)
    end
  end

end
