class AddDkpToMembersDatum < ActiveRecord::Migration[5.0]
  def change
    add_reference :members_data, :dkp, foreign_key: true
  end
end
