// // // React Keys - with custom index
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const people = [
//     { name: "Reddy" },
//     { name: "Aruna" },
//     { name: "Mohan" }
//   ]
//   return (
//     <div>
//       <h1>My Family</h1>
//       {people.map((person, index) =>
//       (
//         <div key={index}>
//           <p>{index}. {person.name}</p>
//         </div>
//       )
//       )}

//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// React Keys - with id in the array
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const people = [
//     { id: 101, name: "Reddy" },
//     { id: 102, name: "Aruna" },
//     { id: 103, name: "Mohan" }
//   ]
//   return (
//     <div>
//       <h1>My Family</h1>
//       {people.map((person) =>
//       (
//         <div key={person.id}>
//           <p>{person.name}</p>
//         </div>
//       )
//       )}

//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // React Keys - with multiple object and array
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const people = [
//     {
//       name: "Reddy",
//       course: [
//         { name: "React Js", type: "paid" },
//         { name: "JSX", type: "free" }
//       ]
//     },
//     {
//       name: "Aruna",
//       course: [
//         { name: "Angular Js", type: "paid" },
//         { name: "Typescript", type: "free" }
//       ]
//     },
//     {
//       name: "Mohan",
//       course: [
//         { name: "Node Js", type: "paid" },
//         { name: "Javascript", type: "free" }
//       ]
//     }
//   ]
//   return (
//     <div>
//       <h1>My Family</h1>
//       {people.map((person, index) =>
//       (
//         <div key={index}>
//           <h2>{person.name} Course</h2>
//           <div>
//             {
//               person.course.map((c,i) => 
//               (
//                   <p key={i}>{c.name} is {c.type} course</p>
//               ))
//             }
//           </div>
//         </div>
//       )
//       )}

//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// React Keys - With key and object names
import React from 'react'
import ReactDOM from 'react-dom'
function Index(){
  const person = {
    name: "Reddy",
    age: 28,
    mobile: 9566042245
  }

  return(
    <div>
      {
        Object.keys(person).map((column,i)=> {
          return (
            <p key={column}>{column}: {person[column]}</p>
          )
        })
      }
    </div>
  )
}
ReactDOM.render(<Index />, document.getElementById('root'))