class AddNameIndexToUsers < ActiveRecord::Migration[5.0]
  def change
    DbTextSearch::CaseInsensitive.add_index(
    connection, Thredded.user_class.table_name, Thredded.user_name_column, unique: true)
  end
end
