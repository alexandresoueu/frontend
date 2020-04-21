import React, { Component } from 'react'

export default class Greetings extends Component {

  state = {
    type: this.props.type,
    name: this.props.name
  }

  constructor(props) {
    super(props)

    this.setType = this.setType.bind(this)
    //this.setName = this.setName.bind(this)
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
        <input type='text' value={type} onChange={this.setType} />
        <input type='text' value={name} onChange={ e => this.setName(e) } />
      </div>
    )
  }

}