class Recipe < ApplicationRecord
  belongs_to :category
  belongs_to :author
  has_many :ingredients
end
