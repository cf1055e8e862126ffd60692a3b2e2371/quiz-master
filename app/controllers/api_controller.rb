class ApiController < ApplicationController
  def render_404
    respond_to do |format|
      format.json { render json: { error: 'not found' }, status: :not_found }
    end
  end
end
