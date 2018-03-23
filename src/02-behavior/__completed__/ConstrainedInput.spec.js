import React from 'react'
import { shallow } from 'enzyme'
import ConstrainedInput from './ConstrainedInput'

describe('constraints', () => {
  it("doesn't constrain by default", () => {
    const wrapper = shallow(<ConstrainedInput />)
    const input = 'hello'

    wrapper.simulate('change', {
      target: {
        value: input,
      },
    })
    expect(wrapper.prop('value')).toEqual(input)
  })

  it('constrains length if props.maxLength', () => {
    const wrapper = shallow(<ConstrainedInput maxLength={4} />)
    const input = 'hello'

    wrapper.simulate('change', {
      target: {
        value: input,
      },
    })
    expect(wrapper.prop('value')).toEqual('hell')
  })
})
