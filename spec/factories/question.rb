FactoryGirl.define do
  factory :question, class: 'Question' do
    sequence(:content) { |i| "hogehoge#{i} ?" }
    sequence(:answer) { |i| "hoge#{i}" }
    sequence(:created_at) { |i| i.days.ago }
  end
end
