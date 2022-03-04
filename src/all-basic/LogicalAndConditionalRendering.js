// // Logical && Conditional Rendering
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 

// export default class Index extends Component {
//   render() {
//     return (
//       <div>
//         {(5>2) && alert('Hello Reddy!')}
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Logical && Conditional Rendering
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 

export default class MailBox extends Component {
  render() {
    return (
      <div>
        <h1>Inbox</h1>
        {(this.props.unreadMessages.length > 0) && <h2>You have {this.props.unreadMessages.length} Messages</h2>}
      </div>
    )
  }
}

// const Messages = [];
const Messages = ["Hello", "React Learning Mail"]
ReactDOM.render(<MailBox unreadMessages={Messages} />, document.getElementById('root'))