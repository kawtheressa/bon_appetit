class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :ingredient

  belongs_to :recipe
  belongs_to :author

end
