import React from 'react'
import service from './service'

class ServiceCaller extends React.Component {
  componentDidMount() {
    service.initialize()
  }

  onSubmit = async e => {
    const { target: { value } } = e

    service.someNetworkCall(value)
  }

  render() {
    return <form onSubmit={this.onSubmit} />
  }
}

export default ServiceCaller
