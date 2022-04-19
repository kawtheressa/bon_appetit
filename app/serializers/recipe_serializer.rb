class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :description, :image_url, :prep_time, :cook_time, :ingredients
end
