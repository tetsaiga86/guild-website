class CreateMembersData < ActiveRecord::Migration[5.0]
  def change
    create_table :members_data do |t|
      t.string :bnet_id
      t.text :body

      t.timestamps
    end
  end
end
