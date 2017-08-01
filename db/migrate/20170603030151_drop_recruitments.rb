class DropRecruitments < ActiveRecord::Migration[5.0]
  def change
    drop_table :recruitments
  end
end
