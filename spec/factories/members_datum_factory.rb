FactoryGirl.define do
  factory :members_datum do
    bnet_id SecureRandom.hex
    body File.read(Rails.root.join('spec', 'fixtures', 'member_data_body1.json'))
  end
end
