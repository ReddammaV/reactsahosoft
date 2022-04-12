// import React, { Component } from 'react'

// export default class About extends Component {
//   render() {
//     return (
//       <div>About</div>
//     )
//   }
// }

// // with destructuring
// import React from 'react'
// import { useParams } from 'react-router-dom'

// const About = () => {
//   let { id } = useParams()
//   return (
//     <div>
//       <h2>About</h2>
//       <p>ID : {id}</p>
//     </div>
//   )
// }

// export default About


// without destructuring
import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let params = useParams()
  return (
    <div>
      <h2>About</h2>
      <p>ID : {params.id}</p>
    </div>
  )
}

export default About