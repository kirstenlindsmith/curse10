import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="container" id="home-div">
    <div id="homeContents">
      <h1 className="title">Hi,</h1>
      <img className="home-img" src="/public/assets/kirsten.png" />
      <br />
      <p>
        Hi! My name is Kirsten (pronounced "curse ten"), and I'm a frontend
        software developer.
      </p>

      <p>
        Once upon a time, I was a special education teacher and graphic designer who
        fell in love with programming. I have a natural love of detail, a deep
        appreciation for beautiful things, and an obsessive need to organize the
        world around me, so learning to code was like meeting a soulmate.
      </p>

      <p>
        I have a full stack background, including but not limited to: Node,
        Typescript, Express, PostgreSQL, React, HTML & CSS.
      </p>

      <p>
        Being both an artist and developer allows me to make sure no detail is
        lost in translation. My true love is frontend web development, so when I
        draw a mockup of an app, I’m already planning how to build it.
      </p>

      <p>
        In my non-coding time I play video games, make art, write and speak
        about autism, and read all types of fantasy.
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
