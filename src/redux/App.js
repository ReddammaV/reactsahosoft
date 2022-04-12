// // Simple read name and
// import React from 'react'
// import {connect} from 'react-redux'

// const App = (props) => {
//   return (
//     <div>
//       <h1>App Component</h1>
//       <p>My name is {props.myName} and age is {props.age}</p>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     myName: state.name,
//     age: state.age
//   }
// }

// export default connect(mapStateToProps)(App)

// // Edit name with button
// import React from 'react'
// import {connect} from 'react-redux'

// const App = (props) => {
//   return (
//     <div>
//       <h1>App Component</h1>
//       <p>My name is {props.myName} and age is {props.age}</p>
//       <button className='btn btn-primary' onClick={()=>props.changeName('Reddy')}>Change Name</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     myName: state.name,
//     age: state.age
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     changeName : (name) => {
//       dispatch({type: 'CHANGE_NAME', payload: name})
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatch)(App)

// // for shortcut
// import React from 'react'
// import {connect} from 'react-redux'
// import {anotherName} from './actions/myAction'

// const App = (props) => {
//   return (
//     <div>
//       <h1>App Component</h1>
//       <p>My name is {props.myName} and age is {props.age}</p>
//       <button className='btn btn-primary' onClick={()=>props.changeName('Reddy')}>Change Name</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     myName: state.name,
//     age: state.age
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     changeName : (name) => {
//       dispatch(anotherName(name))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatch)(App)


// // for combine more reducers
// import React from 'react'
// import {connect} from 'react-redux'
// import {anotherName} from './actions/myAction'
// import {addCourse} from './actions/myAction'

// const App = (props) => {
//   const allCourses = props.myCourses.map(item => {
//     return (
//       <p key={item}>{item}</p>
//     )
//   })
//   return (
//     <div>
//       <h1>App Component</h1>
//       <p>My name is {props.myName}</p>
//       <h3>My Courses</h3>
//       {allCourses}
//       <button className='btn btn-primary mr-3' onClick={()=>props.changeName()}>Change Name</button>
//       <button className='btn btn-primary' onClick={()=>props.addCourse('Node Js')}>Add Course</button>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     myName: state.name,
//     myCourses: state.course
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     changeName : () => {
//       dispatch(anotherName())
//     },
//     addCourse : (name) => {
//       dispatch(addCourse(name))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatch)(App)



// with useSelector and useDispathch - instaead of mapStateToProps and mapDispatch we are using useSelector and useDispatch in easy way
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {anotherName} from './actions/myAction'
import {addCourse} from './actions/myAction'

const App = () => {
  // useSelector - for reading data
  const myName = useSelector((state) => {
    return state.name
  })

  const allCourses = useSelector((state) => {
    return state.course.map((item) => {
      return (
        <p key={item}>{item}</p>
      )
    })
  })
  
  // useDispatch - for updating data
  const dispatch = useDispatch();

  return (
    <div>
      <h1>App Component</h1>
      <p>My name is {myName}</p>
      <h3>My Courses</h3>
      {allCourses}
      <button className='btn btn-primary mr-3' onClick={()=>{ dispatch(anotherName()) }}>Change Name</button>
      <button className='btn btn-primary' onClick={()=>{dispatch(addCourse('Node Js'))}}>Add Course</button>
    </div>
  )
}

export default App