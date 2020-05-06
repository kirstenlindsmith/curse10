import React from 'react'
// import {elastic as Burger} from 'react-burger-menu'

const contactMethods = [
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com/kirstenlindsmith',
    image: '/assets/github.png'
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kirstenlindsmith',
    image: '/assets/linkedIn.png'
  },
  {
    id: 3,
    name: 'AngelList',
    url: 'https://angel.co/kirsten-lindsmith',
    image: '/assets/angelList.png'
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://www.instagram.com/durrsten/',
    image: '/assets/instagram.png'
  }
]

const Contact = () => (
  // <Burger right className="contactBurger burger">
  //   <ul className="contactMenu menu">
  //     <li>
  //       <a data-clipboard-text="kirstenlindsmith@gmail.com" href="mailto:kirstenlindsmith@gmail.com?Subject=Website Contact">Email</a>
  //     </li>
  //     {contactMethods.map(item => (
  //       <li key={item.id}>
  //         <a href={item.url}>
  //           {item.name}
  //         </a>
  //       </li>
  //     ))}
  //   </ul>
  // </Burger>

  <div className="center contact">
    <div className="center contact-wrapper">
      <h1>Contact</h1>
      <div id="contactBox">
        <a
          className="hoverLink"
          data-clipboard-text="kirstenlindsmith@gmail.com"
          a
          href="mailto:kirstenlindsmith@gmail.com?Subject=Website Contact"
        >
          <img src="/assets/envelope.png" />
        </a>
        {contactMethods.map(item => (
          <a key={item.id} id={item.name} href={item.url}>
            <img src={item.image} />
          </a>
        ))}

        {/* WIP: click to copy email text to clipboard */}
        {/* <div id="emailTip">Click here to copy my email address to your clipboard :)</div> */}
      </div>
    </div>
  </div>
)

export default Contact
