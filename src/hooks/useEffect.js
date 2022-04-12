// // useEffect
// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const [count, setCount] = useState(0);

//   const clickHandle = () => {
//     setCount(count + 1)
//   }

//   useEffect(()=>{
//     console.log("useEffect Called");
//   })

//   return (
//     <div>
//       <h2>Count is: {count}</h2>
//       <button onClick={clickHandle}>Increment</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // useEffect - for all buttons not allowed
// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const clickHandle = () => {
//     setCount(count + 1)
//   }

//   const clickHandle2 = () => {
//     setCount2(count2 + 1)
//   }

//   useEffect(()=>{
//     console.log("useEffect Called");
//   },[])
  
//   return (
//     <div>
//       <h2>Count1 is: {count}</h2>
//       <button onClick={clickHandle}>Increment</button>

//       <h2>Count2 is: {count2}</h2>
//       <button onClick={clickHandle2}>Increment 2</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // useEffect - for only particular button
// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'

// function Index() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const clickHandle = () => {
//     setCount(count + 1)
//   }

//   const clickHandle2 = () => {
//     setCount2(count2 + 1)
//   }

//   useEffect(()=>{
//     console.log("useEffect Called");
//   },[count2])
  
//   return (
//     <div>
//       <h2>Count1 is: {count}</h2>
//       <button onClick={clickHandle}>Increment</button>

//       <h2>Count2 is: {count2}</h2>
//       <button onClick={clickHandle2}>Increment 2</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// useEffect - for all buttons
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Index() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const clickHandle = () => {
    setCount(count + 1)
  }

  const clickHandle2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(()=>{
    console.log("useEffect Called");
  },[count,count2])
  
  return (
    <div>
      <h2>Count1 is: {count}</h2>
      <button onClick={clickHandle}>Increment</button>

      <h2>Count2 is: {count2}</h2>
      <button onClick={clickHandle2}>Increment 2</button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))