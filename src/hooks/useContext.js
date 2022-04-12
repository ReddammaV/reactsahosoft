// // createContext
// import React, { createContext } from 'react'
// import ReactDOM from 'react-dom'

// const myContext = createContext()

// const Student3 = () => {
//   return (
//     <myContext.Consumer>
//     {
//       (data)=>{
//         return <h1>Hello {data}</h1>
//       }
//     }
//     </myContext.Consumer>
//   )
// }

// const Student2 = () => {
//   return (
//     <div><Student3 /></div>
//   )
// }

// const Student = () => {
//   return (
//     <div><Student2 /></div>
//   )
// }

// function Index(){
//   return(
//     <myContext.Provider value="Reddy">
//       <div><Student/></div>
//     </myContext.Provider>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // createContext - passing Object
// import React, { createContext } from 'react'
// import ReactDOM from 'react-dom'

// const myContext = createContext()

// const Student3 = () => {
//   return (
//     <myContext.Consumer>
//     {
//       // (data)=>{
//       //   return <h1>Hello {data.name} and age is {data.age}</h1>
//       // }
//       // ({name,age})=>{
//       //   return <h1>Hello {name} and age is {age}</h1>
//       // }
//       ({...data})=>{
//         return <h1>Hello {data.name} and age is {data.age}</h1>
//       }
//     }
//     </myContext.Consumer>
//   )
// }

// const Student2 = () => {
//   return (
//     <div><Student3 /></div>
//   )
// }

// const Student = () => {
//   return (
//     <div><Student2 /></div>
//   )
// }

// function Index(){
//   return(
//     <myContext.Provider value={{name:"Reddy",age:30}}>
//       <div><Student/></div>
//     </myContext.Provider>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // createContext - with class
// import React, { createContext, Component } from 'react'
// import ReactDOM from 'react-dom'

// const myContext = createContext()

// class Student3 extends Component {
//   static contextType = myContext;
//   render(){
//     return (
//       <>
//       <h1>Hello {this.context.name} and age is {this.context.age}</h1>
//       </>
//     )
//   }
// }

// const Student2 = () => {
//   return (
//     <div><Student3 /></div>
//   )
// }

// const Student = () => {
//   return (
//     <div><Student2 /></div>
//   )
// }

// function Index(){
//   return(
//     <myContext.Provider value={{name:"Reddy",age:30}}>
//       <div><Student/></div>
//     </myContext.Provider>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// // multiple createContext 
// import React, { createContext } from 'react'
// import ReactDOM from 'react-dom'

// const myContext = createContext()
// const myExtraContext = createContext()

// const Student3 = () => {
//   return (
//     <myContext.Consumer>
//       {
//         ({ name, age }) => {
//           return (
//             <myExtraContext.Consumer>
//               {
//                 (data) => {
//                   return (
//                     <>
//                       <h1>Hello {name} and age is {age} and emailid is {data}</h1>
//                     </>
//                   )
//                 }
//               }
//             </myExtraContext.Consumer>
//           )
//         }
//       }
//     </myContext.Consumer>
//   )
// }

// const Student2 = () => {
//   return (
//     <div><Student3 /></div>
//   )
// }

// const Student = () => {
//   return (
//     <div><Student2 /></div>
//   )
// }

// function Index() {
//   return (
//     <myContext.Provider value={{ name: "Reddy", age: 30 }}>
//       <myExtraContext.Provider value='velasirireddamma@gmail.com'>
//         <div><Student /></div>
//       </myExtraContext.Provider>
//     </myContext.Provider>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// Using useContext
import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom'

const myContext = createContext()
const myExtraContext = createContext()

const Student3 = () => {
  const myContextData = useContext(myContext);
  const myExtraContextData = useContext(myExtraContext);
  return (
    <>
      <h1>Hello {myContextData.name} and age is {myContextData.age} and emailid is {myExtraContextData}</h1>
    </>
  )
}

const Student2 = () => {
  return (
    <div><Student3 /></div>
  )
}

const Student = () => {
  return (
    <div><Student2 /></div>
  )
}

function Index() {
  return (
    <myContext.Provider value={{ name: "Reddy", age: 30 }}>
      <myExtraContext.Provider value='velasirireddamma@gmail.com'>
        <div>
          <Student />
        </div>
      </myExtraContext.Provider>
    </myContext.Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))