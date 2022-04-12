// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'
import myContext from './Context'

function Index() {
  return (
    <myContext.Provider value={{ name: "Reddy", age: 30 }}>
        <div>
          <Student />
        </div>
    </myContext.Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))