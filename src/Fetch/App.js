import React, { Component } from 'react'
import GetRequest from './GetRequest';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>API Call</h1>
        <GetRequest/>
      </div>
    )
  }
}
