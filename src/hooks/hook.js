// // Hook.js - with Object {}
// import React,{useState} from 'react';
// import ReactDOM from 'react-dom';

// function useMyCounter(){
//   const [count,setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count+1)
//   }

//   return {
//     count, handleIncrement
//   }
// }

// export default useMyCounter;

// Hook.js - with Array []
import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function useMyCounter(){
  const [count,setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count+1)
  }

  return [
    count, handleIncrement
  ]
}

export default useMyCounter;