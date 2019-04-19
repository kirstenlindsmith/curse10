import React from 'react'
import {Link} from 'react-router-dom'
import {elastic as Burger} from 'react-burger-menu'

const contactMethods = [
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com/kirstenlindsmith'
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kirstenlindsmith'
  },
  {
    id: 3,
    name: 'AngelList',
    url: 'https://angel.co/kirsten-lindsmith'
  }
]

const Hamburger = () => {
  return (
    <Burger right id="burger">
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <br />
        <li>
          <Link to="/projects">Code</Link>
        </li>
        <br />
        <li>
          <Link to="/art">Art</Link>
        </li>
        <br />
        <li>
          <Link to="/graphics">Graphics</Link>
        </li>
        <br />
        <li>
          <a href="https://kirstenlindsmith.wordpress.com/">Autism Blog</a>
        </li>
        <br />
        <li>
          <Link to="/contact">Contact</Link>

          {/* WIP CODE: trying to get drop down link for contact */}
          {/* <div className='dropdown'>
            <a href='#' className='dropLink'>
              Contact
            </a>
            <div className='dropdown-content'>
              <ul>
                <li>
                  <a data-clipboard-text="kirstenlindsmith@gmail.com" href="mailto:kirstenlindsmith@gmail.com?Subject=Website Contact">Email</a>
                </li>
                {contactMethods.map(item => (
                  <li key={item.id}>
                    <a href={item.url}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </li>
      </ul>
    </Burger>
  )
}

export default Hamburger
