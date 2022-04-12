// // Controlled Form - Basic Example
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // value: ''
//       value: 'Reddy'
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.value);
//   }

//   handleChange = (e) => {
//     this.setState({
//       value : e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h2>Controlled Component</h2>
//         <form onSubmit={this.handleSubmit}>
//           Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <div>
//           <h3>Result</h3>
//           <h4>Name: {this.state.value}</h4>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // Controlled Form - Multiple Values - Basic Example
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       password: ''
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     console.log(this.state.name);
//     console.log(this.state.password);
//   }

//   handleName = (e) => {
//     this.setState({
//       name : e.target.value
//     })
//   }

//   handlePassword = (e) => {
//     this.setState({
//       password : e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Controlled Component</h2>
//         <form onSubmit={this.handleSubmit}>
//           Name: <input type="text" value={this.state.name} onChange={this.handleName} />
//           <br />
//           Password: <input type="text" value={this.state.password} onChange={this.handlePassword} />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <div>
//           <h3>Result</h3>
//           <h4>Name: {this.state.name}</h4>
//           <h4>Name: {this.state.password}</h4>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // Controlled Form - Multiple Values - Advanced Example
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       password: ''
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     console.log(this.state.name);
//     console.log(this.state.password);
//   }

//   handleInput = (e) => {
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Controlled Component</h2>
//         <form onSubmit={this.handleSubmit}>
//           Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
//           <br />
//           Password: <input type="text" name="password" value={this.state.password} onChange={this.handleInput} />
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <div>
//           <h3>Result</h3>
//           <h4>Name: {this.state.name}</h4>
//           <h4>Name: {this.state.password}</h4>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // Controlled Form - textarea
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: 'Hello Sahosoft'
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }

//   handleInput = (e) => {
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Controlled Component</h2>
//         <form onSubmit={this.handleSubmit}>
//           Message: <textarea name="msg" value={this.state.msg} onChange={this.handleInput} />

//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <div>
//           <h3>Result</h3>
//           <h4>Message: {this.state.msg}</h4>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // Controlled Form - select
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ste: 'Punjab'
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }

//   handleInput = (e) => {
//     this.setState({
//       [e.target.name] : e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Controlled Component</h2>
//         <form onSubmit={this.handleSubmit}>
//           Select: 
//           <select name="ste" value={this.state.ste} onChange={this.handleInput}>
//             <option>AP</option>
//             <option>Punjab</option>
//             <option>Telangana</option>
//             <option>Kerala</option>
//             <option>Delhi</option>
//           </select>

//           <br />
//           <button type="submit">Submit</button>
//         </form>
//         <div>
//           <h3>Result</h3>
//           <h4>Message: {this.state.ste}</h4>
//         </div>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Controlled Form - form
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FormApp from './FormApp'
import './form.css'


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      angular: false,
      reactjs: false,
      nodejs: false
    };
  }

  handleChange = (e) => {
    const {value,name,type,checked} = e.target;
    type === 'checkbox'
    ? this.setState({[name] : checked})
    : this.setState({[name] : value})
  }

  render() {
    return (
      <div>
        <FormApp handleChange={this.handleChange} {...this.state} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))