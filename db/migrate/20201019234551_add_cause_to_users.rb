class AddCauseToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :cause, null: false, foreign_key: true
  end
end
