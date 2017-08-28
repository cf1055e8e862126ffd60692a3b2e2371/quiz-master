import React from 'react'
import renderer from 'react-test-renderer'
import QuestionContent from '../question-content'

const createComponent = () => (
  <QuestionContent
    page={1}
    content="<div>hoge</div>"
  />
)

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(createComponent())
    expect(component.toJSON()).toMatchSnapshot()
  })
})
