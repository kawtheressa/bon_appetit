class AuthorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email

  has_many :recipes
end
