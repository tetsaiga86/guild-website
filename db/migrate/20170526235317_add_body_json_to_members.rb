class AddBodyJsonToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members_data, :body_json, :json
  end
end
