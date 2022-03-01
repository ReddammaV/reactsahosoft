// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Student from './app.js'

// ReactDOM.render(<Student name="Reddy" id={101} />, document.getElementById('root'))
// ReactDOM.render(<Student />, document.getElementById('root'))

// ReactDOM.render(<Student name="Reddy" id={102}>I'm a student in Sahosoft</Student>, document.getElementById('root'))

// propTypes
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

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

// // proptypes declaration
// Employee.propTypes = {
//   name: PropTypes.string,
//   empId: PropTypes.number,
//   gender: PropTypes.bool,
//   isChild: PropTypes.bool,
//   friendsList: PropTypes.array,
//   studentDetails: PropTypes.object,
//   function: PropTypes.func,
//   function2: PropTypes.func,
//   funSum: PropTypes.func
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


// propTypes with default props
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

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

// // proptypes declaration
// Employee.propTypes = {
//   name: PropTypes.string,
//   empId: PropTypes.number,
//   gender: PropTypes.bool,
//   isChild: PropTypes.bool,
//   friendsList: PropTypes.array,
//   studentDetails: PropTypes.object,
//   function: PropTypes.func,
//   function2: PropTypes.func,
//   funSum: PropTypes.func
// }

// let friends = ["Reddy","Aruna","Mohan"];
// let studentsInfo = {mobileNo: 9566042245, emailId: 'velasirireddamma@gmail.com'}

// // default props 
// Employee.defaultProps = {
//   name : "Reddy",
//   empId : 101,
//   gender : true,
//   isChild :false,
//   friendsList : friends,
//   studentDetails : studentsInfo,
//   function : ()=>{return "Hello I'm function!!"},
//   function2 : (msg)=>{return msg},
//   funSum : (a,b)=>{return a+b}
// }


// ReactDOM.render(<Employee/>, document.getElementById('root'))


// // props validation
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//       </div>
//     )
//   }
// }

// // props validation with propTypes
// Employee.propTypes = {
//   name: PropTypes.string.isRequired
// }

// ReactDOM.render(<Employee name="Reddy" />, document.getElementById('root'))

// // props validation - with exact names have to pass for props
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Gender: {this.props.gender}</h1>
//       </div>
//     )
//   }
// }

// // props validation with propTypes
// Employee.propTypes = {
//   gender: PropTypes.oneOf(["male","female"])
// }

// ReactDOM.render(<Employee gender="female" />, document.getElementById('root'))

// // props validation - with multiple data types for props
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h1>EmpId: {this.props.empId}</h1>
//       </div>
//     )
//   }
// }

// // props validation with propTypes
// Employee.propTypes = {
//   empId: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ])
// }

// // ReactDOM.render(<Employee empId="100" />, document.getElementById('root'))
// // ReactDOM.render(<Employee empId={true} />, document.getElementById('root'))
// ReactDOM.render(<Employee empId={100} />, document.getElementById('root'))

// props validation - PropTypes.shape
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Name: {this.props.studentDetails.name}</h1>
//         <h1>EmpId: {this.props.studentDetails.empId}</h1>
//         <h1>Age: {this.props.studentDetails.age}</h1>
//       </div>
//     )
//   }
// }

// // props validation with shape
// Employee.propTypes = {
//   studentDetails: PropTypes.shape({
//     name : PropTypes.string,
//     age: PropTypes.number,
//     empId: PropTypes.number
//   })
// }

// let obj = {
//   name: "Reddy",
//   age: 28,
//   empId: 100
// }
// ReactDOM.render(<Employee studentDetails={obj} />, document.getElementById('root'))

// props with children
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Student from './Student'
// import Layout from './Layout'

// export default class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//           <Student name="Reddy" age={28}></Student>
//           <Student name="Reddy" age={28}></Student>
//         </Layout>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Employee />, document.getElementById('root'))

// // propTypes for PropTypes.arrayOf()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Number extends Component {
//   render() {
//     return (
//       this.props.numbList.map((n,i)=>{
//         return <p key={i}>{n+10}</p>
//       })
//     )
//   }
// }

// Number.propTypes = {
//   numbList : PropTypes.arrayOf(PropTypes.number) 
// }

// ReactDOM.render(<Number numbList= {[1,2,3,4,5]} />, document.getElementById('root'))
// // ReactDOM.render(<Number numbList= {["1","2","3","4","5"]} />, document.getElementById('root'))


// // propTypes for PropTypes.objectOf()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Number extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Name: {this.props.friend.name}</h2>
//         <h2>Age: {this.props.friend.age}</h2>
//       </div>
//     )
//   }
// }

// Number.propTypes = {
//   friend : PropTypes.objectOf(PropTypes.string) 
// }

// ReactDOM.render(<Number friend= {{name: "Reddy", age: "28"}} />, document.getElementById('root'))

// propTypes for PropTypes.objectOf()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Number extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Name: {this.props.friend.name}</h2>
//         <h2>Age: {this.props.friend.age}</h2>
//       </div>
//     )
//   }
// }

// Number.propTypes = {
//   friend : PropTypes.objectOf(PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ])) 
// }

// ReactDOM.render(<Number friend= {{name: "Reddy", age: "28"}} />, document.getElementById('root'))

// // propTypes for instanceOf()
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// class Model1 {
//   name = "Reddy";
// }
// class Model2 {
//   name = "Aruna";
// }
// function Index(props){
//   return <div>{props.propModel.name}</div>
// }

// Index.defaultProps = {
//   propModel : new Model2()
// }

// Index.propTypes = {
//   propModel : PropTypes.instanceOf(Model1)
// }

// ReactDOM.render(<Index />, document.getElementById('root'))



// propTypes for  PropTypes.exact({ })
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// export default class Number extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Name: {this.props.friend.name}</h2>
//         <h2>Age: {this.props.friend.age}</h2>
//       </div>
//     )
//   }
// }

// Number.propTypes = {
//   friend : PropTypes.exact({
//     name: PropTypes.string,
//     age: PropTypes.number
//   })
// }

// // ReactDOM.render(<Number friend= {{name: "Reddy", age: 28}} />, document.getElementById('root'))
// ReactDOM.render(<Number friend= {{name: "Reddy", age: 28, email: "dsf"}} />, document.getElementById('root'))


// Fragment
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <h2>Hello</h2>
        <h2>Reddy </h2>
      </Fragment>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))


