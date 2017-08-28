import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewQuestion from '../new-question.jsx'

describe('#render', () => {
  it('should show initial view', () => {
    const component = renderer.create(
      <NewQuestion commands={{}} addQuestion={() => {}} />,
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('when "New Question" button clicked', () => {
  it('should show editing view', () => {
    const wrapper = shallow(
      <NewQuestion commands={{}} addQuestion={() => {}} />,
    )
    wrapper.find('button').simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('when "Cancel" button clicked', () => {
  it('should show initial view', () => {
    const wrapper = shallow(
      <NewQuestion commands={{}} addQuestion={() => {}} />,
    )
    wrapper.find('button').simulate('click')
    wrapper.find('EditingButtons').props().onClickCancel()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
