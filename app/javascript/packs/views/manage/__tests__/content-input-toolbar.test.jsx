import React from 'react'
import renderer from 'react-test-renderer'
import ContentInputToolbar from '../content-input-toolbar'

describe('#render', () => {
  it('should show snapshot', () => {
    const component = renderer.create(<ContentInputToolbar />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
