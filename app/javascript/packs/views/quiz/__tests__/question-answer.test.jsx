import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import QuestionAnswer from '../question-answer'

const createComponent = () => (
  <QuestionAnswer
    answer="hoge"
    onChange={() => {}}
    onEnterKey={() => {}}
  />
)

describe('#render', () => {
  it('should show snapshot', () => {
    const wrapper = mount(createComponent())
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
