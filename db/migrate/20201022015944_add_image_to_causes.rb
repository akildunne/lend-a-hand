class AddImageToCauses < ActiveRecord::Migration[6.0]
  def change
    add_column :causes, :image, :string
  end
end
