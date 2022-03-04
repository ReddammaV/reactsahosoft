// // State
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   state = {
//     name: "Reddy",
//     rollNo: 101,
//     email: "Velasirireddamma@gmail.com"
//   }
//   render() {
//     return(
//       <div>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Roll No: {this.state.rollNo}</h3>
//         <h3>Email Id: {this.state.email}</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// // State - With Constructor
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: "Velasirireddamma@gmail.com"
//     }
//   }
//   render() {
//     return(
//       <div>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Roll No: {this.state.rollNo}</h3>
//         <h3>Email Id: {this.state.email}</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// State - changing State Object - The setState() Method
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: "Velasirireddamma@gmail.com"
//     }
//   }

//   changeData() {
//     this.setState({
//       name: "Aruna Kumari"
//     })
//   }

//   render() {
//     return(
//       <div>
//         <button type="button" onClick={() => this.changeData()}>Update Name</button>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Roll No: {this.state.rollNo}</h3>
//         <h3>Email Id: {this.state.email}</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))

// state with props
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       name: this.props.name,
//       rollNo: 101,
//       email: this.props.email
//     }
//   }

//   changeData() {
//     this.setState({
//       name: "Aruna Kumari",
//       rollNo: 102,
//       email: "aruna@gmail.com"
//     },() => console.log(this.state))
//   }

//   render() {
//     return(
//       <div>
//         <button type="button" onClick={() => this.changeData()}>Update Name</button>
//         <h3>Name: {this.state.name}</h3>
//         <h3>Roll No: {this.state.rollNo}</h3>
//         <h3>Email Id: {this.state.email}</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index name="Reddy" email="velasirireddamma@gmail.com" />, document.getElementById('root'))

// // If we need to use state value in setstate
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: this.props.email,
//       counter: 1
//     }
//   }
//   changeData = () => {
//     this.setState((state) => ({
//       name: "Aruna Mohan",
//       rollNo: 102,
//       email: "arunamohan@gmail.com",
//       counter: state.counter + 1
//     }))
//   }
//   render() {
//     return (
//       <>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Roll No: {this.state.rollNo}</h1>
//         <h1>Email: {this.state.email}</h1>
//         <h1>Counter: {this.state.counter}</h1>
//         {/* <button onClick={()=>this.changeData()}>Update Data</button> */}
//         <button onClick={this.changeData}>Update Data</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index email="velasirireddamma@gmail.com" />, document.getElementById('root'))

// // If we need to use state and props value in setstate
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: this.props.email,
//       counter: 1
//     }
//   }
//   changeData = () => {
//     this.setState((state,props) => ({
//       name: "Aruna Mohan",
//       rollNo: 102,
//       email: props.email + '(Updated)',
//       counter: state.counter + 1
//     }))
//   }
//   render() {
//     return (
//       <>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Roll No: {this.state.rollNo}</h1>
//         <h1>Email: {this.state.email}</h1>
//         <h1>Counter: {this.state.counter}</h1>
//         {/* <button onClick={()=>this.changeData()}>Update Data</button> */}
//         <button onClick={this.changeData}>Update Data</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index email="velasirireddamma@gmail.com" />, document.getElementById('root'))

// // If we need to use state and props value in setstate - using normal function
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: "velasirireddamma@gmail.com",
//       counter: 1
//     }
//   }
//   changeData = () => {
//     this.setState(function (state, props) {
//       return ({
//         name: "Aruna Mohan",
//         rollNo: 102,
//         email: props.email,
//         counter: state.counter + 1
//       })
//     })
//   }
//   render() {
//     return (
//       <>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Roll No: {this.state.rollNo}</h1>
//         <h1>Email: {this.state.email}</h1>
//         <h1>Counter: {this.state.counter}</h1>
//         {/* <button onClick={()=>this.changeData()}>Update Data</button> */}
//         <button onClick={this.changeData}>Update Data</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index email="arunamohan@gmail.com" />, document.getElementById('root'))

// // If we need to use state and props value in setstate  -with {} return
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Reddy",
//       rollNo: 101,
//       email: "velasirireddamma@gmail.com",
//       counter: 1
//     }
//   }
//   changeData = () => {
//     this.setState((state,props) => {
//       return ({
//         name: "Aruna Mohan",
//         rollNo: 102,
//         email: props.email,
//         counter: state.counter + 1
//       })
//     })
//   }
//   render() {
//     return (
//       <>
//         <h1>Name: {this.state.name}</h1>
//         <h1>Roll No: {this.state.rollNo}</h1>
//         <h1>Email: {this.state.email}</h1>
//         <h1>Counter: {this.state.counter}</h1>
//         {/* <button onClick={()=>this.changeData()}>Update Data</button> */}
//         <button onClick={this.changeData}>Update Data</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index email="arunamohan@gmail.com" />, document.getElementById('root'))

// setState accepts a callback
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1
//     }
//   }
//   // changeData = () => {
//   //   console.log("Before" + this.state.counter)
//   //   this.setState((state,props) => {
//   //     return ({
//   //       counter: state.counter + 1
//   //     })
//   //   }, ()=>console.log("After" + this.state.counter))
//   // }

//   changeData = () => {
//     console.log("Before" + this.state.counter)
//     this.setState((state,props) => {
//       return ({
//         counter: state.counter + 1
//       })
//     }, ()=> this.showMsg())
//   }

//   showMsg(){
//     console.log("After" + this.state.counter)
//   }

//   render() {
//     return (
//       <>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={this.changeData}>Update Data</button>
//       </>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Props with export default
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropsChild from './PropsChild'

// class Index extends Component {
//   render(){
//     return(
//       <div>
//         <PropsChild name="Reddy" age={28} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index/>, document.getElementById('root'))
