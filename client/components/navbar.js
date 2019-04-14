import React from 'react'
import {Link} from 'react-router-dom'
import {elastic as Burger} from 'react-burger-menu'

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

    <div id="buttonLocation" />

    <div id="menuButton">
      <span />
      <span />
      <span />
    </div>

    <Burger right id="burger">
      <ul id="menu">
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
      </ul>
    </Burger>
  </div>
)

export default Navbar
