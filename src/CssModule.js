import React, { Component } from 'react'
import ReactDOM from 'react-dom' 
import styles from './app.module.css'

export default class App extends Component {
 
  render() {
    // const title3 = {
    //   backgroundColor: 'purple'
    // }
    // const titleFont3 = {
    //   fontSize: '3em',
    //   fontWeight: 'bold'
    // }
    return (
      <div>
        <h3 className={styles.title2}>Hello All</h3>
        <h1 className={`${styles.title} ${styles.titleFont}`}>Welcome Sahosoft</h1>
        {/* <h1 className={`${title3} ${titleFont3}`}>Welcome Sahosoft</h1> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
