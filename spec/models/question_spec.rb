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

    # acceptable tags
    %w(div b i h1 h2 h3 h4 h5 font br).each do |tag_name|
      context "when contains #{tag_name} tag" do
        let(:content) { "hoge<#{tag_name}>fuga</#{tag_name}>" }
        it { is_expected.to be_truthy }
      end
    end

    # not acceptable tags
    %w(form script iframe).each do |tag_name|
      context "when contains #{tag_name} tag" do
        let(:content) { "hoge<#{tag_name}>fuga</#{tag_name}>" }
        it { is_expected.to be_falsy }
      end
    end

    # acceptable attributes
    %w(class color).each do |attribute|
      context "when contains #{attribute} attribute" do
        let(:content) { "hoge<div #{attribute}=\"fuga\" />" }
        it { is_expected.to be_truthy }
      end
    end
    
    # not acceptable attributes
    %w(onmouseover onload onclick).each do |attribute|
      context "when contains #{attribute} attribute" do
        let(:content) { "hoge<div #{attribute}=\"fuga\" />" }
        it { is_expected.to be_falsy }
      end
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
