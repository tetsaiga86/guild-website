class MakeEmailOptionalOnUsers < ActiveRecord::Migration[5.0]
  def change
    remove_index :users, :email
    change_column :users, :email, :string, null: true
  end
end
