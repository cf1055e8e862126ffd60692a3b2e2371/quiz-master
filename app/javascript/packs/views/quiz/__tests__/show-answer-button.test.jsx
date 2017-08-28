import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShowAnswerButton from '../show-answer-button'

describe('#render', () => {
  it('should show snapshot', () => {
    const wrapper = shallow(<ShowAnswerButton answer="hoge" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('when "Show Answer" button clicked', () => {
  it('should show answer', () => {
    const answer = 'hoge'
    const wrapper = shallow(<ShowAnswerButton answer={answer} />)
    expect(wrapper.contains(answer)).toBe(false)
    wrapper.find('button').props().onClick()
    expect(wrapper.contains(answer)).toBe(true)
  })
})
