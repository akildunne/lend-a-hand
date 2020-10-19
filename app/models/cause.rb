class Cause < ApplicationRecord
  belongs_to :users
  has_many :events
end
