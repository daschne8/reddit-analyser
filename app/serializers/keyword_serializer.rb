class KeywordSerializer < ActiveModel::Serializer
  attributes :id, :name, :sentiment, :fear, :joy, :anger, :disgust, :sadness
end
