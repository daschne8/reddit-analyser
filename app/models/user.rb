class User < ApplicationRecord
  def analyse(name)
    response = Net::HTTP.get_response("www.reddit.com/user/#{name}/comments.json")
    return response.body
  end
end
