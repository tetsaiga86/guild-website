require 'rails_helper'

RSpec.describe ProxyController, type: :controller do
  describe '#news' do
    it 'invokes HTTParty.get' do
      expect(HTTParty).to receive(:get).with('https://worldofwarcraft.com/en-US/news').and_return(OpenStruct.new(:body => 'foo'))
      get :news
    end

    it 'returns http ok' do
      allow(HTTParty).to receive(:get).with('https://worldofwarcraft.com/en-US/news').and_return(OpenStruct.new(:body => 'foo'))
      get :news

      expect(response).to have_http_status(:ok)
    end

    it 'returns upstream body' do
      allow(HTTParty).to receive(:get).with('https://worldofwarcraft.com/en-US/news').and_return(OpenStruct.new(:body => 'foo'))
      get :news

      expect(response.body).to eq('foo')
    end
  end

  describe '#guild_members' do
    before do
      create(:members_datum)
      create(:members_datum, updated_at: 10.days.ago)
    end

    it 'returns http ok' do
      get :guild_members
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :guild_members
      expect { JSON.parse(response.body) }.not_to raise_error
    end

    it 'returns json without old entries' do
      get :guild_members
      parsedBody = JSON.parse(response.body)
      expect(parsedBody.length).to eq(1)
    end
  end

  describe '#character_info' do
    before do
      bnet_client_double = instance_double("Bnet::Client")
      allow(bnet_client_double).to receive(:character_info).and_return({})
      allow(controller).to receive(:bnet_client).and_return(bnet_client_double)
    end

    it 'returns http ok' do
      get :character_info, params: {name: 'foo'}
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :character_info, {name: 'foo'}
      expect {JSON.parse(response.body)}.not_to raise_error
    end
  end

  describe '#officer_info' do
    before do
      create(:members_datum, bnet_id: 'foo')
      create(:members_datum, bnet_id: 'bar')
      ENV['OFFICERS']='foo bar'
    end

    it 'returns http ok' do
      get :officer_info
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :officer_info
      expect {JSON.parse(response.body)}.not_to raise_error
    end

    it 'returns correct number of raids' do
      get :officer_info
      expect(JSON.parse(response.body).length).to eq(ENV['NUMBER_OF_RAIDS'].to_i)
    end
  end

  describe '#latest_logs' do
    before do
      data_manipulation_latest_logs_double = instance_double("DataManipulation::LatestLogs")
      allow(data_manipulation_latest_logs_double).to receive(:massage_logs).and_return({})
      allow(controller).to receive(:data_manipulation_latest_logs).and_return(data_manipulation_latest_logs_double)
    end

    it 'returns http ok' do
      get :latest_logs
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :latest_logs
      expect {JSON.parse(response.body)}.not_to raise_error
    end
  end

  describe '#achievements' do
    context 'http behavior' do
      before do
        bnet_client_double = instance_double("Bnet::Client")
        data_manipulation_achievements_double = instance_double("DataManipulation::Achievements")
        allow(data_manipulation_achievements_double).to receive(:massage_achievements).and_return({})
        allow(bnet_client_double).to receive(:achievements).and_return({})
        allow(controller).to receive(:bnet_client).and_return(bnet_client_double)
        allow(controller).to receive(:data_manipulation_achievements).and_return(data_manipulation_achievements_double)
      end

      it 'returns http ok' do
        get :achievements
        expect(response).to have_http_status(:ok)
      end

      it 'returns valid json' do
        get :achievements
        expect {JSON.parse(response.body)}.not_to raise_error
      end
    end

    it 'calls bnet_client.achievements with correct guild name' do
      bnet_client_double = instance_double("Bnet::Client")
      data_manipulation_achievements_double = instance_double("DataManipulation::Achievements")
      allow(data_manipulation_achievements_double).to receive(:massage_achievements).and_return({})
      expect(bnet_client_double).to receive(:achievements).with(ENV['GUILD_NAME'])
      allow(controller).to receive(:bnet_client).and_return(bnet_client_double)
      allow(controller).to receive(:data_manipulation_achievements).and_return(data_manipulation_achievements_double)
      get :achievements
    end
  end

  describe '#log' do
    before do
      logs_client_double = instance_double("Warcraftlogs::Client")
      allow(logs_client_double).to receive(:guild_log).and_return({})
      allow(controller).to receive(:logs_client).and_return(logs_client_double)
    end

    it 'returns http ok' do
      get :log, params: {id: '111'}
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :log, params: {id: '111'}
      expect {JSON.parse(response.body)}.not_to raise_error
    end
  end

  describe '#character_parse' do
    before do
      logs_client_double = instance_double("Warcraftlogs::Client")
      allow(logs_client_double).to receive(:character_parse).and_return({})
      allow(controller).to receive(:logs_client).and_return(logs_client_double)
    end

    it 'returns http ok' do
      get :character_parse, params: {name: 'foo'}
      expect(response).to have_http_status(:ok)
    end

    it 'returns valid json' do
      get :character_parse, params: {name: 'foo'}
      expect {JSON.parse(response.body)}.not_to raise_error
    end
  end
end
