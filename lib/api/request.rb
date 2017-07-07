module Api
  class Request
    def getItemInfo(id)
      bnet_client = ::Bnet::Client.new
      puts "fetching #{id}"
      description = bnet_client.item_description(id)

      counter = 0
      while counter<10
        unless description.nil?
          puts "retrieved #{description['name']}"
          return description
        else
          puts "#{id} failed#{', trying again' if counter<10}"
          description = bnet_client.item_description(id)
          counter += 1
        end
      end
    end
  end
end
