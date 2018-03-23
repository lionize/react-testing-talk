import React from 'react'

class StateDisplay extends React.Component {
  state = {
    success: false,
    error: null,
  }

  render() {
    const { success, error } = this.state

    if (error) {
      return <div>{error}</div>
    }

    return success ? <div>Success</div> : <div>Hello World</div>
  }
}

export default StateDisplay
