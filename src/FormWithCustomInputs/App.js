import React, { Component } from 'react'
import Registration from './form/Registration'

export default class App extends Component {
  render() {
    return (
      <div className='col-md-6'>
        <h1>Registration Form</h1>
        <Registration/>
      </div>
    )
  }
}
