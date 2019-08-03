require 'pry'
require 'json'
require 'ibm_watson/natural_language_understanding_v1'
include IBMWatson

class User < ApplicationRecord
  def self.analyse(name, type = 'user')

    url = "https://www.reddit.com/" #user/#{name}/comments.json"
    response = Faraday.get("https://www.reddit.com/user/#{name}/comments.json")
    res = JSON.parse(response.body)
    comments = res["data"]["children"].map{|child| child['data']['body']}.join(". ")

    tone_analyser = IBMWatson::NaturalLanguageUnderstandingV1.new(
      version: "2019-07-12",
      iam_apikey: "-",
      url: "https://gateway-wdc.watsonplatform.net/natural-language-understanding/api"
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

    return watson
  end
end
