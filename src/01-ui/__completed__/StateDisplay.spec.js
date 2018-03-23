import React from 'react'
import { shallow } from 'enzyme'
import StateDisplay from './StateDisplay'

it('displays "Hello World" if state.success=false and no state.error', () => {
  const wrapper = shallow(<StateDisplay />)

  expect(wrapper.text()).toEqual('Hello World')
})

it('displays success message when state.success=true', () => {
  const wrapper = shallow(<StateDisplay />)

  wrapper.setState({ success: true })
  expect(wrapper.text()).toEqual('Success')
})

it('displays error message when state.error', () => {
  const wrapper = shallow(<StateDisplay />)
  const error = 'Error'

  wrapper.setState({ error })
  expect(wrapper.text()).toEqual(error)
})
