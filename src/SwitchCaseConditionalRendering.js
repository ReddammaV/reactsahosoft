// // Switch case operator - Conditional Rendering
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function NotificationMsg(props) {
//   switch (props.text) {
//     case "Hi Sahosoft":
//       return <h1>Your Notification is Hi Sahosoft</h1>;
//     case "Hello Sahosoft":
//       return <h1>Your Notification is Hello Sahosoft</h1>;
//     case "Oyy Sahosoft":
//       return <h1>Your Notification is Oyy Sahosoft</h1>;
//     // default:
//     //   return <h1>You dont have any Notification</h1>
//     default:
//       return <h1>{props.text}</h1>
//   }

// }
// // ReactDOM.render(<NotificationMsg />, document.getElementById('root'))
// // ReactDOM.render(<NotificationMsg text="Hello Sahosoft" />, document.getElementById('root'))
// ReactDOM.render(<NotificationMsg text="Hello Reddy" />, document.getElementById('root'))

// // Switch case operator - Conditional Rendering - with destructuring props {prop.text} to {props}
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function NotificationMsg({text}) {
//   switch (text) {
//     case "Hi Sahosoft":
//       return <h1>Your Notification is Hi Sahosoft</h1>;
//     case "Hello Sahosoft":
//       return <h1>Your Notification is Hello Sahosoft</h1>;
//     case "Oyy Sahosoft":
//       return <h1>Your Notification is Oyy Sahosoft</h1>;
//     // default:
//     //   return <h1>You dont have any Notification</h1>
//     default:
//       return <h1>{text}</h1>
//   }

// }
// // ReactDOM.render(<NotificationMsg />, document.getElementById('root'))
// // ReactDOM.render(<NotificationMsg text="Hello Sahosoft" />, document.getElementById('root'))
// ReactDOM.render(<NotificationMsg text="Hello Reddy" />, document.getElementById('root'))

// Switch case operator Conditional Rendering - with destructuring - with new function Message
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function NotificationMsg({ text }) {
  switch (text) {
    case "Hi Sahosoft":
      return <Message msg="Your Notification is Hi Sahosoft" />;
    case "Hello Sahosoft":
      return <Message msg="Your Notification is Hello Sahosoft" />;
    case "Oyy Sahosoft":
      return <Message msg="Your Notification is Oyy Sahosoft" />;
    default:
      return <Message msg={text} />
  }
}

function Message(props) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  )
}
ReactDOM.render(<NotificationMsg text="Hello Sahosoft" />, document.getElementById('root'))
// ReactDOM.render(<NotificationMsg text="Hello Reddy" />, document.getElementById('root'))
