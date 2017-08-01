require 'rails_helper'

RSpec.describe Admin::WowSpecController, type: :controller do
  render_views
  describe '#list' do
    it 'returns 2 arrays (by_spec and by_class)' do
      wow_class = create(:wow_class)
      create(:wow_spec, wow_class: wow_class, active: true)

      get :list
      parsed_body = JSON.parse(response.body)

      expect(parsed_body['by_spec']).to be_a(Array)
      expect(parsed_body['by_class']).to be_a(Array)
    end
  end

  describe '#update_many' do
    let!(:wow_class_1) { create(:wow_class, id: 1, name: 'foo_class') }
    let!(:wow_spec_1) { create(:wow_spec, wow_class_id: 1, name: 'first', active: false, img_url: 'www.foobar.com') }
    let!(:wow_spec_2) { create(:wow_spec, wow_class_id: 1, name: 'second', active: false, img_url: 'www.foobar.com') }
    let!(:wow_spec_3) { create(:wow_spec, wow_class_id: 1, name: 'third', active: true, img_url: 'www.foobar.com') }

    it 'updates the active and order prop of each wow_spec given' do
      updated_wow_specs = {
        '0' => {
          id: wow_spec_1.id,
          active: true,
          order: 10
        },
        '1' => {
          id: wow_spec_2.id,
          active: true,
          order: 11
        },
        '2' => {
          id: wow_spec_3.id,
          active: false,
          order: 12
        }
      }

      post :update_many, params: { wow_specs: updated_wow_specs }

      updated_wow_specs.each do |_key, wow_spec|
        expect(WowSpec.find(wow_spec[:id]).active).to eq(wow_spec[:active])
        expect(WowSpec.find(wow_spec[:id]).order).to eq(wow_spec[:order])
      end
    end

    it 'renders :list' do
      post :update_many, params:
      {
        wow_specs:
        {
          '0' => {
            id: wow_spec_1.id,
            active: true,
            order: 1
          }
        }
      }

      expect(response).to render_template(:list)
    end
  end
end
