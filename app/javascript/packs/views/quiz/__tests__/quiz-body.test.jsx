import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import QuizBody from '../quiz-body'

const createComponent = () => (
  <QuizBody
    question={{ content: 'hogehoge', answer: 'hoge' }}
    page={2}
    moveNextPage={() => {}}
  />
)

describe('#render', () => {
  it('should show snapshot', () => {
    const wrapper = shallow(createComponent())
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe(
  'when "Check" button clicked after correct answer input',
  () => {
    it('should show "Next Question" button', () => {
      const wrapper = shallow(createComponent())
      wrapper.find('QuestionAnswer').props().onChange('hoge')
      wrapper.find('.quiz-answer-button').props().onClick()
      expect(wrapper.contains('Next Question')).toBe(true)
    })
  },
)

describe(
  'when "Check" button clicked after incorrect answer input',
  () => {
    it('should show "show answer" button', () => {
      const wrapper = shallow(createComponent())
      wrapper.find('QuestionAnswer').props().onChange('fuga')
      wrapper.find('.quiz-answer-button').props().onClick()
      expect(wrapper.find('ShowAnswerButton').exists()).toBe(true)
    })
  },
)
