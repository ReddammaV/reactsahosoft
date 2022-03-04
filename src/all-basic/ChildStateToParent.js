// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// // Child component
// class Child extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: ''
//     }
//   }
//   handleInput = (event) => {
//     this.setState({
//       username: event.target.value
//     }, () => {
//       if (this.props.nameHandler) {
//         this.props.nameHandler(this.state.username)
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Child Component</h1>
//         <h3>User Name</h3>
//         <input type="text" name="userName" onChange={this.handleInput} />
//         <h4>{this.state.username}</h4>
//       </div>
//     )
//   }
// }

// Parent component
// function Index() {
  // const getName = (name) => {
  //   console.log("In parent component", name)
  //   let result = name;
  //   console.log(result);
  // }
//   return (
// <div>
//   <h1>Parent Component</h1>
//   <h2>{this.getName.result}</h2>

//   <Child nameHandler={getName} />
// </div>
//   )
// }

// class Index extends Component {
//   getName = (name) => {
//     console.log("In parent component", name)
//     let result = name;
//     document.getElementById("name").innerHTML = result;
//     // console.log(result);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <h2 id="name"></h2>

//         <Child nameHandler={this.getName} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Parent extends Component {
  constructor(){
    super()
  }
  getName = (name) => {
    console.log(name)
    document.getElementById('name').innerHTML = name
  }
  render() {
    return (
      <div>
        <h2 id="name"></h2>
        <Child myMsg={this.getName} />
      </div>
    )
  }
}

class Child extends Component {
  constructor(){
    super();
    this.state = {
      message: "Hello Reddy"
    }
  }
  handleMsg = () => {
    this.setState({
      message: "Hello Aruna"
    },()=>{
      if(this.props.myMsg){
        this.props.myMsg(this.state.message)
      }
    })
  }
  render() {
    return (
      // <div>this.state.message</div>
      <button onClick={this.handleMsg}>Update</button>
    )
  }
}

ReactDOM.render(<Parent/>, document.getElementById('root'))
