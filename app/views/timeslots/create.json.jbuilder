json.array!(@timeslots) do |timeslot|
  json.extract! timeslot, :id, :title
  json.start timeslot.start_date
  json.end timeslot.end_date
  json.url root_url(format: :html)
end
