// Preventing Component from Rendering
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }
  return (
    <div><h2>Warning</h2></div>
  )
}

class Page extends Component {
  constructor() {
    super();
    this.state = {
      showWarning: true
    }
  }
  handleToggleBtn = () => {
    this.setState((state) => ({
      showWarning: !state.showWarning
    }))
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button type="button" onClick={this.handleToggleBtn}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    )
  }
}


ReactDOM.render(<Page />, document.getElementById('root'))
