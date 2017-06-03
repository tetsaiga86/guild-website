Rails.application.routes.draw do
  root to: 'spa#index'

  get '/spa/:spa_route' => 'spa#spa_route'

  get '/auth/:provider/callback', to: 'sessions#create'

  get '/news' => 'proxy#news'

  get '/api/guild_members' => 'proxy#guild_members'
  get '/api/character_info/:name' => 'proxy#character_info'
  get '/api/latest_logs' => 'proxy#latest_logs'
  get '/api/log/:id' => 'proxy#log'
  get '/api/character_parse/:name' => 'proxy#character_parse'
  get '/api/achievements' => 'proxy#achievements'
  get '/api/announcements' => 'proxy#announcements'
  get '/api/recruitment' => 'proxy#recruitment'
  get '/api/officer_info' => 'proxy#officer_info'



  namespace :admin do
    resources :recruitments, only: [:index, :create, :destroy, :update]
    resources :announcements, only: [:index, :create, :destroy, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
