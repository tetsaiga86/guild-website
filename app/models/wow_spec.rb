class WowSpec < ApplicationRecord
  belongs_to :wow_class
  scope(:active, -> {where(active:true).order(:order)})
end
