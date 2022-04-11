Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :recipes

    post 'recipes/:id/ingredients', to: 'ingredients#upsert_ingrediantis'
  end

  get '*path', to: 'pages#index', via: :all
end
