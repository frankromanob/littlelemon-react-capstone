import React from 'react';

function About() {
return(
  <div className='caja'>
        <h2>About Little Lemon</h2>
    <article>
        <h2>Little Lemon, LLC is a personal chef company based in Chicago.</h2>
    </article>
    <div className="caja-about">
        <div className="img-green">
          <img src="/img/Mario and Adrian A.jpg" className="card-img-2" alt="Mario and Adrian" />
          <p>Mario and Adrian share a vision of good food and happy people</p>
        </div>
        <div className="img-green">
          <img src="/img/restaurant.jpg" className="card-img-2" alt="Our restaurant" />
          <p>Our tables are always ready for you</p>
        </div>
    </div>
  </div>
)
}

export default About;