require 'pry'
require 'json'
require 'ibm_watson/natural_language_understanding_v1'
include IBMWatson
require 'net/http'
require 'uri'

class User < ApplicationRecord

  def self.get_token
    uri = URI.parse("https://www.reddit.com/api/v1/access_token")
    request = Net::HTTP::Post.new(uri)
    request.basic_auth(ENV['REDDIT_ID'],ENV['REDDIT_SECRET'])
    request.set_form_data(
      "grant_type" => "client_credentials",
      "password" => ENV["REDDIT_PASS"],
      "username" => ENV["REDDIT_NAME"],
      "User-agent" => "reddit-ibm(daschne8)"
    )
    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    return JSON.parse(response.body)['access_token']
  end

  def self.analyse_with_token(name)
    url = "https://oauth.reddit.com/"

    if name[0,3] == '(r)'
      name = name[3,name.length-1]
      url += "/r/#{name}/comments"
    else
      url += "user/#{name}/comments"
    end

    token = "-PqBtUDYAzJ4aLmieexz1mNUtm2A"#ENV['REDDIT_TOKEN']
    uri = URI.parse(url)
    request = Net::HTTP::Get.new(uri)
    request["Authorization"] = "bearer #{token}"
    request["User-agent"] = "reddit-ibm(daschne8)"

    req_options = {
      use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname,uri.port,req_options) do |http|
      http.request(request)
    end
    comments = JSON.parse(response.body)["data"]["children"].map{|child| child['data']['body']}.join(". ")
    tone = self.get_tone(comments)
    tone.result['name'] = name
    #binding.pry
    return tone
  end


  #code without oauth, switch in controller if oauth gives prob

  def self.analyse(name)
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
