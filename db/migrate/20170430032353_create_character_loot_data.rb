class CreateCharacterLootData < ActiveRecord::Migration[5.0]
  def change
    create_table :character_loot_data do |t|
      t.string :bnet_id
      t.text :body

      t.timestamps
    end
  end
end
