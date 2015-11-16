class TilesController < ApplicationController
  layout 'application'

  def get
    tile = Tile.find(params[:x, :y])
    render json: tile, status: 200
  end

private
  def tile_params
    params.require(:tile).permit(:x, :y, :user)
  end

  def check_status
    @tile = Tile.find(params[:x, :y])
    if tile.user != nil
      return false;
    else
      return true;
    end
  end
end
