class Event < ApplicationRecord
  belongs_to :cause
  # has_and_belongs_to_many :users
end
