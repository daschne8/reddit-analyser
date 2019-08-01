class CommentsController < ApplicationController
  def index
    name = params[:q]
    if name.blank?
      render status: 400, json: {error: "Expected parameter"}
    else
      render(
        status: 200,
        json: User.analyse(name)
      )
    end
  end
end
