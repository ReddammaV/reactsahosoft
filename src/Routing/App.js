// Basic Routing
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// Basic Routing
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Routing</h3>
//         <BrowserRouter>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }




// // Routing with Link
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// export default class App extends Component {
//   render() {
//     return (
//       <div>        
//         <Router>
//         <h3>Routing</h3>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }




// // NavLink - with style
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <h3>Routing</h3>
//           <ul>
//             <li>
//               <NavLink to="/" style={
//                 ({ isActive }) => ({ color: isActive ? 'red' : '' })
//               }>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" style={
//                 ({ isActive }) => ({ color: isActive ? 'red' : '' })
//               }>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" style={
//                 ({ isActive }) => ({ color: isActive ? 'red' : '' })
//               }>Contact</NavLink>
//             </li>
//           </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }


// // NavLink - className
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
// import './index.css'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <h3>Routing</h3>
//           <ul>
//             <li>
//               <NavLink to="/" className={
//                 ({ isActive }) => (isActive ? 'active' : '')
//               }>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className={
//                 ({ isActive }) => (isActive ? 'active' : '')
//               }>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className={
//                 ({ isActive }) => (isActive ? 'active' : '')
//               }>Contact</NavLink>
//             </li>
//           </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }

// // NavLink - className
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
// import './index.css'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <h3>Routing</h3>
//           <ul>
//             <li>
//               <NavLink to="/" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>Contact</NavLink>
//             </li>
//           </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }



// // Wildcard Route
// import React, { Component } from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import NotFound from './NotFound'
// import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
// import './index.css'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <h3>Routing</h3>
//           <ul>
//             <li>
//               <NavLink to="/" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to="/login" className={
//                 ({ isActive }) => (isActive ? 'active' : 'not-active')
//               }>Login</NavLink>
//             </li>
//           </ul>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/home" element={<Home />} />
//             <Route exact path="/about" element={<About />} />
//             <Route exact path="/contact" element={<Contact />} />
//             <Route exact path="*" element={<NotFound />} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
// }



// Parameter Route
import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Order from './Order'
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <h3>Routing</h3>
          <ul>
            <li>
              <NavLink to="/" className={
                ({ isActive }) => (isActive ? 'active' : 'not-active')
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={
                ({ isActive }) => (isActive ? 'active' : 'not-active')
              }>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={
                ({ isActive }) => (isActive ? 'active' : 'not-active')
              }>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/order/101" className={
                ({ isActive }) => (isActive ? 'active' : 'not-active')
              }>Order</NavLink>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/order/:id" element={<Order />} />

          </Routes>
        </Router>
      </div>
    )
  }
}