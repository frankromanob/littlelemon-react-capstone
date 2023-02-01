import React from 'react';
import marioandadrian from "../img/Mario and Adrian A.jpg"
import restimg from "../img/restaurant.jpg"

function About() {
return(
  <div className='caja'>
        <h2>About Little Lemon</h2>
    <article>
        <h2>Little Lemon, LLC is a personal chef company based in Chicago.</h2>
    </article>
    <div className="caja-about">
        <div className="img-green">
          <img src={marioandadrian} className="card-img-2" alt="Mario and Adrian" />
          <p>Mario and Adrian share a vision of good food and happy people</p>
        </div>
        <div className="img-green">
          <img src={restimg} className="card-img-2" alt="Our restaurant" />
          <p>Our tables are always ready for you</p>
        </div>
    </div>
  </div>
)
}

export default About;