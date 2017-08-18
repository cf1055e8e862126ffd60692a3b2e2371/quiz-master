require 'rails_helper'

RSpec.describe Question, type: :model do
  before do
    @question = Question.new(content: content, answer: answer)
    @question.valid?
  end

  describe '#content' do
    let(:answer) { 'hoge' }

    subject { @question.errors[:content].empty? }

    context 'when valid' do
      let(:content) { 'hogehoge' }
      it { is_expected.to be_truthy }
    end

    context 'when 1 length' do
      let(:content) { 'h' }
      it { is_expected.to be_truthy }
    end

    context 'when 0 length' do
      let(:content) { '' }
      it { is_expected.to be_falsy }
    end

    context 'when nil' do
      let(:content) { nil }
      it { is_expected.to be_falsy }
    end
  end

  describe '#answer' do
    let(:content) { 'fugafuga' }

    subject { @question.errors[:answer].empty? }

    context 'when valid' do
      let(:answer) { 'fuga' }
      it { is_expected.to be_truthy }
    end

    context 'when 1 length' do
      let(:answer) { 'f' }
      it { is_expected.to be_truthy }
    end

    context 'when 0 length' do
      let(:answer) { '' }
      it { is_expected.to be_falsy }
    end

    context 'when nil' do
      let(:answer) { nil }
      it { is_expected.to be_falsy }
    end
  end
end
