class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :keywords

  def keywords
    ActiveModel::SerializableResource.new(object.keywords, each_serializer: KeywordSerializer)
  end

end
