// // Mounting - constructor()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Reddy',
//       age: props.age
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>My name is {this.state.name} and age {this.state.age}</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index age={28} />, document.getElementById('root'))

// // Mounting - getDerivedStateFromProps()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(props) {
//     console.log("Constructor called");
//     super(props);
//     this.state = {
//       name: 'Reddy',
//       age: 20
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps called");
//     return {
//       name: "Aruna Mohan",
//       age: props.age
//     }
//   }

//   render() {
//     console.log("render called");
//     return (
//       <div>
//         <h1>My name is {this.state.name} and age {this.state.age}</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index age={28} />, document.getElementById('root'))


// Mounting - componentDidMount()
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
  constructor(props) {
    console.log("Constructor called");
    super(props);
    this.state = {
      name: 'Reddy'
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps called");
  //   return {
  //     name: "Aruna Mohan"
  //   }
  // }

  componentDidMount() { 
    console.log("componentDidMount Method called");
    setTimeout(()=>{
      this.setState({
        name: "Aruna Mohan"
      })
    },3000)
   }

  render() {
    console.log("render called");
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Index name="Reddamma" />, document.getElementById('root'))
