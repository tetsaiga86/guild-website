class CreateDkps < ActiveRecord::Migration[5.0]
  def change
    create_table :dkps do |t|
      t.string :name
      t.string :rank
      t.integer :net_dkp
      t.integer :total_dkp
      t.integer :spent_dkp
      t.integer :hours

      t.timestamps
    end
  end
end
