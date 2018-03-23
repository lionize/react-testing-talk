import React from 'react'

class ConstrainedInput extends React.Component {
  state = {
    value: '',
  }

  constrainLength = value => {
    const { maxLength } = this.props

    return value.length > maxLength ? value.slice(0, maxLength) : value
  }

  onChange = e => {
    const { target: { value } } = e

    this.setState({
      value: this.constrainLength(value),
    })
  }

  render() {
    const { value } = this.state

    return <input onChange={this.onChange} value={value} />
  }
}

export default ConstrainedInput
