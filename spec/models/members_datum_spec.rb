require 'rails_helper'

RSpec.describe MembersDatum, type: :model do
  describe '.find_all_officers' do
    it 'returns the jsons for all the officers in the .env' do

    end
  end

  describe 'scope.recent' do
    it 'includes recently updated record with body' do
      Timecop.freeze() do
        datum = create(:members_datum, updated_at: 10.minutes.ago, body:'foo')
        expect(MembersDatum.recent).to include(datum)
      end
    end

    it 'excludes stail records' do
      Timecop.freeze() do
        datum = create(:members_datum, updated_at: 60.minutes.ago, body:'foo')
        expect(MembersDatum.recent).not_to include(datum)
      end
    end

    it 'excludes records with nil bodies' do
      Timecop.freeze() do
        datum = create(:members_datum, updated_at: 10.minutes.ago, body: nil)
        expect(MembersDatum.recent).not_to include(datum)
      end
    end
  end

  describe '#update_from_hash' do
    it 'does not change body or body_json when code is 504' do
      datum = create(:members_datum)

      expect do
        datum.update_from_hash('code' => 504)
      end.not_to change(datum, :body)

      expect do
        datum.update_from_hash('code' => 504)
      end.not_to change(datum, :body_json)
    end

    it 'updates body and body_json' do
      datum = create(:members_datum)

      expect do
        datum.update_from_hash('foo' => 'bar')
      end.to change(datum, :body_json)

      expect do
        datum.update_from_hash('foo' => 'boo')
      end.to change(datum, :body)
    end
  end
end
