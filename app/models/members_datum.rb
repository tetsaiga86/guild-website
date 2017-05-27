class MembersDatum < ApplicationRecord
  scope :recent, -> do
    where(updated_at: 59.minutes.ago..Time.now)
    .where.not(body: nil)
  end

  def self.find_all_officers
    officer_names = ENV['OFFICERS'].split(' ')

    MembersDatum.where(bnet_id: officer_names).pluck(:body_json)
    # ENV['OFFICERS'].split(' ').map do |officer|
    #   MembersDatum.find_by(bnet_id: officer).body_json
    # end
  end

  def update_from_hash(hash)
    if hash['code']!=504
      update(body: hash.to_json, body_json: hash, updated_at:Time.now)
    else
      update(updated_at:Time.now)
    end
  end

end
