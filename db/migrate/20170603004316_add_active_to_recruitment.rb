class AddActiveToRecruitment < ActiveRecord::Migration[5.0]
  def change
    add_column :recruitments, :active, :bool, default:true
  end
end
