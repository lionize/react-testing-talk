import React from 'react'

class Form extends React.Component {
  state = {
    text: '',
  }

  onSubmit = () => {
    const { handleSubmit } = this.props
    const { text } = this.state

    handleSubmit(text)
  }

  onChange = e => {
    const { target: { value } } = e

    this.setState({
      text: value,
    })
  }

  render() {
    const { text } = this.state

    return (
      <form data-test="form" onSubmit={this.onSubmit}>
        <input
          value={text}
          data-test="input"
          name="text"
          onChange={this.onChange}
        />
      </form>
    )
  }
}

export default Form
