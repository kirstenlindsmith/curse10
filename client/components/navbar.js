import React from 'react'
import Hamburger from './hamburger'

const Navbar = () => (
  <div id="entireNav">
    <div id="nav">
      <div className="navWrapper">
        <div className="container">
          <a href="/" id="logo">
            <img id="name" src="/assets/kirstenLogo.png" />
            <img id="definition" src="/assets/definition.png" />
          </a>
        </div>
      </div>
    </div>

    <Hamburger />
  </div>
)

export default Navbar
