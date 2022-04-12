
// // Basic Custom Hook
// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom';
// import useMyCounter from './hook';

// function Index() {
//   const data = useMyCounter();
//   console.log(data);
//   return (
//     <div>
//       <h1>Count Up: {data.count}</h1>
//       <button onClick={data.handleIncrement}>Increment</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))



// // Custom Hook with Destructuring
// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom';
// import useMyCounter from './hook';

// function Index() {
//   const {count, handleIncrement} = useMyCounter();
//   return (
//     <div>
//       <h1>Count Up: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// Custom Hook with Destructuring - with Array
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import useMyCounter from './hook';

function Index() {
  const [count, handleIncrement] = useMyCounter();
  return (
    <div>
      <h1>Count Up: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))