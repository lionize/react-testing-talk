import React from 'react'
import { shallow } from 'enzyme'
import Form from './Form'

it('calls props.handleSubmit with value of input field on submit', () => {
  const text = 'test input'
  const handleSubmit = jest.fn()
  const wrapper = shallow(<Form handleSubmit={handleSubmit} />)
  wrapper
    .find('[data-test="input"]')
    .simulate('change', { target: { value: text } })
  wrapper.find('[data-test="form"]').simulate('submit')

  expect(handleSubmit).toHaveBeenCalledWith(text)
})

it('[bad] updates text state on input change', () => {
  const text = 'test input'
  const wrapper = shallow(<Form handleSubmit={() => {}} />)
  wrapper
    .find('[data-test="input"]')
    .simulate('change', { target: { value: text } })

  expect(wrapper.state('text')).toEqual(text)
})
