Rails.application.routes.draw do
  root to: 'spa#index'

  get '/spa/:spa_route' => 'spa#spa_route'

  get '/auth/:provider/callback', to: 'sessions#create'

  get '/news' => 'proxy#news'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
