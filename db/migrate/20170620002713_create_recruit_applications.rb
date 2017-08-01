class CreateRecruitApplications < ActiveRecord::Migration[5.0]
  def change
    create_table :recruit_applications do |t|
      t.string :name_server
      t.string :battletag
      t.string :class_spec
      t.string :armoryUrl
      t.string :email
      t.boolean :q1
      t.boolean :q2
      t.boolean :q3
      t.text :q4
      t.text :q5

      t.timestamps
    end
  end
end
