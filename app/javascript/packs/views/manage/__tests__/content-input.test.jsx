import React from 'react'
import renderer from 'react-test-renderer'
import ContentInput from '../content-input'

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(
      <ContentInput
        defaultValue="hoge"
        error="fuga"
        onChange={() => {}}
      />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
