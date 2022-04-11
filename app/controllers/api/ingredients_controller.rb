module Api
  class IngredientsController < ApplicationController
    protect_from_forgery with: :null_session

    def bulk_insert
      inserted_ingredients = Ingredient.insert_all!(
        params[:ingredients].map { |ingredient| { ingredient: ingredient, updated_at: Time.zone.now,
                                                  created_at: Time.zone.now, 
                                                  recipe_id: params[:id], 
                                                  author_id: Author.first.id } }
      )
      ingredients = Ingredient.where(id: inserted_ingredients.rows.flatten)

      # TODO handle exception
      render json: IngredientSerializer.new(ingredients).serialized_json
    end
  end 
end