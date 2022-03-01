// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super()
//     this.state = {
//       course: "No Course"
//     }
//   }

//   handler = (name) => {
//     this.setState({
//       course: name
//     })
//     // document.getElementById('name').innerHTML = name
//   }
//   render() {
//     return (
//       <div>
//         {/* <h1>Course Name: {this.state.course}</h1> */}
//         <h1>Course Name:</h1>
//         {this.state.course}
//         {/* <h2 id='name'></h2> */}
//         <Child myCourse={this.handler}/>
//       </div>
//     )
//   }
// }

// class Child extends Component {
//   constructor(){
//     super()
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={()=>this.props.myCourse("Angular")}>Update</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// with two childs
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
  constructor(){
    super()
    this.state = {
      course: "No Course"
    }
  }

  handler = (name) => {
    this.setState({
      course: name
    })
    // document.getElementById('name').innerHTML = name
  }
  render() {
    return (
      <div>
        {/* <h1>Course Name: {this.state.course}</h1> */}
        <h1>Course Name:</h1>
        {this.state.course}
        {/* <h2 id='name'></h2> */}
        <Child myCourse={this.handler}/>
        <Child2 myCourse={this.handler}/>
      </div>
    )
  }
}

class Child extends Component {
  constructor(){
    super()
    this.state = {
      course : ["Angular","React","Vue"]
    }
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.props.myCourse(this.state.course)}>Update</button>
      </div>
    )
  }
}

class Child2 extends Component {
  constructor(){
    super()
    this.state = {
      course : "Only React"
    }
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.props.myCourse(this.state.course)}>Update</button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))