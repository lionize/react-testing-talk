import React from 'react'
import { shallow } from 'enzyme'
import ServiceCaller from './ServiceCaller'
import service from './service'

jest.mock('./service')

afterEach(() => {
  jest.resetAllMocks()
})

it('calls service#initialize on mount', () => {
  const initialize = jest.fn()
  service.initialize = initialize

  const wrapper = shallow(<ServiceCaller />)

  expect(initialize).toHaveBeenCalled()
})

it('calls service#someCall with "hello" on submit', () => {
  const someNetworkCall = jest.fn()
  service.someNetworkCall = someNetworkCall

  const wrapper = shallow(<ServiceCaller />)
  const value = 'test'

  wrapper.simulate('submit', { target: { value } })
  expect(someNetworkCall).toHaveBeenCalledWith(value)
})
