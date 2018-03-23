import React from 'react'
import { shallow } from 'enzyme'
import RowCreator from './RowCreator'

it('outputs each row', () => {
  const rowData = [
    {
      id: '0',
      title: 'Jest is cool',
    },
    {
      id: '1',
      title: 'I love React',
    },
  ]
  const wrapper = shallow(<RowCreator rows={rowData} />)
  const rows = wrapper.find('[data-test="row"]')

  expect(rows).toHaveLength(2)
  rows.forEach((row, i) => {
    expect(row.text()).toContain(rowData[i].id)
    expect(row.text()).toContain(rowData[i].title)
  })
})
