// // React Lists
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 

// function Index(){
//   const people = [
//     {name: "Reddy"},
//     {name: "Aruna"},
//     {name: "Mohan"}
//   ]
//   return(
//     <div>
//       <h1>My Family</h1>
//      {/* { people.map((p,i) => <p key={i}>{p.name}</p>) } */}

//      { people.map((p,i) => {
//        return <p key={i}>{p.name}</p>
//      }) }

//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // React Lists - Key should be on parent element ex: in <div>
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 

// function Index(){
//   const people = [
//     {name: "Reddy"},
//     {name: "Aruna"},
//     {name: "Mohan"}
//   ]
//   return(
//     <div>
//       <h1>My Family</h1>
//      {/* { people.map((p,i) => <p key={i}>{p.name}</p>) } */}

//      { people.map((p,i) => {
//        return <div key={i}>
//          <p>{p.name}</p>
//          <h3>Hello</h3>
//        </div>
//      }) }

//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// React Lists - with () and without return
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Index() {
  const people = [
    { name: "Reddy" },
    { name: "Aruna" },
    { name: "Mohan" }
  ]
  return (
    <div>
      <h1>My Family</h1>
      {/* { people.map((p,i) => <p key={i}>{p.name}</p>) } */}

      {people.map((p, i) =>
      (
        <div key={i}>
          <p>{p.name}</p>
          <h3>Hello</h3>
        </div>
      )
      )}

    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))