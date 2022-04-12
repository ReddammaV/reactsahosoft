import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default class RoutesNav extends Component {
  render() {
    return (
      <div>
         <Routes>
            <Switch>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            </Switch>
          </Routes>
      </div>
    )
  }
}
