// // Inline css
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function Button() {
//   return (
//     <button style={
//       {
//         color: '#fff',
//         background: 'green',
//         fontSize: '2em',
//         border: 'none'
//       }
//     }>
//       Submit
//     </button>
//   )

// }

// ReactDOM.render(<Button />, document.getElementById('root'))

// // Inline css - with variable
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// const btnStyle = {
//   color: '#fff',
//   background: 'green',
//   fontSize: '2em',
//   border: 'none'
// }

// function Button() {
//   return (
//     <>
//       <button style={btnStyle}>Submit</button>
//       <button style={btnStyle}>Cancel</button>
//     </>
//   )

// }

// ReactDOM.render(<Button />, document.getElementById('root'))


// // Inline css - with multiple variables
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// const btnStyle = {
//   color: '#fff',
//   background: 'violet'  
// }

// const btnStyle2 = {
//   fontSize: '2em',
//   border: 'none'
// }

// const Button = () => {
//   return (
//     <>
//       <button style={{...btnStyle, ...btnStyle2}}>Submit</button>
//     </>
//   )

// }

// ReactDOM.render(<Button />, document.getElementById('root'))


// // Inline css - with variable and inline css
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// const btnStyle = {
//   color: '#fff',
//   background: 'violet'  
// }

// const btnStyle2 = {
//   fontSize: '2em',
//   border: 'none'
// }

// const Button = () => {
//   return (
//     <>
//       <button style={{...btnStyle, ...{fontSize:'50px'}}}>Submit</button>
//     </>
//   )

// }

// ReactDOM.render(<Button />, document.getElementById('root'))

// // Inline css - with class with if condition
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Button extends Component {
//   constructor() {
//     super()
//     this.state = {
//       change: false
//     }
//   }

//   handleClick = () => {
//     this.setState((state) => (
//       {
//         change: !state.change
//       }
//     ))
//   }

//   render() {
//     const btnStyle = {
//       background: 'green',
//       color: '#fff',
//       border:'none'
//     }

//     if(this.state.change){
//       btnStyle.background = 'red'
//     } else {
//       btnStyle.background = 'green'
//     }

//     return (
//       <div>
//         <button style={btnStyle} onClick={this.handleClick}>{this.state.change ? 'red' : 'green'}</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Button />, document.getElementById('root'))

// Inline css - with class with terinary condition
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Button extends Component {
  constructor() {
    super()
    this.state = {
      change: false
    }
  }

  handleClick = () => {
    this.setState((state) => (
      {
        change: !state.change
      }
    ))
  }

  render() {
    const btnStyle = {
      background: this.state.change ? 'red' : 'green',
      color: '#fff',
      border:'none'
    }

    return (
      <div>
        <button style={btnStyle} onClick={this.handleClick}>{this.state.change ? 'red' : 'green'}</button>
      </div>
    )
  }
}

ReactDOM.render(<Button />, document.getElementById('root'))