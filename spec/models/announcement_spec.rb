require 'rails_helper'

RSpec.describe Announcement, type: :model do
  describe 'scope.active' do
    it 'excludes non active records' do
      non_active_announcement = create(:announcement, title: 'foo', body: 'bar', retired: true)
      expect(Announcement.active).to_not include(non_active_announcement)
    end

    it 'includes active records' do
      active_announcement = create(:announcement, title: 'foo', body: 'bar', order: 1, retired: false)

      expect(Announcement.active).to include(active_announcement)
    end
  end
end
