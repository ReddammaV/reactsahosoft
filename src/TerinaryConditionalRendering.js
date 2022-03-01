// Terinary Conditional Rendering
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return isLoggedIn ? <div>
      <Index isLoggedIn={isLoggedIn} />
      <LogoutButton clickHandle={this.handleLogout} />
    </div> :
      <div>
        <Index isLoggedIn={isLoggedIn} />
        <LoginButton clickHandle={this.handleLogin} />
      </div>
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.clickHandle}>Login</button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.clickHandle}>Logout</button>
  )
}

function UserGreeting() {
  return <h1>Welcome Back!!</h1>
}

function GuestGreeting() {
  return <h1>Hello User Please SignUp</h1>
}

function Index(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

// ReactDOM.render(<Index isLoggedIn />, document.getElementById('root'))
ReactDOM.render(<Login />, document.getElementById('root'))