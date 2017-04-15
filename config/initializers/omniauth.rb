# module OmniAuth
#   module Strategies
#     class Bnet < OmniAuth::Strategies::OAuth2
#       def extra
#         @extra ||= begin
#           access_token.options[:mode] = :query
#           access_token.get('/wow/users/characters').parsed
#         end
#       end
#     end
#   end
# end

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :bnet, ENV['API_KEY'], ENV['API_SECRET']
end
