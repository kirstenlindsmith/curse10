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
  const [renderMenu, setRenderMenu] = React.useState(false);
  const [derenderMenu, setDerenderMenu] = React.useState(null)
  const [lookingAt, lookAt] = React.useState('');
  const [tagClass, setTagClass] = React.useState("tag-wobble")

  //replay animation on toggle menu
  React.useEffect(()=>{
    setTagClass('')
    setTimeout(() => setTagClass("wobble-instant"), 20)
    setTimeout(() => setTagClass("wobble-loop"), 8500)
  }, [menuOpen])

  //handles on click or enter key
  const toggleMenu = (turnOn) => {
    if (turnOn) {
      setMenuOpen(true)
      clearTimeout(derenderMenu)
    } else {
      setMenuOpen(false)
      const toggleDerender = setTimeout(()=> setRenderMenu(false), 8000)
      setDerenderMenu(toggleDerender)
    }
  }

  //handles on focus or hover
  const handleMenuButtonInteract = (engaging) => {
    //pre-render menu when the user hovers/focuses on the button
    if (engaging && !renderMenu) {
      setRenderMenu(true)
      clearTimeout(derenderMenu)
    } else if (!engaging && renderMenu && !menuOpen) {
      //if they disengage without opening the menu, de-render
      const interactDerender = setTimeout(()=> setRenderMenu(false), 4000)
      setDerenderMenu(interactDerender)
    }
    //if the menu is already open, handle hover/focus effect
    if (menuOpen && renderMenu) {
      if (engaging) lookAt('menuButton')
      else lookAt('')
    }
  }

  const generateEyeMotionProps = (target) => ({
    onMouseEnter: () => lookAt(target),
    // onMouseLeave: () => lookAt(''),
    onFocus: () => {console.log(target); lookAt(target)},
    // onBlur: () => lookAt('')
  })

  const pupilHeight = () => {
    switch (lookingAt) {
      case 'menuButton':
        return '5px'
      case 'tag':
        return '28px'
      case 'home':
        return '28px'
      case 'code':
        return '30px'
      case 'art':
        return '32px'
      case 'graphics':
        return '34px'
      case 'blog':
        return '36px'
      case 'contact':
        return '38px'
      default:
       return '20px'
    }
  }

  return (
    <div className="hamburger-container">
      {/* ICON */}
      <div 
        className={`hamburger-icon ${menuOpen ? 'h-open' : 'h-closed'}`}
        role="button"
        aria-label="toggle hamburger menu"
        tabIndex={0}
        onMouseEnter={() => handleMenuButtonInteract(true)}
        onMouseLeave={() => handleMenuButtonInteract(false)}
        onFocus={() => handleMenuButtonInteract(true)}
        onBlur={() => handleMenuButtonInteract(false)}
        onClick={() => toggleMenu(!menuOpen)}
        onKeyDown={(e) => {
          if (e.key && e.key==="Enter") toggleMenu(!menuOpen)
        }}
      >
        <div />
      </div>

      {/* MENU */}
      {renderMenu && (
        <div
          aria-hidden={!menuOpen} 
          className={`hamburger-menu ${menuOpen ? 'slide-left' : ''}`}
        >
          <div className="cat-neck right-neck"/>
          <div className="cat-neck left-neck"/>

          <div className="cat-ear right-ear"/>
          <div className="cat-ear left-ear"/>

          <div className="cat-eye right-eye">
            <div style={{top: pupilHeight()}} className='pupil'/>
          </div>
          <div className="cat-eye left-eye">
            <div style={{top: pupilHeight()}} className='pupil'/>
          </div>

          <div className="cat-nose">
            <div className="nose-top"/>
            <div className="nose-base"/>
          </div>

          <div className="cat-mouth">
            <div className="mouth-closed-right"/>
            <div className="mouth-closed-left"/>
          </div>

        <div
          className="tag-container"
          onMouseEnter={() => lookAt('tag')}
          onMouseLeave={() => lookAt('')}
        >
          <div className="tag-string"/>
          <div className={`${tagClass} menu-tag`} id="menu-tag">
            <ul>
              <li>
                <Link 
                  to="/"
                  {...generateEyeMotionProps('home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects"
                  {...generateEyeMotionProps('code')}
                >
                  Code
                </Link>
              </li>
              <li>
                <Link 
                  to="/art"
                  {...generateEyeMotionProps('art')}
                >
                  Art
                </Link>
              </li>
              <li>
                <Link 
                  to="/graphics"
                  {...generateEyeMotionProps('graphics')}
                >
                  Graphics
                </Link>
              </li>
              <li>
                <a 
                  href="https://kirstenlindsmith.wordpress.com/"
                  {...generateEyeMotionProps('blog')}
                  title="(New window) My autism blog on wordpress"
                >
                  Autism Blog
                </a>
                <p>*new window</p>
              </li>
              <li>
                <Link 
                  to="/contact"
                  {...generateEyeMotionProps('contact')}
                >
                  Contact
                </Link>

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
          <div className="tag-top"/>
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
      )}
    </div>
  )
}

export default Hamburger
