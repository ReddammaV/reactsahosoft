import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import './external.css'

export default class Index extends Component {
  render() {
    return (
      <div>
        <button>Hello</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
