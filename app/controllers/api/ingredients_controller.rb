module Api
  class IngredientsController < ApplicationController
    def upsert_ingrediantis 
      Ingredient.upsert_all(steps.map { |step|
        {step: step, last_fetched_at: Time.zone.now}
      })      
    end
  end 
end