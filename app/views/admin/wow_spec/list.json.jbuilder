json.by_spec do
  json.array! WowSpec.active do |wow_spec|
    json.extract!(wow_spec, :id, :active, :order, :name, :img_url)
    json.wow_class do
      json.extract!(wow_spec.wow_class, :id, :name)
    end
  end
end

json.by_class do
  json.array! WowClass.all do |wow_class|
    json.extract!(wow_class, :id, :name)
    json.wow_specs do
      json.array! wow_class.wow_specs.order(:id) do |wow_spec|
        json.extract!(wow_spec, :id, :active, :order, :name, :img_url)
      end
    end
  end
end
