require 'rails_helper'

RSpec.shared_examples 'not found' do
  it 'returns not found' do
    expect(response).to have_http_status(404)
  end
end

RSpec.shared_examples 'invalid resource' do
  it 'returns unprocessable entity' do
    expect(response).to have_http_status(422)
  end
end

RSpec.shared_context 'select a question' do
  let(:question) { @questions[1] }
  let(:url) { "#{questions_path}/#{question.id}" }
end

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
    include_context 'select a question'

    context 'when valid request' do

      let(:json_expected) do
        {
          'id' => question.id,
          'content' => question.content,
          'answer' => question.answer
        }
      end

      it 'returns specified question' do
        get url, headers: headers
        expect(response).to have_http_status(200)
        expect(json_response).to eq(json_expected)
      end
    end

    context 'when non-existent id is specified' do
      before(:each) do
        get "#{questions_path}/hogehoge", headers: headers
      end

      include_examples 'not found'
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

    context 'when invalid request' do
      before do
        params = { content: 'hoge', answer: '' }
        post questions_path, params: params, headers: headers
      end

      include_examples 'invalid resource'
    end
  end

  describe 'PUT /questions' do
    include_context 'select a question'

    before(:each) do
      @params = FactoryGirl.attributes_for(:question)
    end

    context 'when valid request' do
      it 'update specified question' do
        put url, params: @params, headers: headers
        expect(question.reload.content).to eq(@params[:content])
        expect(question.reload.answer).to eq(@params[:answer])
      end

      it 'returns updated question' do
        put url, params: @params, headers: headers
        expect(response).to have_http_status(200)
        expect(json_response['content']).to eq(@params[:content])
        expect(json_response['answer']).to eq(@params[:answer])
      end
    end

    context 'when non-existent id is specified' do
      before(:each) do
        put "#{questions_path}/hogehoge", params: @params, headers: headers
      end

      include_examples 'not found'
    end

    context 'when invalid request' do
      before do
        params = { content: 'hoge', answer: '' }
        put url, params: params, headers: headers
      end

      include_examples 'invalid resource'
    end
  end

  describe 'DELETE /questions/:id' do
    include_context 'select a question'

    context 'when valid request' do
      it 'delete specified question' do
        expect do
          delete url, headers: headers
        end.to change { Question.count }.by(-1)
      end

      it 'returns no content' do
        delete url, headers: headers
        expect(response).to have_http_status(204)
        expect(response.body).to eq('')
      end
    end

    context 'when non-existent id is specified' do
      before(:each) do
        delete "#{questions_path}/hogehoge", headers: headers
      end

      include_examples 'not found'
    end
  end
end
