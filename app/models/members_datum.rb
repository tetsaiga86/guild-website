class MembersDatum < ApplicationRecord
  scope :recent, -> { where updated_at: 59.minutes.ago..Time.now}

  def self.find_all_officers
    ENV['OFFICERS'].split(' ').map do |officer|
      officer = JSON.parse(MembersDatum.find_by(bnet_id: officer).body)
    end
  end
end
