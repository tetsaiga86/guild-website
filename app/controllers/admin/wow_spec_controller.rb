module Admin
  class WowSpecController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def list
    end

    def update_many
      params.require(:wow_specs).each do |_key, wow_spec|
        puts wow_spec.inspect
        WowSpec
          .find(wow_spec['id'])
          .update(
            wow_spec.permit(:active, :order)
          )
      end
      respond_to do |format|
        format.json do
          render :list
        end
      end
    end
  end
end
