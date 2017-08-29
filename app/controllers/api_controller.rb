class ApiController < ApplicationController
  def render_404
    render_error :not_found
  end

  def render_500(exception)
    if exception
      logger.fatal "500! #{exception.message}"
      logger.error exception.backtrace.join("\n")
    end
    render_error :server_error
  end

  private
    def render_error(status)
      render json: {}, status: status
    end
end
