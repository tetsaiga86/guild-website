module Admin
  class WowSpecController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def list
      render :list, formats: [:json]
    end

    def update_many
      params.require(:wow_specs).each do |_key, wow_spec|
        WowSpec
          .find(wow_spec['id'])
          .update(
            wow_spec.permit(:active, :order)
          )
      end
      render :list, formats: [:json]
    end
  end
end
