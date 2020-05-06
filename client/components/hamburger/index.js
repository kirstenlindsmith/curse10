import React from 'react'
import { Link } from 'react-router-dom'
import './hamburger-style.css'

// import {elastic as Burger} from 'react-burger-menu'

// const contactMethods = [
//   {
//     id: 1,
//     name: 'Github',
//     url: 'https://github.com/kirstenlindsmith'
//   },
//   {
//     id: 2,
//     name: 'LinkedIn',
//     url: 'https://linkedin.com/in/kirstenlindsmith'
//   },
//   {
//     id: 3,
//     name: 'AngelList',
//     url: 'https://angel.co/kirsten-lindsmith'
//   }
// ]

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [hovering, setHovering] = React.useState(false)
  const [tagClass, setTagClass] = React.useState("tag-wobble")

  React.useEffect(()=> {
    setInterval(() => {
      setTagClass('')
      setTimeout(() => setTagClass("tag-wobble"), 3000)
    }, 3000)
  }, [])

  return (
    <div className="hamburger-container">
      {/* ICON */}
      <div 
        className={`hamburger-icon ${menuOpen ? 'h-open' : 'h-closed'}`}
        role="button"
        aria-label="toggle hamburger menu"
        tabIndex={0}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        onClick={() => setMenuOpen(!menuOpen)}
        onKeyDown={(e) => { 
          if (e.key && e.key==="Enter") setMenuOpen(!menuOpen)
        }}
      >
        <div />
      </div>

      {/* MENU */}
      <div className={`hamburger-menu ${menuOpen ? 'slide-left' : ''}`}>
        <div className="cat-neck right-neck"/>
        <div className="cat-neck left-neck"/>

        <div className="cat-ear right-ear"/>
        <div className="cat-ear left-ear"/>

        <div className="cat-eye right-eye">
          <div className={`pupil ${hovering ? 'eye-look' : ''}`}/>
        </div>
        <div className="cat-eye left-eye">
          <div className={`pupil ${hovering ? 'eye-look' : ''}`}/>
        </div>

        <div className="cat-nose">
          <div className="nose-top"/>
          <div className="nose-base"/>
        </div>

        <div className="cat-mouth">
          <div className="mouth-closed-right"/>
          <div className="mouth-closed-left"/>
        </div>

  <div>
        <div className={`${tagClass} menu-tag`} id="menu-tag">
        </div>
</div>
        {/* <div className="cat-tongue"/> */}

        {/* <ul id="menu">
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
          {/* </li>
        </ul> */}
      </div>
    </div>
  )
}

export default Hamburger
