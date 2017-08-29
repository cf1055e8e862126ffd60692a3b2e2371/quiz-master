require 'rexml/parsers/sax2parser'
require 'rexml/sax2listener'

class SafeHtmlValidator < ActiveModel::EachValidator
  class InvalidHtmlError < StandardError; end

  def validate_each(record, attribute, value)
    return if value.nil?
    parser = REXML::Parsers::SAX2Parser.new(value)
    parser.listen(:start_element) do |uri, localname, qname, attributes|
      unless ACCEPTABLE_ELEMENTS.include?(localname)
        raise InvalidHtmlError.new("#{localname} is invalid tagname")
      end
      attributes.each do |key, _value|
        unless ACCEPTABLE_ATTRIBUTES.include?(key)
          raise InvalidHtmlError.new("#{key} is invalid attribute")
        end
      end
    end
    parser.parse
  rescue InvalidHtmlError => err
    record.errors[attribute] << err.message
  end

  private
    ACCEPTABLE_ELEMENTS = %w(div b i h1 h2 h3 h4 h5 font br).freeze
    ACCEPTABLE_ATTRIBUTES = %w(class color).freeze
end