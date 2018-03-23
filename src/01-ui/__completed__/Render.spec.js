import React from 'react'
import { shallow } from 'enzyme'
import Render from '../01-ui/Render'

test('it renders', () => {
  const wrapper = shallow(<Render />)

  expect(wrapper.exists()).toBe(true)
})
