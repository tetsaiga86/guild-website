class CreateAchievementData < ActiveRecord::Migration[5.0]
  def change
    create_table :achievement_data do |t|
      t.string :bnet_id
      t.text :body

      t.timestamps
    end
  end
end
