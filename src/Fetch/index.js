// // Fetch API - Basic Example
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   constructor(){
//     super();
//   }

//   componentDidMount() {
//     fetch('https://api.github.com/users/hacktivist123/repos')
//       .then(response => response.json())
//       .then(data => console.log(data)
//       );
//   }

//   render() {
//     return (
//       <div>
//         <h3>Fetch API - Check console</h3>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

import ReactDOM from 'react-dom';
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))