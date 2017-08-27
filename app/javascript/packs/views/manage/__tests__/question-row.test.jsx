import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import QuestionRow from '../question-row.jsx'

const createComponent = () => (
  <QuestionRow
    order={1}
    question={{ id: 1, content: 'hoge', answer: 'fuga' }}
    command={{}}
    updateQuestion={() => {}}
    deleteQuestion={() => {}}
  />
)

describe('#render', () => {
  it('should show initial view', () => {
    const component = renderer.create(createComponent())
    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('when "Edit" button clicked', () => {
  it('should show editing view', () => {
    const wrapper = shallow(createComponent())
    wrapper.find('QuestionRowButtons').props().onClickEdit()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

describe('when "Cancel" button clicked', () => {
  it('should show initial view', () => {
    const wrapper = shallow(createComponent())
    wrapper.find('QuestionRowButtons').props().onClickEdit()
    wrapper.find('EditingButtons').props().onClickCancel()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
