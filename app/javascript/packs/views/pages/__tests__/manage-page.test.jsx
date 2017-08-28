import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ManagePage from '../manage-page.jsx'

describe('when questions are undefined', () => {
  it('should show empty element', () => {
    const wrapper = shallow(<ManagePage startGetQuestions={() => {}} />)
    expect(wrapper.matchesElement(<div />)).toBe(true)
  })
})

describe('when questions are not empty', () => {
  const createComponent = () => (
    <ManagePage questions={[]} startGetQuestions={() => {}} />
  )

  it('should show manage page', () => {
    const wrapper = shallow(createComponent())
    expect(wrapper.is('.manage-page')).toBe(true)
  })

  it('should show snapshot', () => {
    const wrapper = shallow(createComponent())
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
