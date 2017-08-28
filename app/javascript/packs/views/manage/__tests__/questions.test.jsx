import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Questions from '../questions'

describe('when questions are empty', () => {
  it('should show empty tbody', () => {
    const wrapper = shallow(<Questions questions={[]} />)
    expect(wrapper.matchesElement(<div />)).toBe(true)
  })
})

describe('when questions are not empty', () => {
  const questions = [
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

  it('should show question rows', () => {
    const wrapper = shallow(<Questions questions={questions} />)
    expect(wrapper.find('tbody').children().length).toBe(questions.length)
  })

  it('should show snapshot', () => {
    const wrapper = shallow(<Questions questions={questions} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
