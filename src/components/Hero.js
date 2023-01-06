import React from 'react';
import restaurantimg from '../img/order_img.webp'

function Hero() {
return(
  <div className='herodiv'>
    <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
        </p>
    </article>
    <div>
        <img className="restaurantimg" src={restaurantimg} alt='Little Lemon' />
        <button className="orderbutton"  >Order now!</button>
    </div>
  </div>
)
}

export default Hero;