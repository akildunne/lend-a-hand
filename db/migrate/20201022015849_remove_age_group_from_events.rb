class RemoveAgeGroupFromEvents < ActiveRecord::Migration[6.0]
  def change
    remove_column :events, :age_group, :integer
  end
end
