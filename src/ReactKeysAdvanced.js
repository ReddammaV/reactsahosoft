// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// function ListItem(props) {
//   const value = props.value;
//   return (
//     <li>{value}</li>
//   )
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((n,i) => {
//     return <ListItem key={i} value={n} />
//   })

//   return (
//     <ul>
//       {listItems}
//     </ul>
//   )


// }
// const nums = [1, 2, 3, 4, 5]
// ReactDOM.render(<NumberList numbers={nums} />, document.getElementById('root'))

// // if id is there in array we have to pass id also in props
// import React from 'react'
// import ReactDOM from 'react-dom'

// function Post({title,content,id}) {
//   console.log({title,content,id});
//   return (
//     <div>
//       <h5>Title: {title}</h5>
//       <h5>Content: {content}</h5>
//     </div>
//   )
// }

// const posts = [
//   { id: 1, title: "Hello Sahosoft", content: "Welcome to Sahosoft" },
//   { id: 2, title: "Hello All", content: "Welcome to React Js Class" }
// ]
// function Blog() {
//   const content = posts.map(p => {
//     return (
//       <Post key={p.id} id={p.id} title={p.title} content={p.content} />
//     )
//   })

//   return (
//     <div>{content}</div>
//   )
// }

// ReactDOM.render(<Blog />, document.getElementById('root'))


// Embedding map in jsx
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function ListItem(props) {
  const value = props.value;
  return (
    <li>{value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {
        numbers.map((n, i) => {
          return <ListItem key={i} value={n} />
        })
      }
    </ul>
  )


}
const nums = [1, 2, 3, 4, 5]
ReactDOM.render(<NumberList numbers={nums} />, document.getElementById('root'))