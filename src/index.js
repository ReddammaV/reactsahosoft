// // -> 1. Managing the form State
// import React, { useState, useEffect } from 'react'
// import { useFormik } from 'formik'
// import ReactDOM from 'react-dom'

// const Index = () => {
//   const formik = useFormik({
//     initialValues : {
//       name : '',
//       email : '',
//       password : ''
//     }
//   })
//   console.log("Form Values", formik.values);
//   return (
//     <div className='container mt-5'>
//       <h4>Registration Form</h4>
//       <form>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" className="form-control" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" className="form-control" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" className="form-control" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))



// // -> 2. Handling Form Submissions
// import React, { useState, useEffect } from 'react'
// import { useFormik } from 'formik'
// import ReactDOM from 'react-dom'

// const Index = () => {
//   const formik = useFormik({
//     initialValues : {
//       name : '',
//       email : '',
//       password : ''
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     }
//   })
//   return (
//     <div className='container mt-5'>
//       <h4>Registration Form</h4>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input type="text" className="form-control" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" className="form-control" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input type="password" className="form-control" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))




// // -> 3. Validate and displays error
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import ReactDOM from 'react-dom'

const Index = () => {
  const formik = useFormik({
    initialValues : {
      name : '',
      email : '',
      password : ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if(!values.name){
        errors.name = "Name is Required"
      }
      if(!values.email){
        errors.email = "Email is Required"
      }
      if(!values.password){
        errors.password = "Password is Required"
      }
      return errors;
    }
  })
  return (
    <div className='container mt-5'>
      <h4>Registration Form</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name ? <small className="text-danger form-text">{formik.errors.name}</small> : null}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email ? <small className="text-danger form-text">{formik.errors.email}</small> : null}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password ? <small className="text-danger form-text">{formik.errors.password}</small> : null}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
