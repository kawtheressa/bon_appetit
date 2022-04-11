class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title

  has_many :recipes
end
