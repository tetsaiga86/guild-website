class AddThumbnailToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :thumbnail, :string
    add_column :users, :user_level, :integer
    add_column :users, :character_name, :string
  end
end
