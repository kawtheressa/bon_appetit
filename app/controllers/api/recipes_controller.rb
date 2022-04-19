module Api 
  class RecipesController < ApplicationController
    before_action :set_recipe, only: :show
    protect_from_forgery with: :null_session

    def index
      
      recipes = Recipe.all
      render json: RecipeSerializer.new(recipes).serialized_json
    end

    def show
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    def create
      recipe = Recipe.new(recipe_params)

      if recipe.save
        render json: RecipeSerializer.new(recipe).serialized_json
      else
        render json: {error: recipe.errors.messages }, status: 422 
      end

    end

    private

    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:title, :description, :image_url, :cook_time, :prep_time, :category_id, :author_id)
    end
  end
end
  