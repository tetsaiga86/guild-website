require 'rails_helper'
require 'admin/announcements_controller'
RSpec.describe Admin::AnnouncementsController, type: :controller do

  describe '#index' do
    before do
      create(:announcement, title: 'foo', body: 'bar', order: 1, retired: false)
    end

    it 'returns valid json' do
      get :index
      expect { JSON.parse(response.body) }.not_to raise_error
    end

    it 'returns http ok' do
      get :index
      expect(response).to have_http_status(:ok)
    end

    it 'returns all entries' do
      get :index
      expect(JSON.parse(response.body).length).to eq(1)
    end
  end

  describe '#create' do
    # FIXME:
    it 'creates a new announcement' do
      post :create, announcement: attributes_for(:announcement)
      expect(JSON.parse(response.body).length).to eq(1)
    end

    it 'returns valid json of all announcements in order' do

    end
  end

  describe '#destroy' do
    let(:announcement) { create(:announcement, title: 'foo', body: 'bar', order: 1, retired: false) }

    it 'destroys an announcement' do
      delete :destroy, id: announcement.id
      expect(JSON.parse(response.body).length).to eq(0)
    end

    it 'returns valid json of all announcements in order' do

    end
  end

  describe '#update_many' do
    # FIXME:
    it 'updates announcements' do

    end

    it 'returns valid json of all announcements in order' do

    end
  end
end
