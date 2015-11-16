class AddIndexToTiles < ActiveRecord::Migration
  def change
    add_index :tiles, :user
  end
end
