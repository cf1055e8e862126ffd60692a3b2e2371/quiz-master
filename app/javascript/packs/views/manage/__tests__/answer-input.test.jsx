import React from 'react'
import renderer from 'react-test-renderer'
import AnswerInput from '../answer-input'

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(
      <AnswerInput error="hoge" onChange={() => {}} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
