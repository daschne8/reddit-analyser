class CommentsController < ApplicationController
  def index
    name = params[:q]
    if name.blank?
      render status: 400, json: {error: "Expected parameter"}
    else
      if !User.find_by(name: name)
        user = User.create(name: name)
        keywords = User.analyse(name).result['keywords']
        keywords.each do |kw|
          keyword = Keyword.create(
            name: kw['text'],
            sentiment: kw['sentiment']['score'],
            sadness:kw['emotion']['sadness'],
            joy: kw['emotion']['joy'],
            fear: kw['emotion']['fear'],
            disgust: kw['emotion']['disgust'],
            anger: kw['emotion']['anger']
            )
          user.keywords << keyword
          keyword.save
        end
        user.save
      else
        user = User.find_by(name: name)
      end

      render(
        status: 200,
        json: user
      )
    end
  end
end
