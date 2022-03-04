// UnMounting - componentWillUnmount()
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Header extends Component {

  // componentWillUnmount()
  componentWillUnmount() {
    alert("Header Component will be remove")
    console.log("Header Component will be remove")
  }
  render() {
    return (
      <div>
        <h1>Headre Component</h1>
      </div>
    )
  }
}


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    }
  }

  removeHeader = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    let myHeader;
    if (this.state.isShow) {
      myHeader = <Header />
    }
    return (
      <>
        {myHeader}
        <button onClick={this.removeHeader}>Remove Header</button>
      </>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
