class CreateWowSpecs < ActiveRecord::Migration[5.0]
  def change
    create_table :wow_specs do |t|
      t.string :name
      t.references :wow_class, foreign_key: true
      t.boolean :active
      t.integer :order
      t.string :img_url

      t.timestamps
    end
  end
end
