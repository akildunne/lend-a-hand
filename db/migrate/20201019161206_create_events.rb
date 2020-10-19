class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :cause
      t.string :reason
      t.string :location
      t.datetime :date_time
      t.integer :age_group

      t.timestamps
    end
  end
end
