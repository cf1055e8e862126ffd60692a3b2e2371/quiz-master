/* eslint react/prop-types: 0 */

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PagingButton from '../paging-button'

const createComponent = ({ disabled }) => (
  <PagingButton
    className="quiz-prev"
    disabled={disabled}
    onClick={() => {}}
  >
    <span className="glyphicon glyphicon-chevron-left" />
  </PagingButton>
)

describe('#render', () => {
  it('should show snapshot', () => {
    const wrapper = shallow(createComponent({ disabled: false }))
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  describe('when disabled === false', () => {
    it('not have disabled class', () => {
      const wrapper = shallow(createComponent({ disabled: false }))
      expect(wrapper.find('.disabled').exists()).toBe(false)
    })
  })

  describe('when disabled === true', () => {
    it('have disabled class when disabled === true', () => {
      const wrapper = shallow(createComponent({ disabled: true }))
      expect(wrapper.find('.disabled').exists()).toBe(true)
    })
  })
})
