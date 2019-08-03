require 'pry'
require 'json'
require 'ibm_watson/natural_language_understanding_v1'
include IBMWatson

class User < ApplicationRecord
  def self.analyse(name, type = 'user')
    url = "https://www.reddit.com/" #user/#{name}/comments.json"

    if name[0,3] == '(r)'
      name = name[3,name.length-1]
      url += "/r/#{name}/comments.json"
    else
      url += "user/#{name}/comments.json"
    end

    response = Faraday.get(url)
    res = JSON.parse(response.body)
    comments = res["data"]["children"].map{|child| child['data']['body']}.join(". ")

    tone_analyser = IBMWatson::NaturalLanguageUnderstandingV1.new(
      version: "2019-07-12",
      iam_apikey: ENV['WATSON_KEY'],
      url: ENV['WATSON_URL']
    )


    watson = tone_analyser.analyze(
      text: comments,
      features: {
        entities:{
          emotion: true,
          sentiment: true,
          limit: 10
        },
        keywords: {
          emotion: true,
          sentiment: true,
          limit: 10
        }
      }
    )
    watson.result['name'] = name
    return watson
  end
end
