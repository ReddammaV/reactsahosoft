// App.js calling HOC here and applying logic
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import wrapper from './wrapper'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello Team</h2>
        <h3>My Name is {this.props.name}</h3>
        <h3>My Age is {this.props.age}</h3>
        <h3>My Mobile No is {this.props.mobileNo}</h3>
        <h3>My Email Id is {this.props.emailId}</h3>
      </div>
    )
  }
}

export default wrapper(App);
