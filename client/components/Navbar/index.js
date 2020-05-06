import React from 'react'
import Hamburger from '../Hamburger'
import './navbar-style.css'

const Navbar = () => (
  <div className="nav-container">
        <div className="home-logo">
          <a href="/" id="logo">
            <img id="name" src="/assets/kirstenLogo.png" />
            <img id="definition" src="/assets/definition.png" />
          </a>
        </div>

    <Hamburger />
  </div>
)

export default Navbar
