import React from 'react'
import PropTypes from 'prop-types'

const RowCreator = ({ rows = [] }) => (
  <React.Fragment>
    {rows.map((row, i) => (
      <tr data-test="row" key={i}>
        <td>{row.id}</td>
        <td>{row.title}</td>
      </tr>
    ))}
  </React.Fragment>
)

RowCreator.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.title,
    }),
  ).isRequired,
}

export default RowCreator
