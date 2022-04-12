// // public folder image
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//   render() {
//     return (
//       <div>
//         index
//         {/* <img alt="" src={process.env.PUBLIC_URL+"/1.png"} /> */}
//         <img alt="" src={process.env.PUBLIC_URL+"/images/2.png"} />
//       </div>

//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// src folder image
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import pic from './images/2.png'

export default class Index extends Component {
  render() {
    return (
      <div>
        index
        <img alt="" src={pic} />
      </div>

    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))