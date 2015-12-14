class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  private
  ROLL_FILTER = {:roll => [:time, :notes => []]}
  def track_params
    params.require(:track).permit(:name, ROLL_FILTER )
  end
end
