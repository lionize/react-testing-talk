import React from 'react'
import { shallow } from 'enzyme'
import OutputTitle from './OutputTitle'

test('it renders title prop', () => {
  const title = 'Test'
  const wrapper = shallow(<OutputTitle title={title} />)
  const titleElement = wrapper.find('[data-test="title"]')

  expect(titleElement.text()).toEqual(title)
})
