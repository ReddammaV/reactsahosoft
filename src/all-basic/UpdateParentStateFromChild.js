import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// export default class Parent extends Component {
//   constructor(){
//     super()
//     this.state = {
//       message: false
//     }
//   }
//   handleMessage = () => {
//     this.setState((state)=> ({
//       message: !state.message
//     }))
//   }
//   render() {
//     return (
//       <div>
//         <h2>{this.state.message ? "Show" : "Not Show"}</h2>
//         <button onClick={this.handleMessage}>Update</button>
//       </div>
//     )
//   }
// }

export default class Parent extends Component {
  constructor(){
    super()
    this.state = {
      message: false
    }
  }
  handleMessage = () => {
    this.setState((state)=> ({
      message: !state.message
    }))
  }
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <h4>{this.state.message ? "Show" : "Not Show"}</h4>
        <Child myMessage={this.handleMessage} />
      </div>
    )
  }
}

class Child extends Component {
  render(){
    return(
      <div>
        <h2>Child Component</h2>
        <button onClick={this.props.myMessage}>Update</button>
      </div>
    )
  }
}

ReactDOM.render(<Parent/>,document.getElementById('root'))

