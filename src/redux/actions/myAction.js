// export const anotherName = (name) => {
//   return {type: 'CHANGE_NAME', payload: name}
// }

// export const anotherName = (name) => {
//   return (dispatch) => {
//     fetch('http://sahosoftweb.com/api/BrandLogo/GetAll')
//     .then(response => response.json())
//     .then(res => {
//       dispatch({
//         type: 'CHANGE_NAME',
//         payload: res.data[1].name
//       })
//     })
//   }
// }


// async and await
export const anotherName = (name) => {
  return async (dispatch) => {
    const response = await fetch('http://sahosoftweb.com/api/BrandLogo/GetAll')
    const res = await response.json()
    dispatch({
      type: 'CHANGE_NAME',
      payload: res.data[1].name
    })
  }
}

export const addCourse = (name) => {
  return {
    type: 'ADD_COURSE',
    payload: name
  }
}