class CreateRaidLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :raid_logs do |t|
      t.string :w_log_id
      t.text :body

      t.timestamps
    end
  end
end
