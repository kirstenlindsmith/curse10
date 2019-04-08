import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  // <div className="navbar-fixed" id="nav">
  <div id="nav">
    {/* <nav className="white"> */}
    <div className="navWrapper">
      <div className="container">
        <a href="/" id="logo">
          <img id="name" src="/assets/kirstenLogo.png" />
          <img id="definition" src="/assets/definition.png" />
        </a>

        {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="https://kirstenlindsmith.pixpa.com/art-portfolio">
                Graphics
              </a>
            </li>
            <li>
              <a href="https://kirstenlindsmith.wordpress.com/">Autism Blog</a>
            </li>
          </ul> */}
      </div>
    </div>
    {/* </nav> */}
  </div>
)

export default Navbar
