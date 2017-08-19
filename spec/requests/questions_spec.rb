require 'rails_helper'

RSpec.describe "Questions", type: :request do
  before(:each) do
    @questions = FactoryGirl.create_list(:question, 3)
  end

  describe "GET /questions" do
    context 'when valid request' do
      let(:json_expected) do
        @questions.map do |question|
          {
            'id' => question.id,
            'content' => question.content,
            'answer'=> question.answer
          }
        end
      end

      it "returns all questions" do
        get questions_path, headers: headers
        expect(response).to have_http_status(200)
        expect(json_response).to match(json_expected)
      end
    end
  end

  describe 'GET /questions/:id' do
    context 'when valid request' do
      let(:question) { @questions[1] }
      let(:json_expected) do
        {
          'id' => question.id,
          'content' => question.content,
          'answer' => question.answer
        }
      end

      it 'returns specified question' do
        get "#{questions_path}/#{question.id}", headers: headers
        expect(response).to have_http_status(200)
        expect(json_response).to eq(json_expected)
      end
    end
  end

  describe 'POST /questions' do
    context 'when valid request' do
      before(:each) do
        @params = FactoryGirl.attributes_for(:question)
      end

      it 'create new question' do
        expect do
          post questions_path, params: @params, headers: headers
        end.to change { Question.count }.by(1)
      end

      it 'returns created question' do
        post questions_path, params: @params, headers: headers
        expect(response).to have_http_status(201)
        expect(json_response['content']).to eq(@params[:content])
        expect(json_response['answer']).to eq(@params[:answer])
      end
    end
  end

  describe 'PUT /questions' do
    let(:question) { @questions[1] }

    before(:each) do
      @params = FactoryGirl.attributes_for(:question)
    end

    context 'when valid request' do
      it 'update specified question' do
        put "#{questions_path}/#{question.id}", params: @params, headers: headers
        expect(question.reload.content).to eq(@params[:content])
        expect(question.reload.answer).to eq(@params[:answer])
      end

      it 'returns updated question' do
        put "#{questions_path}/#{question.id}", params: @params, headers: headers
        expect(response).to have_http_status(200)
        expect(json_response['content']).to eq(@params[:content])
        expect(json_response['answer']).to eq(@params[:answer])
      end
    end
  end

  describe 'DELETE /questions/:id' do
    let(:question) { @questions[1] }

    context 'when valid request' do
      it 'delete specified question' do
        expect do
          delete "#{questions_path}/#{question.id}", headers: headers
        end.to change { Question.count }.by(-1)
      end

      it 'returns no content' do
        delete "#{questions_path}/#{question.id}", headers: headers
        expect(response).to have_http_status(204)
        expect(response.body).to eq('')
      end
    end
  end
end
