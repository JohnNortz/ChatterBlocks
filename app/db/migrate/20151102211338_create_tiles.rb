class CreateTiles < ActiveRecord::Migration
  def change
    create_table :tiles do |t|
      t.integer :x
      t.integer :y
      t.integer :user

      t.timestamps null: false
    end
  end
end
