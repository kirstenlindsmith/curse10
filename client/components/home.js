import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="container" id="home-div">
    <div id="homeContents">
      <h1 className="title">Hi,</h1>
      <img className="home-img" src="/assets/kirsten.png" />
      <br />
      <p>
        I'm Kirsten (pronounced "curse ten"), a full stack software engineer and
        developer.
      </p>

      <p>
        I'm a graphic designer who fell in love with code. I have a natural love
        of detail and systemizing, with an appreciation for creating
        maintainable code, and beautiful UX.
      </p>

      <p>
        I specialize in full-stack app development, including but not limited
        to: Node.js, React, Redux, Express, PostgreSQL, HTML & CSS.
      </p>

      <p>
        Being both a graphic designer and developer allows me to make sure no
        detail is lost in translation. When I draw a mockup of an app, I’m
        already planning how to build it.
      </p>

      <p>
        In my spare time I enjoy both making and playing video games, making
        art, writing about autism, and reading all types of fantasy.
      </p>

      <p>
        Meatspace me can be found in New York City. Digital me can be found{' '}
        <Link to="/contact">here</Link>.
      </p>

      <h3 className="right title">- Kirsten Lindsmith</h3>
    </div>
  </div>
)

export default Home
