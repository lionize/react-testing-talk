import React from 'react'
import PropTypes from 'prop-types'
import RowCreator from './RowCreator'

const TableCreator = ({ caption, rows }) => (
  <table>
    <caption data-test="caption">{caption}</caption>
    <tbody>
      <RowCreator rows={rows} />
    </tbody>
  </table>
)

TableCreator.propTypes = {
  caption: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TableCreator
