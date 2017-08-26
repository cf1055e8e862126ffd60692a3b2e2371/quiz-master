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

    respond_to do |format|
      if @question.save
        format.json { render :show, status: :created, location: @question }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /questions/1
  def update
    respond_to do |format|
      if @question.update(question_params)
        format.json { render :show, status: :ok, location: @question }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.permit(:content, :answer)
    end
end
