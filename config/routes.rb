Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => 'users/omniauth_callbacks'}

  mount Thredded::Engine => '/forum'

  root to: 'spa#index'

  get '/spa/:spa_route' => 'spa#spa_route'

  get '/news' => 'proxy#news'
  get '/users/:id' => 'proxy#user_armory'

  get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy', as: 'destroy_user_session'

  get '/api/guild_members' => 'proxy#guild_members'
  get '/api/character_info/:name' => 'proxy#character_info'
  get '/api/latest_logs' => 'proxy#latest_logs'
  get '/api/log/:id' => 'proxy#log'
  get '/api/character_parse/:name' => 'proxy#character_parse'
  get '/api/achievements' => 'proxy#achievements'
  get '/api/announcements' => 'proxy#announcements'
  get '/api/all_announcements' => 'proxy#all_announcements'
  get '/api/recruitment' => 'proxy#recruitment'
  get '/api/all_recruitments' => 'proxy#all_recruitments'
  get '/api/wow_classes' => 'proxy#wow_classes'
  get '/api/officer_info' => 'proxy#officer_info'

  post '/recruitment_application' => 'proxy#recruitment_application'


  namespace :admin do
    resources :recruitments, only: [:index, :create, :destroy, :update]
    resources :announcements, only: [:index, :create, :destroy, :update]

    post '/announcements_many' => 'announcements#update_many'

    get '/wow_specs' => 'wow_spec#list'
    post '/wow_specs_many' => 'wow_spec#update_many'

    get '/recruit_app_list' => 'recruit_application#list'
    delete '/recruit_applications/:id' => 'recruit_application#destroy'

    post '/update_dkp' => 'dkp#update_all'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
