import React from 'react'
import { shallow, mount } from 'enzyme'
import TableCreator from './TableCreator'
import RowCreator from './RowCreator'

it('renders the caption', () => {
  const captionText = 'Table Caption'
  const wrapper = shallow(<TableCreator caption={captionText} rows={[]} />)
  const caption = wrapper.find('[data-test="caption"]')

  expect(caption.text()).toEqual(captionText)
})

it('renders a RowCreator', () => {
  const rowData = [
    {
      id: '1',
      title: 'Hello World',
    },
  ]
  const wrapper = shallow(<TableCreator caption="" rows={rowData} />)
  const rowCreator = wrapper.find(RowCreator)

  expect(rowCreator.exists()).toBe(true)
  expect(rowCreator.prop('rows')).toEqual(rowData)
})

it('[mount] renders rows', () => {
  const rowData = [
    {
      id: '1',
      title: 'Hello',
    },
  ]
  const wrapper = mount(<TableCreator caption="" rows={rowData} />)
  const rows = wrapper.find('[data-test="row"]')

  expect(rows).toHaveLength(1)
  expect(rows.text()).toContain(rowData[0].id)
  expect(rows.text()).toContain(rowData[0].title)
})
