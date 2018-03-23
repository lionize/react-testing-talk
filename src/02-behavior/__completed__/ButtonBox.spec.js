import React from 'react'
import { shallow } from 'enzyme'
import ButtonBox from './ButtonBox'

it('calls props.handleClick on click', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(<ButtonBox handleClick={handleClick} />)
  wrapper.find('[data-test="button-box"]').simulate('click')

  expect(handleClick).toHaveBeenCalled()
})
