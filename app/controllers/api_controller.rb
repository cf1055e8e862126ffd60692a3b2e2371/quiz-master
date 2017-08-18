class ApiController < ApplicationController
  def not_found
    respond_to do |format|
      format.json { render json: { error: 'not found' }, status: :not_found }
    end
  end
end
