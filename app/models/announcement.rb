class Announcement < ApplicationRecord
  def self.render(id_arr)
    find(id_arr).order(:order).to_a.map do |announcement|
      "{
        'title': #{announcement.title}
        'order': #{announcement.order}
        'body': #{announcement.body}
      }"
    end
  end
end
