import React, { Component } from 'react'
import './App.css'
import validator from 'validator';
import FormValidator from './FormValidator';

export default class App extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter name'
      },
      {
          field: 'name',
          method: validator.isUppercase,
          validWhen: true,
          message: 'Please enter name in upper case'
      },
      // {
      //     field: 'name',
      //     method: validator.contains,
      //     validWhen: true,
      //     args : [' '],
      //     message: 'Please enter name incliding space'
      // },
      // {
      //   field: 'name',
      //   method: validator.isInt,
      //   validWhen: true,
      //   args: [{ min: 5, max: 100 }],
      //   message: 'Please enter number between 5 to 100'
      // },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter email id'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Please enter valid email id'
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter phone no'
      },
      {
        field: 'phone',
        method: 'matches',
        args: [/^([+]\d{2}[ ])?\d{10}$/],
        validWhen: true,
        message: 'Please enter valid phone number'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter password'
      },
      {
        field: 'confirmPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Please enter confirm password'
      },
      {
        field: 'confirmPassword',
        method: this.passwordMatch,
        validWhen: true,
        message: 'Password and confirm password must be same'
      }
    ]);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      validation: this.validator.ValidationInit()
    };
    this.submitted = false;

    //console.log(validator.isEmpty(''));
    //console.log(validator.isEmpty(this.state.name));
    // console.log(validator.isEmpty(this.state.email));
    // console.log(validator.isEmail(this.state.email));
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.submitted = true;
    const validation = this.validator.validate(this.state);
    // this.setState({
    //     validation
    // });

    if (validation.isValid) {
      console.log(this.state);
    }


    // if (document.getElementById("txtName").value == "") {
    //     alert("Name is required !!");
    // } else {
    //     console.log(this.state);
    // }

    // if (validator.isEmpty(this.state.name)) {
    //     alert("Name is required !!");
    // } else {
    //     console.log(this.state);
    // }
  }

  passwordMatch = (confirmPass) => {
    return confirmPass === this.state.password
  }

  componentDidMount() {
    this.submitted = true;
    const validation = this.validator.validate(this.state);
    this.setState({
      validation
    });
  }


  render() {
    let { name, email, phone, password, confirmPassword } = this.state;
    let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;
    return (
      <div className="container" >
        <div className="row" >
          <div className="col-md-6" >
            <form onSubmit={this.handleSubmit} >
              <h1>Registration Form</h1>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  className={"form-control " + (validation.name.isInvalid ? 'has-error' : '')}
                  id="txtName"
                  name="name"
                  placeholder="Enter Full Name"
                  onChange={this.handleInput}
                  value={name}
                />
                <span className="help-block" >{validation.name.message}</span>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  className={"form-control " + (validation.email.isInvalid ? 'has-error' : '')}
                  name="email"
                  placeholder="Enter Email Id"
                  onChange={this.handleInput}
                  value={email}
                />
                <span className="help-block" >{validation.email.message}</span>
              </div>

              <div>
                <label>Phone (ex: +91 0123456789)</label>
                <input
                  type="text"
                  className={"form-control " + (validation.phone.isInvalid ? 'has-error' : '')}
                  name="phone"
                  placeholder="Enter Phone No"
                  onChange={this.handleInput}
                  value={phone}
                />
                <span className="help-block" >{validation.phone.message}</span>
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  className={"form-control " + (validation.password.isInvalid ? 'has-error' : '')}
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleInput}
                  value={password}
                />
                <span className="help-block" >{validation.password.message}</span>
              </div>

              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className={"form-control " + (validation.confirmPassword.isInvalid ? 'has-error' : '')}
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  onChange={this.handleInput}
                  value={confirmPassword}
                />
                <span className="help-block" >{validation.confirmPassword.message}</span>
              </div>
              <div>
                <button type="submit" className="btn btn-primary" >Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
