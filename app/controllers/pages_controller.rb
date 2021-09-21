class PagesController < ApplicationController
  def home
    @event = {
      id: 1,
      title: 'my first event',
      start: Date.today,
      end: Date.today + 3.days
    }
    @timeslots = Timeslot.all

    @timeslots = Timeslot.all.map do |timeslot|
      {
        start: timeslot.start_time,
        end: timeslot.end_time
      }
    end
  end
end
