class AddAgeGroupToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :age_group, :string
  end
end
