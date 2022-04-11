class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :image_url, :prep_time, :cook_time

  belongs_to :author
  belongs_to :category
  has_many :ingredients
end
