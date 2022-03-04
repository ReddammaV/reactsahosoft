import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.name}</h2>
        <h2>Your Id: {this.props.id}</h2>
        <h2>{this.props.children}</h2>
      </div>
    )
  }
}

// Creating Default Props
Student.defaultProps = {
  name: "Reddamma",
  id: 100
}
