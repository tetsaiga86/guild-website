module Admin
  class WowSpecController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def list
      render json: {
        activeRecruits: WowSpec.includes(:wow_class),
        wowClasses: WowClass.includes(:wow_specs)
      }, include: { activeRecruits: :wow_class, wowClasses: :wow_specs}

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
          if params['bySpec']
            render json: WowSpec.includes(:wow_class), include: :wow_class
          else
            render json: WowClass.includes(:wow_specs), include: :wow_specs
          end
        end
      end
    end
  end
end
