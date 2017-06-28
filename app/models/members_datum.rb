class MembersDatum < ApplicationRecord
  belongs_to :dkp
  before_validation :populate_dkp

  scope :recent, -> do
    where(updated_at: 59.minutes.ago..Time.now)
    .where.not(body: nil)
  end

  def self.find_all_officers
    officer_names = ENV['OFFICERS'].split(' ')

    MembersDatum.where(bnet_id: officer_names).pluck(:body_json)
  end

  def self.with_dkp
    member_jsons = self.preload(:dkp).recent.to_a.map do |member|
      "{
        \"body\": #{member.body},
        \"dkp\": #{member.dkp.to_json_str || 0}
      }"
    end
    "[#{member_jsons.join(',')}]"
  end

  def update_from_hash(hash)
    if hash['code']!=504
      update(body: hash.to_json, body_json: hash, updated_at:Time.now)
    else
      update(updated_at:Time.now)
    end
  end

  def populate_dkp
    if read_attribute(:dkp_id).nil?
      self.dkp = Dkp.find_by(name: self.bnet_id)
    end
    true
  end
end
