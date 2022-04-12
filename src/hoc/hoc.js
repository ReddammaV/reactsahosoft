// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import App from './app'

export default class Index extends Component {
  render() {
    return (
      <div>
        <App age={28} mobileNo={9566042245} emailId='velasirireddamma@gmail.com' />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
