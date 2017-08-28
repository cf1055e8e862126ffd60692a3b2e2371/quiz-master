/* eslint react/prop-types: 0 */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import QuizPage from '../quiz-page.jsx'

const createComponent = ({ questions }) => (
  <QuizPage questions={questions} startGetQuestions={() => {}} />
)

describe('when questions are undefined', () => {
  it('should show empty element', () => {
    const wrapper = shallow(createComponent({ questions: undefined }))
    expect(wrapper.matchesElement(<div />)).toBe(true)
  })
})

describe('when questions are empty', () => {
  it('should show no questions message', () => {
    const wrapper = shallow(createComponent({ questions: [] }))
    expect(wrapper.contains('There are no questions!')).toBe(true)
  })
})

describe('when questions are not empty', () => {
  const QUESTIONS = [
    {
      id: 1,
      content: 'hogehoge',
      answer: 'hoge',
    }, {
      id: 2,
      content: 'fugafuga',
      answer: 'fuga',
    },
  ]

  it('should show quiz page', () => {
    const wrapper = shallow(createComponent({ questions: QUESTIONS }))
    expect(wrapper.is('.quiz-page')).toBe(true)
  })

  it('should show snapshot', () => {
    const wrapper = shallow(createComponent({ questions: QUESTIONS }))
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
