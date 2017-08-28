import React from 'react'
import { shallow } from 'enzyme'
import AnswerResult from '../answer-result'

describe('#render', () => {
  describe('when isCorrect === undefined', () => {
    it('should show nothing', () => {
      const wrapper = shallow(<AnswerResult />)
      expect(wrapper.matchesElement(<div />)).toBe(true)
    })
  })

  describe('when isCorrect === true', () => {
    it('should show correct element', () => {
      const wrapper = shallow(<AnswerResult isCorrect />)
      expect(wrapper.contains(' Correct !!')).toBe(true)
    })
  })

  describe('when isCorrect === false', () => {
    it('should show incorrect element', () => {
      const wrapper = shallow(<AnswerResult isCorrect={false} />)
      expect(wrapper.contains(' Incorrect ...')).toBe(true)
    })
  })
})
