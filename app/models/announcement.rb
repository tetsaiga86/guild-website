class Announcement < ApplicationRecord
  scope(:active, -> {where(retired:false)})
end
