// // Updating - getDerivedStateFromProps()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         console.log("Constructor called");
//         super(props);
//         this.state = {
//             name: 'Reddy'
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps called");
//         return {
//             name: "Aruna Mohan"
//         }
//     }

//     handleClick = () => {
//         console.log("Handle click");
//         this.setState(
//             {
//                 name: 'Raghu Mohan'
//             }
//         )
//     }

//     render() {
//         console.log("render called");
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <button onClick={this.handleClick}>Change</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index name="Reddamma" />, document.getElementById('root'))


// // Updating - shouldComponentUpdate()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         console.log("Constructor called");
//         super(props);
//         this.state = {
//             name: 'Reddy'
//         }
//     }

//     handleClick = () => {
//         console.log("Handleclick function called");
//         this.setState(
//             {
//                 name: 'Aruna Mohan'
//             }
//         )
//     }

//     // shouldComponentUpdate
//     shouldComponentUpdate(nextProps, nextState) { 
//         console.log("shouldComponentUpdate called");
//         console.log(nextState);
//         // return true;
//         return false;
//      }

//     render() {
//         console.log("render called");
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <button onClick={this.handleClick}>Change</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // Updating - render()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class Index extends Component {
//     constructor(props) {
//         console.log("Constructor called");
//         super(props);
//         this.state = {
//             name: 'Reddy'
//         }
//     }

//     handleClick = () => {
//         console.log("Handleclick function called");
//         this.setState(
//             {
//                 name: 'Aruna Mohan'
//             }
//         )
//     }

//     // shouldComponentUpdate
//     shouldComponentUpdate(nextProps, nextState) { 
//         console.log("shouldComponentUpdate called");
//         console.log(nextState);
//         // return true;
//         return false;
//      }

//     render() {
//         console.log("render called");
//         return (
//             <div>
//                 <h1>My name is {this.state.name}</h1>
//                 <button onClick={this.handleClick}>Change</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// Updating - getSnapshotBeforeUpdate() and componentDidUpdate
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

    handleClick = () => {
        console.log("Handleclick function called");
        this.setState(
            {
                name: 'Aruna Mohan'
            }
        )
    }

    // shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) { 
        console.log("shouldComponentUpdate called");
        console.log("shouldComponentUpdate: ", nextState);
        // return true;
        // return false;

        if(this.state.name === "Reddy"){
            return true;
        } else {
            return false;
        }
     }

    //  getSnapshotBeforeUpdate
     getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate", prevProps);
        console.log("getSnapshotBeforeUpdate", prevState);
        return null;
     }

    //  componentDidUpdate
     componentDidUpdate(prevProps, prevState) { 
        console.log("componentDidUpdate", this.props);
        console.log("componentDidUpdate", this.state);
     } 
     

    render() {
        console.log("render called");
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick={this.handleClick}>Change</button>
            </div>
        )
    }
}

ReactDOM.render(<Index name="propsname" />, document.getElementById('root'))