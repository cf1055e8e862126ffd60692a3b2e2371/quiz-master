class QuestionsController < ApiController
  before_action :set_question, only: [:show, :edit, :update, :destroy]
  rescue_from StandardError, with: :render_500
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  # GET /questions
  def index
    @questions = Question.order('created_at')
  end

  # GET /questions/1
  def show
  end

  # POST /questions
  def create
    @question = Question.new(question_params)

    if @question.save
      render :show, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PUT /questions/1
  def update
    if @question.update(question_params)
      render :show, status: :ok, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
    head :no_content
  end

  private
    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.permit(:content, :answer)
    end
end
