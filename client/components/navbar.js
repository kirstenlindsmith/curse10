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

    <Burger right id="burger">
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <br />
        <li>
          <Link to="/projects">Code Projects</Link>
        </li>
        <br />
        <li>
          <a href="https://kirstenlindsmith.pixpa.com/art-portfolio">Art</a>
        </li>
        <br />
        <li>
          <a href="https://kirstenlindsmith.pixpa.com/">Graphics</a>
        </li>
        <br />
        <li>
          <a href="https://kirstenlindsmith.wordpress.com/">Autism Blog</a>
        </li>
        <br />
        <li>
          <a href="mailto:kirstenlindsmith@gmail.com?subject=Curse10.dev Contact">
            Contact
          </a>
        </li>
      </ul>
    </Burger>
  </div>
)

export default Navbar
