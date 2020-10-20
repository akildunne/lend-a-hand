class AddCauseToEvents < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :cause, null: false, foreign_key: true
  end
end
