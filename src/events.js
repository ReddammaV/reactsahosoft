
// passing arguments - Make an anonymous arrow function.
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   showMsg = (msg,a,b) => {
//     alert(msg + (a+b))
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={()=>this.showMsg("Hello Reddy", 10, 20)}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// Normal function with bind
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super();
//     this.showMsg = this.showMsg.bind(this)
//   }
//   showMsg() {
//     console.log(this);
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.showMsg}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// //  Bind the event handler to this
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super();
//     this.showMsg = this.showMsg.bind(this)
//   }
//   showMsg(msg) {
//     console.log(msg);
//     console.log(this);
//     console.log(msg);
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.showMsg.bind(this,"Hello Reddy")}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// //  Synthetic event - normal function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super();
//     this.showMsg = this.showMsg.bind(this)
//   }
//   showMsg(msg,event) {
//     console.log(event);
//     console.log(event.type);
//     console.log(this);
//     console.log(msg);
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.showMsg.bind(this,"Hello Reddy")}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// //  Synthetic event - arrow function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super();
//     this.showMsg = this.showMsg.bind(this)
//   }
//   showMsg = (msg,event) => {
//     console.log(event);
//     // console.log(event.type);
//     console.log(this);
//     console.log(msg);
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={(e) => this.showMsg("Hello Reddy", e)}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// // event handler with input - with normal function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//     name: ''
//     }
//     this.showName = this.showName.bind(this);
//   }

//   showName(event) {
//     console.log(event.target.value);
//     this.setState({
//       name : event.target.value
//     })
//   }
//   render(){
//     return(
//       <>
//       <h3>Enter Your Name: <input type="text" onChange={this.showName} /></h3>
//       <h4>You Entered: {this.state.name}</h4>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Index/>, document.getElementById('root'))

// // event handler with input - with arrow function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//     name: ''
//     }
//   }

//   showName = (event) => {
//     console.log(event.target.value);
//     this.setState({
//       name : event.target.value
//     })
//   }
//   render(){
//     return(
//       <>
//       <h3>Enter Your Name: <input type="text" onChange={this.showName} /></h3>
//       <h4>You Entered: {this.state.name}</h4>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Index/>, document.getElementById('root'))

// // event handler with input - with arrow function with paranthesis() - anononymus function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//     name: ''
//     }
//   }

//   showName = (event) => {
//     console.log(event.target.value);
//     this.setState({
//       name : event.target.value
//     })
//   }
//   render(){
//     return(
//       <>
//       <h3>Enter Your Name: <input type="text" onChange={(event) => this.showName(event)} /></h3>
//       <h4>You Entered: {this.state.name}</h4>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Index/>, document.getElementById('root'))

// event handler with input - with arrow function with to pass event.target.value
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//     name: ''
//     }
//   }

//   showName = (val) => {
//     console.log(val);
//     this.setState({
//       name : val
//     })
//   }
//   render(){
//     return(
//       <>
//       <h3>Enter Your Name: <input type="text" onChange={(event) => this.showName(event.target.value)} /></h3>
//       <h4>You Entered: {this.state.name}</h4>
//       </>
//     )
//   }
// }
// ReactDOM.render(<Index/>, document.getElementById('root'))


// // Increment and Decrement 
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(){
//     super();
//     this.state = {
//       counter: 0
//     }
//   }

//   showIncrement = () => {
//     this.setState((state)=> ({
//       counter : state.counter + 1
//     }))

//   }
//   showDecrement = () => {
//     this.setState((state)=> ({
//       counter : state.counter - 1
//     }))
//   }

//   // showIncrement = () => {
//   //   this.setState({
//   //     counter : this.state.counter + 1
//   //   })
//   //   console.log(this.state.counter);
//   // }
//   // showDecrement = () => {
//   //   this.setState({
//   //     counter : this.state.counter - 1
//   //   })
//   //   console.log(this.state.counter);
//   // }
//   render(){
//     return(
//       <div>
//         <h2>Counter: {this.state.counter}</h2>
//         <button onClick={this.showIncrement}>Increment</button>
//         <button onClick={this.showDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Index/>, document.getElementById('root'))


// // ON & OFF Button
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor() {
//     super();
//     this.state = ({
//       isToggleOn: true
//     })
//   }
//   handleToggle = () => {
//     this.setState((state) => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>{this.state.isToggleOn == true ? "ON" : "OFF"}</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Index />, document.getElementById('root'))