//  parent's state in child component in React
// child component
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ShowCount extends Component {
  render(){
    return(
      <div>
        <h1>Child Component</h1>
        <h2>Counter: {this.props.counter}</h2>
      </div>
    )
  }
}

// parent component
class Index extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  showIncrement = () => {
    this.setState((state)=> ({
      counter : state.counter + 1
    }))

  }
  showDecrement = () => {
    this.setState((state)=> ({
      counter : state.counter - 1
    }))
  }

  render(){
    return(
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.showIncrement}>Increment</button>
        <button onClick={this.showDecrement}>Decrement</button>
        <br/>
        <ShowCount counter = {this.state.counter} />
      </div>
    )
  }
}
ReactDOM.render(<Index/>, document.getElementById('root'))






