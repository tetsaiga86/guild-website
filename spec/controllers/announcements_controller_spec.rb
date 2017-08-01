require 'rails_helper'
require 'admin/announcements_controller'
RSpec.describe Admin::AnnouncementsController, type: :controller do
  describe '#index' do
    let!(:announcement) { create(:announcement, title: 'foo', body: 'bar', order: 1, retired: false) }
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
      parsed_body = JSON.parse(response.body)
      expect(parsed_body.length).to eq(1)
    end
  end

  describe '#create' do
    let!(:announcement2) { create(:announcement, title: 'foo', body: 'bar', order: 2, retired: false) }
    let!(:announcement3) { create(:announcement, title: 'foo', body: 'bar', order: 3, retired: false) }

    it 'creates a new announcement and returns a valid json of all announcements in order' do
      post :create, announcement: attributes_for(:announcement)
      parsed_body = JSON.parse(response.body)

      expect(parsed_body.length).to eq(3)
      expect(parsed_body[0]['order']).to eq(1)
      expect(parsed_body[1]['order']).to eq(2)
      expect(parsed_body[2]['order']).to eq(3)
    end
  end

  describe '#destroy' do
    let(:announcement) { create(:announcement, title: 'foo', body: 'bar', order: 1, retired: false) }
    let!(:announcement2) { create(:announcement, title: 'foo', body: 'bar', order: 2, retired: false) }
    let!(:announcement3) { create(:announcement, title: 'foo', body: 'bar', order: 3, retired: false) }

    it 'destroys an announcement and returns a valid json of all announcements in order' do
      delete :destroy, id: announcement.id
      parsed_body = JSON.parse(response.body)

      expect(parsed_body.length).to eq(2)
      expect(parsed_body[0]['order']).to eq(1)
      expect(parsed_body[1]['order']).to eq(2)
    end
  end

  describe '#update_many' do
    let!(:announcement) { create(:announcement, title: 'foo1', body: 'bar', order: 1, retired: false) }
    let!(:announcement2) { create(:announcement, title: 'foo2', body: 'bar', order: 2, retired: false) }
    let!(:announcement3) { create(:announcement, title: 'foo3', body: 'bar', order: 3, retired: false) }
    let!(:announcement4) { create(:announcement, title: 'foo4', body: 'bar', order: 4, retired: true) }

    it 'updates announcements and returns a valid json of all announcements in order' do
      announcement.order = 3
      announcement3.order = 1
      announcement4.retired = false
      patch :update_many, announcements: {0 => announcement.attributes, 1 => announcement3.attributes, 2 => announcement4.attributes}
      # patch :update_many, params: { announcements: { '0' => announcement.serializable_hash, '1' => {}, '2' => {} } }
      parsed_body = JSON.parse(response.body)

      expect(parsed_body.length).to eq(4)
      expect(parsed_body[0]['title']).to eq(announcement3.title)
      expect(parsed_body[2]['title']).to eq(announcement.title)
      expect(parsed_body[3]['retired']).to eq(announcement4.retired)
    end
  end
end
