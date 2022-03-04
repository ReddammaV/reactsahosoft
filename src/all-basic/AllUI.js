// // multiple calssnames with in css modules
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import styles from './app.module.css'
// import cx from 'classnames'

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <h3 className={cx(styles.title2)}>Hello All</h3>
//         <h1 className={cx(styles.title, styles.titleFont)}>Welcome Sahosoft</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))


// // multiple calssnames with in css modules - with condition
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import styles from './app.module.css'
// import cx from 'classnames'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       titleCss : true
//     }
//   }

//   handlerCss = () => {
//     console.log('Hello');
//     this.setState((state)=> ({
//       titleCss : !state.titleCss
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <h3 className={cx(styles.title2)}>Hello All</h3>
//         <h1 className={cx(styles.title, {[styles.titleFont] : true})}>Welcome Sahosoft</h1>
//         <h1 className={cx(styles.title, {[styles.titleFont] : this.state.titleCss})}>Welcome Sahosoft</h1>
//         <h1 className={cx(styles.title2, {[styles.titleFont] : this.state.titleCss ? true : false})}>Sahosoft</h1>
//         <button onClick={this.handlerCss}>{this.state.titleCss ? 'Hide fontSize' : 'Show fontSize'}</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// // multiple calssnames with in css modules - with prop based logic
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 
// import styles from './app.module.css'
// import cx from 'classnames'

// function Button({type,text}){
// return(
//   <div>
//     <button className={cx(styles.button, styles[type])}>{text}</button>
//   </div>
// )
// }

// function Index(){
//   return (
//     <div>
//       <Button type="save" text="Submit" />
//       <Button type="danger" text="Delete" />
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))

// React sass
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' 

// function Index(){
//   return (
//     <div>
//       <h1>Hello Sahosoft</h1>
//       <h2>Hello All</h2>
//     </div>
//   )
// }

// ReactDOM.render(<Index />, document.getElementById('root'))


// // Bootstrap
// import React, { Component } from 'react'
// import FontAwesome from 'react-fontawesome'
// import ReactDOM from 'react-dom'
// import './app.css'

// function MyComponent(){
//   return (
//     <button className='btn btn-primary'><i className='fa fa-save'></i> save </button>
//   )
// }

// ReactDOM.render(<MyComponent />, document.getElementById('root'))

// Emoji
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.css'

function MyComponent() {
    return (
        <>
            <button className='btn btn-primary'><i className='fa fa-save'></i> save 🥇 </button>
            <h1> 👍 </h1>
        </>
    )
}

ReactDOM.render(<MyComponent />, document.getElementById('root'))
