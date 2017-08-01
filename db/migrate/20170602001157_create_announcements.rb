class CreateAnnouncements < ActiveRecord::Migration[5.0]
  def change
    create_table :announcements do |t|
      t.string :title
      t.integer :order
      t.text :body

      t.timestamps
    end
  end
end
