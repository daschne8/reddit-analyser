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

    comments, response = self.get_reddit(url)
    time_lapse = self.comments_by_time(response)
    tone = self.get_tone(comments)

    tone.result['name'] = name
    return tone
  end

  def self.comments_by_time(response)
    
  end

  def self.get_reddit(url)
    response = Faraday.get(url)
    res = JSON.parse(response.body)
    comments = res["data"]["children"].map{|child| child['data']['body']}.join(". ")
    return [comments,res]
  end

  def self.get_tone(text)
    tone_analyser = IBMWatson::NaturalLanguageUnderstandingV1.new(
      version: "2019-07-12",
      iam_apikey: ENV['WATSON_KEY'],
      url: ENV['WATSON_URL']
    )
    watson = tone_analyser.analyze(
      text: text,
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
