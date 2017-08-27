import React from 'react'
import renderer from 'react-test-renderer'
import QuestionRowButtons from '../question-row-buttons'

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(
      <QuestionRowButtons
        onClickEdit={() => {}}
        onClickDelete={() => {}}
      />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
