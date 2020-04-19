import React, { Component } from 'react'

export default class Greetings extends Component {

  state = {
    type: this.props.type,
    name: this.props.name
  }

  setType(event) {
    this.setState({ type: event.target.value})
  }

  setName(event) {
    this.setState({ name: event.target.value  })
  }

  render() {
    const { type, name } = this.state
    return (
      <div>
        <h1>{ type} | {name }!</h1>
        <hr />
        <input type='text' value={type} onChange={event => this.setType(event)} />
        <input type='text' value={name} onChange={event => this.setName(event)} />
      </div>
    )
  }

}