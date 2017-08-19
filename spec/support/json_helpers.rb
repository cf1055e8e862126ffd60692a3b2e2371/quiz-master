shared_context 'JSON response' do
  let(:json_response) { JSON.parse(response.body) }
  let(:headers) do
    {
      ACCEPT: 'application/json'
    }
  end
end

RSpec.configure do |config|
  config.include_context 'JSON response'
end
