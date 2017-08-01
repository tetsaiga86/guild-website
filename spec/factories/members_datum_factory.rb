FactoryGirl.define do
  factory :members_datum do
    bnet_id SecureRandom.hex
    body_json JSON.parse(File.read(Rails.root.join('spec', 'fixtures', 'member_data_body1.json')))
    body File.read(Rails.root.join('spec', 'fixtures', 'member_data_body1.json'))
  end
end
