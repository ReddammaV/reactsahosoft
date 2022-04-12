// const istate = {
//   name : "Aruna Mohan",
//   age: 58
// }

// const reducer = (state=istate,action) => {
//   return state
// }

// export default reducer;


// for dispatch
const istate = {
  name : "Aruna Mohan",
  age: 58,
  courses : ["Angular 13", "React Js", "Node Js"]
}

const reducer = (state=istate,action) => {
  console.log(action);
  if(action.type === 'CHANGE_NAME'){
    return {
      ...state,
      name: action.payload
    }
  }
  return state
}

export default reducer;