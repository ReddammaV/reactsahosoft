// child component 
import React, { Component } from 'react'

export default class PropsChild extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
      </div>
    )
  }
}
