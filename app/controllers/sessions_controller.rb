class SessionsController < ApplicationController
  def destroy
    sign_out_all_scopes
    redirect_to root_path
  end
end
