class ProxyController < ApplicationController
  def news
    bnet_response = HTTParty.get 'https://worldofwarcraft.com/en-US/news'
    render body: bnet_response.body
  end

  def api_cache
    cache = ApiCache.where(url: params[:url]).where('updated_at > ?')

    if cache.length
      render text: cache.body
    else
      # TODO : make request to url and cache
    end
  end
end
