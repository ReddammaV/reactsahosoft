// // useReducer - only for name
// import React, { useReducer } from 'react'
// import ReactDOM from 'react-dom'

// const iState = "Reddy";

// const reducer = (state, action) => {
//   switch (action) {
//     case 'ChangeName':
//       return 'Aruna Mohan'
//     default:
//       return state
//   }
// }

// const Index = () => {
//   const [name, dispatch] = useReducer(reducer, iState);
//   return (
//     <div>
//      <h1>Hello {name}</h1>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // useReducer - name with function calling
// import React, { useReducer } from 'react'
// import ReactDOM from 'react-dom'

// const iState = "Reddy";

// const reducer = (state, action) => {
//   switch (action) {
//     case 'ChangeName':
//       return 'Aruna Mohan'
//     default:
//       return state
//   }
// }

// const Index = () => {
//   const [name, dispatch] = useReducer(reducer, iState);
//   return (
//     <div>
//      <h1>Hello {name}</h1>
//      <button onClick={() => dispatch('ChangeName')}>Change Name</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // useReducer - with object
// import React, { useReducer } from 'react'
// import ReactDOM from 'react-dom'

// const iState = {
//   name: "Reddy",
//   courses: ['Angular Js', 'React Js', 'Node Js']
// };

// const reducer = (state, action) => {
//   switch (action) {
//     case 'ChangeName':
//       return {
//         name: 'Aruna Mohan'
//       }
//     default:
//       return state
//   }
// }

// const Index = () => {
//   const [data, dispatch] = useReducer(reducer, iState);
//   return (
//     <div>
//      <h1>Hello {data.name}</h1>
//      <button onClick={() => dispatch('ChangeName')}>Change Name</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // useReducer - If we want to change only name we have to maintain courses in the change function object
// import React, { useReducer } from 'react'
// import ReactDOM from 'react-dom'

// const iState = {
//   name: "Reddy",
//   courses: ['Angular Js', 'React Js', 'Node Js']
// };

// const reducer = (state, action) => {
//   switch (action) {
//     case 'ChangeName':
//       return {
//         ...state,
//         name: 'Aruna Mohan'
//       }
//     default:
//       return state
//   }
// }

// const Index = () => {
//   const [data, dispatch] = useReducer(reducer, iState);
//   return (
//     <div>
//      <h1>Hello {data.name} and first course is {data.courses[0]}</h1>
//      <button onClick={() => dispatch('ChangeName')}>Change Name</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // useReducer - If i want to to change name through button click function
// import React, { useReducer } from 'react'
// import ReactDOM from 'react-dom'

// const iState = {
//   name: "Reddy",
//   courses: ['Angular Js', 'React Js', 'Node Js']
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ChangeName':
//       return {
//         ...state,
//         name: action.payload
//       }
//     default:
//       return state
//   }
// }

// const Index = () => {
//   const [data, dispatch] = useReducer(reducer, iState);
//   return (
//     <div>
//      <h1>Hello {data.name} and first course is {data.courses[0]}</h1>
//      <button onClick={() => dispatch({type:'ChangeName', payload:'Aruna Mohan'})}>Change Name</button>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// useReducer - with multiple useReducer
import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'

const iState = {
  name: "Reddy",
  courses: ['Angular Js', 'React Js', 'Node Js']
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ChangeName':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

const Index = () => {
  const [data, dispatch] = useReducer(reducer, iState);
  const [data2, dispatch2] = useReducer(reducer, iState);
  return (
    <div>
     <h1>Hello {data.name} and first course is {data.courses[0]}</h1>
     <button onClick={() => dispatch({type:'ChangeName', payload:'Aruna'})}>Change Name</button>

     <br/><br/>

     <h1>Hello {data2.name} and first course is {data2.courses[0]}</h1>
     <button onClick={() => dispatch2({type:'ChangeName', payload:'Mohan'})}>Change Name2</button>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))