// import React from 'react';
// import ReactDom from 'react-dom';

// let element = <h1 data-myattribute="Sahosoft">Hello Reddy</h1>;
// ReactDom.render(element, document.getElementById('root'))


// import React from 'react'
// import ReactDOM from 'react-dom'

// var h1style = {
//   color: 'green',
//   fontSize: '50px'
// }
// let element = <div><h1 style={h1style}>Hello</h1></div>
// ReactDOM.render(element, document.getElementById('root'))

// let element = <div><h1 style={{color:'green'}}>Hello</h1></div>
// ReactDOM.render(element, document.getElementById('root'))

// let isShow = true;
// // let element = isShow === true ? console.log("Hello true") : console.log("wrong") 
//  let element = isShow === true ? <div>
//    <h1>Hello</h1>
//    </div> : 'Not Valid'
// ReactDOM.render(element, document.getElementById('root'))


// let element = <input type="text" />
// ReactDOM.render(element, document.getElementById('root'))

// let element = <label htmlFor="name">Name</label>
// ReactDOM.render(element, document.getElementById('root'))


// var names = ["Reddy","Aruna","Mohan"];
// var namesList = [];

// for(const [index, value] of names.entries()){
//   namesList.push(<li>{value}</li>)
// }
// ReactDOM.render(namesList, document.getElementById('root'))

// var names = ["Reddy","Aruna","Mohan"];
// var namesList = <ul>
//   {names.map((value, index) => {
//     return <li key={index}>{value}</li>
//   })}
// </ul>
// ReactDOM.render(namesList, document.getElementById('root'))


// var names = ["Reddy","Aruna","Mohan"];
// var namesList = <ul>
//   {names.map((value, index) => <li key={index}>{value}</li>
//   )}
// </ul>
// ReactDOM.render(namesList, document.getElementById('root'))


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Component } from 'react/cjs/react.production.min'
// import Person from './app'
// function Person(){
//   return <h2>Hello Reddy</h2>
// }

// class Person extends Component {
//   render(){
//     return <h2>Hello Reddy!</h2>
//   }
// }
// ReactDOM.render(<Person />, document.getElementById('root'))



// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Header extends Component {
//   render() {
//     return <h2>Header</h2>
//   }
// }
// class Content extends Component {
//   render() {
//     return <h2>Content</h2>
//   }
// }
// class Footer extends Component {
//   render() {
//     return <h2>Footer</h2>
//   }
// }
// class Index extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Content />
//         <Footer />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Index />, document.getElementById('root'))

// props 
// function Greeting(props){
//   console.log(props);
//   return (
//     <p>Hello! I am {props.name} and age is {props.age} </p>
//   )
// }

// props  - destructuring
// function Greeting({name,age}){
//   console.log(name,age);
//   return (
//     <p>Hello! I am {name} and age is {age} </p>
//   )
// }

// props  - destructuring -second way
// function Greeting(props){
//   const {name,age} = props;
//   console.log(name,age);
//   return (
//     <p>Hello! I am {name} and age is {age} </p>
//   )
// }

// function Index(){
//   return(
//     <div>
//       <Greeting name="Raghu Mohan" age="68" />
//       <Greeting name="Aruna Kumari" age="58" />
//     </div>
//   )
// }

// second way to assign variable - age check {} instead of ""
// function Index(){
//   const momAge = 58;
//   return(
//     <div>
//       <Greeting name="Raghu Mohan" age={68} />
//       <Greeting name="Aruna Kumari" age={momAge} />
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// function based - props
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// // import Employee from "./app.js";


// export default function Employee(props){
//   console.log(props);
//   return (
//     <div>
//       <h4>Name : {props.name}</h4>
//       <h4>Employee ID : {props.empId}</h4>
//       <h4>Gender : {props.gender === true ? 'Female' : 'Male'}</h4>
//       <h4>IsChild : {props.isChild === true ? 'Yes' : 'No'}</h4>
//       <h4>Friends: <ul>
//         {
//           props.friendsList.map((item,index)=>{
//             return <li key={index}>{item}</li>
//           })
//         }
//         </ul></h4>
//         <h4>Mobile Number: {props.studentDetails.mobileNo}</h4>
//         <h4>Email Id: {props.studentDetails.emailId}</h4>
//         <h4>Function: {props.function()}</h4>
//         <h4>Function Message: {props.function2("Hello Message!")}</h4>
//         <h4>Function with Sum: {props.funSum(10,20)}</h4>
//     </div>
//   )
// }
// let friends = ["Reddy","Aruna","Mohan"];
// let studentsInfo = {mobileNo: 9566042245, emailId: 'velasirireddamma@gmail.com'}
// ReactDOM.render(<Employee 
//   name = "Reddy"
//   empId = {101}
//   gender = {true}
//   isChild = {false}
//   friendsList = {friends}
//   studentDetails = {studentsInfo}
//   function = {()=>{return "Hello I'm function!!"}}
//   function2 = {(msg)=>{return msg}}
//   funSum = {(a,b)=>{return a+b}}
//   />, document.getElementById('root'))


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Name : {this.props.name}</h4>
//         <h4>Employee ID : {this.props.empId}</h4>
//         <h4>Gender : {this.props.gender === true ? 'Female' : 'Male'}</h4>
//         <h4>IsChild : {this.props.isChild === true ? 'Yes' : 'No'}</h4>
//         <h4>Friends: <ul>
//           {
//             this.props.friendsList.map((item, index) => {
//               return <li key={index}>{item}</li>
//             })
//           }
//         </ul></h4>
//         <h4>Mobile Number: {this.props.studentDetails.mobileNo}</h4>
//         <h4>Email Id: {this.props.studentDetails.emailId}</h4>
//         <h4>Function: {this.props.function()}</h4>
//         <h4>Function Message: {this.props.function2("Hello Message!")}</h4>
//         <h4>Function with Sum: {this.props.funSum(10, 20)}</h4>
//       </div>
//     )
//   }
// }

// let friends = ["Reddy","Aruna","Mohan"];
// let studentsInfo = {mobileNo: 9566042245, emailId: 'velasirireddamma@gmail.com'}
// ReactDOM.render(<Employee 
//   name = "Reddy"
//   empId = {101}
//   gender = {true}
//   isChild = {false}
//   friendsList = {friends}
//   studentDetails = {studentsInfo}
//   function = {()=>{return "Hello I'm function!!"}}
//   function2 = {(msg)=>{return msg}}
//   funSum = {(a,b)=>{return a+b}}
//   />, document.getElementById('root'))

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class Parent extends Component {
//   render() {
//     let myAge = 30;
//     return (
//       <div>
//         <h2>I'm Parent Component</h2>
//         <Child name="Reddy" age={myAge} />
//       </div>
//     )
//   }
// }

// class Child extends Component {
//   render() {
//     return (
//       <div>
//         <h2>I'm Child Component. My name is {this.props.name} and age {this.props.age}</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Parent />, document.getElementById('root'))

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Student extends Component {
  constructor(){
    super()
    console.log(this);
  }
  render(){
    return(
      <div>
        <h3>Hello {this.props.name}</h3>
      </div>
    )
  }
}

ReactDOM.render(<Student name="Reddy" />, document.getElementById('root'))








