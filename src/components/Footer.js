import React from 'react';
import foodimg from '../img/restauranfood.jpg'

function Footer() {
return(
  <div class="Footer_outer">
     <img class="foodimg" src={foodimg} alt='Little Lemon' />
    <div class="Footer_inner_left">
        <h2>Main</h2>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Menu</a></li>
        <li><a href='#'>Reservations</a></li>
        <li><a href='#'>Order Online</a></li>
        <li><a href='#'>Login</a></li>
    </div>
    <div class="Footer_inner_center">
        <h2>Contact</h2>
        <li><a href='mailto:contact@littlelemon.com'>Email</a></li>
        <li><a href='tel:+18098098091'>Tel: +1(809)809-8091</a></li>
        <li><a href='https://maps.google.com/maps?q=New+York'>Address: New York City</a></li>
    </div>
    <div class="Footer_inner_right">
        <h2>Social Networks</h2>
        <li><a href='http://instagram.com'>Instagram</a></li>
        <li><a href='http://facebook.com'>Facebook</a></li>
    </div>
  </div>
)
}

export default Footer;