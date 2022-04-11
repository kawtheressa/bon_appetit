module Api 
  class RecipesController < ApplicationController
    before_action :set_recipe, only: :show

    def index
      recipes = Recipe.all

      render json: RecipeSerializer.new(recipes).serialized_json
    end

    def show
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    def create
      recipe = Recipe.new(recipe_params)
  
      return render json: {error: recipe.errors.messages }, status: 422 unless recipe.save!

      render json: RecipeSerializer.new(recipe).serialized_json

    end

    private

    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:title, :description, :image_url, :cook_time, :prep_time)
    end

  end
end
  