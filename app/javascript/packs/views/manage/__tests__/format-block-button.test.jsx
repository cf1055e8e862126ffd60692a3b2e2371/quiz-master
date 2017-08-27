import React from 'react'
import renderer from 'react-test-renderer'
import FormatBlockButton from '../format-block-button'

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(
      <FormatBlockButton tagName="h1" />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
