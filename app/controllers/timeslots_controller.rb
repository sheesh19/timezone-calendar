class TimeslotsController < ApplicationController

  def create
    @timeslot = Timeslot.new(timeslot_params)

    respond_to do |format|
      if @timeslot.save
        format.html { redirect_to root_path }
        format.json # Follow the classic Rails flow and look for a create.json view
      else
        format.html { render 'pages/home' }
        format.json # Follow the classic Rails flow and look for a create.json view
      end
    end
  end


  private

  def timeslot_params
    params.require(:timeslot).permit(:start_time, :end_time, :name)
  end
end
