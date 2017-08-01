class AddIlvlInfoToCharacterLootData < ActiveRecord::Migration[5.0]
  def change
    add_column :character_loot_data, :ilevel, :integer
    add_column :character_loot_data, :context, :string
    add_column :character_loot_data, :bonus_list, :json
  end
end
