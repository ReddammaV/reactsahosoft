// class
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import App from './App'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import reducer from './reducers/reducer'

// export default class Index extends Component {  
//   render() {    
//     return (
//       <div>
//         <App />
//       </div>
//     )
//   }
// }
// const myStore = createStore(reducer)

// ReactDOM.render(<Provider store={myStore}><Index /></Provider>, document.getElementById('root'))


// // with redux-devtools
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import App from './App'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import reducer from './reducers/reducer'

// export default class Index extends Component {  
//   render() {    
//     return (
//       <div>
//         <App />
//       </div>
//     )
//   }
// }
// const myStore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ReactDOM.render(<Provider store={myStore}><Index /></Provider>, document.getElementById('root'))



// // with redux-thunk
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import App from './App'
// import {createStore, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import reducer from './reducers/reducer'

// export default class Index extends Component {  
//   render() {    
//     return (
//       <div>
//         <App />
//       </div>
//     )
//   }
// }
// const myStore = createStore(reducer, applyMiddleware(thunk))

// ReactDOM.render(<Provider store={myStore}><Index /></Provider>, document.getElementById('root'))


// // with redux-thunk with react-devtools compass 
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import App from './App'
// import {createStore, applyMiddleware, compose} from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import reducer from './reducers/reducer'

// export default class Index extends Component {  
//   render() {    
//     return (
//       <div>
//         <App />
//       </div>
//     )
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const myStore = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(<Provider store={myStore}><Index /></Provider>, document.getElementById('root'))


// with more reducers
import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import App from './App'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import nameReducer from './reducers/nameReducer'
import courseReducer from './reducers/courseReducer'

export default class Index extends Component {  
  render() {    
    return (
      <div>
        <App />
      </div>
    )
  }
}
const reducers = combineReducers({
  name: nameReducer, 
  course: courseReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(reducers, {name: 'Reddamma', course: ['Angular', 'React']} , composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={myStore}><Index /></Provider>, document.getElementById('root'))



