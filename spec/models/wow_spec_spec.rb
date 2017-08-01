require 'rails_helper'

RSpec.describe WowSpec, type: :model do
  describe 'scope.active' do
    it 'excludes non active records' do
      create(:wow_class, id: 1, name: 'foo-class')
      non_active_datum = create(:wow_spec, wow_class_id: 1, name: 'foo', active: false, img_url: 'www.foobar.com')
      expect(WowSpec.active).to_not include(non_active_datum)
    end

    it 'includes active records' do
      create(:wow_class, id: 1, name: 'foo-class')
      active_datum = create(:wow_spec, wow_class_id: 1, name: 'foo', active: true, order: 1, img_url: 'www.foobar.com')
      expect(WowSpec.active).to include(active_datum)
    end

    it 'puts the active records in order from lowest to highest' do
      create(:wow_class, id: 1, name: 'foo_class')
      first_wow_spec = create(:wow_spec, wow_class_id: 1, name: 'first', active: true, order: 1, img_url: 'www.foobar.com')
      second_wow_spec = create(:wow_spec, wow_class_id: 1, name: 'second', active: true, order: 2, img_url: 'www.foobar.com')
      third_wow_spec = create(:wow_spec, wow_class_id: 1, name: 'third', active: true, order: 3, img_url: 'www.foobar.com')

      expect(WowSpec.active).to eq([first_wow_spec, second_wow_spec, third_wow_spec])
      expect(WowSpec.active).not_to eq([second_wow_spec, first_wow_spec, third_wow_spec])
    end
  end
end
