module Admin
  class AdminController < ApplicationController
    before_action :check_admin_signed_in
    def check_admin_signed_in
      return head :unauthorized unless user_signed_in?
      return head :forbidden unless current_user.membership_level <= 2
      true
    end

  end
end
