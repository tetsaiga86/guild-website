class CreateRecruitments < ActiveRecord::Migration[5.0]
  def change
    create_table :recruitments do |t|
      t.string :class_name
      t.string :spec
      t.integer :order

      t.timestamps
    end
  end
end
