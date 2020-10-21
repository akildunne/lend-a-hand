class Event < ApplicationRecord
  belongs_to :cause
  belongs_to :user
end
