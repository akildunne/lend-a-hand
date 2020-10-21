class RemoveDateTimeFromEvents < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :date_time, :datetime
  end
end
