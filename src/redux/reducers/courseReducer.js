const courseReducer = (state='',action) => {
  console.log(action);
  if(action.type === 'ADD_COURSE'){
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

export default courseReducer;