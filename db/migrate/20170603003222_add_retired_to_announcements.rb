class AddRetiredToAnnouncements < ActiveRecord::Migration[5.0]
  def change
    add_column :announcements, :retired, :bool, default:false
  end
end
