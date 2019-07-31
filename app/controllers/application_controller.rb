class ApplicationController < ActionController::API

  def user_data
    #@user = User.new(name: )
    render json: params[:user]
  end

end
