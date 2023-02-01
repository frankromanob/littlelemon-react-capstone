import React from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import restaurantimg from '../img/order_img.webp';

function Main() {

const navega = useNavigate();


const orderNavHandler = e =>{
  navega('/order');
}
  return (
    <div>
      <div className='herodiv'>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a novelty Bistro founde in Chicago IL.
            Inspired on French cousine, intimate and with a casual atmosphere and serve simple, yet delicious food.
          </p>
        </article>
        <div>
          <img className="restaurantimg" src={restaurantimg} alt='Little Lemon' />
          <button className="orderbutton" onClick={orderNavHandler} >Order now!</button>
        </div>
      </div>
      <div>
            <Outlet />
      </div>
    </div>
  )
}

export default Main;