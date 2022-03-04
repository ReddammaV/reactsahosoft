// // React Component API - setState
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super();
//     this.state = {
//       age : 10
//     }
//   }

//   changeHandler = () => {
//     this.setState({
//       age : 30
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Age: {this.state.age}</h1>
//         <button onClick={this.changeHandler}>Change</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // React Component API - forceUpdate - with forceUpdate we can change variable name without using state and setState
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super();
//     this.age = 10;
//   }

//   changeHandler = () => {
//     this.age =30;
//     console.log(this.age);
//     this.forceUpdate();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Age: {this.age}</h1>
//         <button onClick={this.changeHandler}>Change</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// React Component API - findDOMNode()
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
  constructor(){
    super();
    this.state = {
      age : 10
    }
  }

  findDOMNodeHandlerRed = () => {
    ReactDOM.findDOMNode(document.getElementById('one')).style.color = 'red'
  }

  findDOMNodeHandlerGreen = () => {
    ReactDOM.findDOMNode(document.getElementById('two')).style.color = 'green'
  }

  render() {
    return (
      <div>
        <h1 id="one">Red Color</h1>
        <h1 id="two">Green Color</h1>
        <button onClick={this.findDOMNodeHandlerRed}>Red Button</button>
        <button onClick={this.findDOMNodeHandlerGreen}>Green Button</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

