import React, { Component } from 'react'
import ReactDOM from 'react-dom' 

function watch(){
  const element = (
    <div>
      <h1>Hello Reddy</h1>
      <h2>Time is : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element , document.getElementById('root'))
}

setInterval(watch,1000);


