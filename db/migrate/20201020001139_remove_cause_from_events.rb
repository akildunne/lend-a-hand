class RemoveCauseFromEvents < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :cause, :string
  end
end
