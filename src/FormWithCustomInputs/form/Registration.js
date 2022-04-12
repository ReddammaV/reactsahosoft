import React, { Component } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/Textarea'
import Select from '../components/Select'
import CheckBox from '../components/Checkbox'

const btnStyle = {
  margin: '10px'
}

export default class Registration extends Component {
  constructor() {
    super();

    this.state = {
      newUser: {
        name: '',
        age: 0,
        gender: '',
        skills: [],
        about: ''
      },
      genderOptions: ['Male', 'Female', "Other"],
      skillOptions: ['Programming', "Developmet", "Design", "Testing"]
    };
  }

  handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newUser);
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: 0,
        gender: '',
        skills: [],
        about: ''
      }
    });
  }

  render() {
    return (
      <div>
        <form className="container-fluid" onSubmit={this.handleSubmit} >
          <Input
            title="Full Name"
            placeholder="Enter Your Name Here"
            name="name"
            action={this.handleInput}
            inputtype="text"
            value={this.state.newUser.name}
          />

          <Input
            title="Age"
            placeholder="Enter Your Age Here"
            name="age"
            action={this.handleInput}
            inputtype="number"
            value={this.state.newUser.age}
          />

          <Select
            title="Gender"
            name="gender"
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder="Select Gender"
            action={this.handleInput}
          />



          <CheckBox
            title="Skills"
            name="skills"
            action={this.handleInput}
            selectedOptions={this.state.newUser.skills}
            options={this.state.skillOptions}
          />

          <TextArea
            title="About You"
            name="about"
            value={this.state.newUser.about}
            placeholder="Plase write about you"
            action={this.handleInput}
            rows={5}
            cols={10}
          />

          <Button
            style={btnStyle}
            type='primary'
            title='Submit'
            action={this.handleSubmit}
          />
          <Button
            style={btnStyle}
            type='secondary'
            title='Cancle'
            action={this.handleClearForm}
          />
        </form>
      </div>
    )
  }
}

