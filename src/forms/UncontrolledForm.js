// // Basic Form - Uncontrolled Component
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 

// export default class Index extends Component {
//   submit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Uncontrolled Component</h2>
//         <form onSubmit={this.submit}>
//           Name: <input type="text" />
//           <br/>
//           Age: <input type="text" />
//           <br/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Uncontrolled Component - with ref
// import React, { Component, createRef } from 'react'
// import ReactDOM from 'react-dom' 

// export default class Index extends Component {
//   constructor(){
//     super();
//     this.myInput = createRef()
//   }
//   submit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//   }
//   render() {
//     return (
//       <div>
//         <h2>Uncontrolled Component</h2>
//         <form onSubmit={this.submit}>
//           Name: <input type="text" ref={this.myInput} />
//           <br/>
//           Age: <input type="text" ref={this.myInput} />
//           <br/>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Uncontrolled Component - Add input
// import React, { Component, createRef } from 'react'
// import ReactDOM from 'react-dom' 

// export default class Index extends Component {
//   constructor(){
//     super();
//     this.callRef = createRef()
//   }
//   inputHandler = () => {
//     this.callRef.current.value = "Reddamma";
//     this.callRef.current.focus();
//   }
//   render() {
//     return (
//       <div>
//         <h2>Uncontrolled Component</h2>
//           <input type="text" ref={this.callRef} />
//           <button type="submit" onClick={this.inputHandler}>Add</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// Uncontrolled Component - Submit
// import React, { Component, createRef } from 'react'
// import ReactDOM from 'react-dom' 

// export default class Index extends Component {
//   constructor(){
//     super();
//     this.callRef = createRef()
//     this.state = {
//       name:''
//     }
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.setState({
//       name: this.callRef.current.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h2>Uncontrolled Component</h2>
//          <form onSubmit={this.handleSubmit}>
//            <h3>Student Name: {this.state.name}</h3>
//          <input type="text" ref={this.callRef} />
//           <button type="submit">Submit</button>
//          </form>

//       </div>
//     )
//   }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // Uncontrolled Component - Focus
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor() {
//         super();

//         this.callRefInput = null;

//         this.setInputRef = (e) => {
//             this.callRefInput = e;
//         }
//     }

//     setFocus = () => {
//         if (this.callRefInput) {
//             this.callRefInput.focus();
//             this.callRefInput.value = "Chandan Singh";
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Callback Ref</h1>
//                 <input type="text" ref={this.setInputRef} />
//                 <button type="button" onClick={this.setFocus} >Focus</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Index />, document.getElementById("root"));

// Uncontrolled Component - Focus
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
    constructor() {
        super();

        this.callRefInput = null;


    }

    setFocus = () => {
        if (this.callRefInput) {
            this.callRefInput.focus();
            this.callRefInput.value = "Chandan Singh";
        }
    }
    render() {
        return (
            <div>
                <h1>Callback Ref</h1>
                <input type="text" ref={(e) => this.callRefInput = e} />
                <button type="button" onClick={this.setFocus} >Focus</button>
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById("root"));