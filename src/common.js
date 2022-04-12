// class
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 

export default class Index extends Component {
  render() {
    return (
      <div>index</div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))


// Arrow function
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom' 

const Index = () => {
    return (
      <div>index</div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))



// function
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom' 

function Index() {
    return (
      <div>index</div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))
