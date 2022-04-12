// Arrow function
import React, { useReducer, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'

const myContext = createContext();

const iState = {
  name: 'Aruna'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
        name: action.payload
      }
    default:
      return state
  }
}

const Student3 = () => {
  const contextData = useContext(myContext)
  return (
    <>
      <h2>Hello Student3</h2>
      <h3>My name is {contextData.name}</h3>
      <button onClick={() => contextData.changeName({ type: 'changeName', payload: 'Reddy' })}>Change Name</button>
    </>
  )
}

const Student2 = () => {
  const contextData = useContext(myContext)
  return (
    <>
      <h2>Hello Student2</h2>
      <h3>My name is {contextData.name}</h3>
      <button onClick={() => contextData.changeName({ type: 'changeName', payload: 'Aruna' })}>Change Name</button>
      <Student3 />
    </>
  )
}

const Student1 = () => {
  const contextData = useContext(myContext)
  return (
    <>
      <h2>Hello Student1</h2>
      <h3>My name is {contextData.name}</h3>
      <button onClick={() => contextData.changeName({ type: 'changeName', payload: 'Mohan' })}>Change
        Name</button>
      <Student2 />
    </>
  )
}

const Index = () => {
  const [data, dispatch] = useReducer(reducer, iState)
  return (
    <myContext.Provider value={{ name: data.name, changeName: dispatch }}>
      <div>
        <h2>Hello Sahosoft</h2>
        <h2>My name is {data.name}</h2>
        <Student1 />
      </div>
    </myContext.Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))