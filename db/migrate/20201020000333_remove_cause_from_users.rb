class RemoveCauseFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_reference :users, :cause, null: false, foreign_key: true
  end
end
