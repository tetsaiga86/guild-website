class Recruitment < ApplicationRecord
  scope(:active, -> {where(active:true)})
end
