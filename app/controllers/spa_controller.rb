class SpaController < ApplicationController
  def index
    js_env
  end
  def spa_route
    js_env({ route: "/spa/#{params[:spa_route]}" })
    render :index
  end

  protected

  def js_env(values = {})
    @js_env = {
      api_key: ENV['API_KEY'],
      membership_level: membership_level
    }.merge(values).to_json
  end

  def membership_level
    if session.keys.include? :membership_level
      session[:membership_level]
    else
      100
    end
  end
end
