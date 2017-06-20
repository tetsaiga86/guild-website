module Admin
  class RecruitApplicationController < ApplicationController
    skip_before_filter :verify_authenticity_token

    def list
      render json: RecruitApplication.all
    end

    def destroy
      RecruitApplication.find(params[:id]).destroy
      render json: RecruitApplication.all
    end
  end
end
