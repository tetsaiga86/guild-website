class CreateGuildUpdateCaches < ActiveRecord::Migration[5.0]
  def change
    create_table :guild_update_caches do |t|
      t.string :json
      t.timestamps
    end
  end
end
