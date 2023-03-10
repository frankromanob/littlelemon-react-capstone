import React from 'react';
import foodimg from '../img/restauranfood.jpg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="Footer_outer">
            <img className="foodimg" src={foodimg} alt='Little Lemon' />
            <div className="Footer_inner_left">
                <h2>Links</h2>
                <ul className='footerlinks'>
                    <li><Link to='/littlelemon-react-capstone/'>Home</Link></li>
                    <li><Link to='/littlelemon-react-capstone/about'>About</Link></li>
                    <li><Link to='/littlelemon-react-capstone/menu'>Menu</Link></li>
                    <li><Link to='/littlelemon-react-capstone/reservations'>Reservations</Link></li>
                    <li><Link to='/littlelemon-react-capstone/order'>Order Online</Link></li>
                    <li><Link to='/littlelemon-react-capstone/login'>Login</Link></li>
                </ul>
            </div>
            <div className="Footer_inner_center">
                <h2>Contact</h2>
                <ul className='footerlinks'>
                    <li><a href='mailto:contact@littlelemon.com'>Email</a></li>
                    <li><a href='tel:+18098098091'>Tel: +1(809)809-8091</a></li>
                    <li><a href='https://maps.google.com/maps?q=New+York'>Address: New York City</a></li>
                </ul>
            </div>
            <div className="Footer_inner_right">
                <h2>Social Networks</h2>
                <ul className='footerlinks'>
                    <li><a href='http://instagram.com'>Instagram</a></li>
                    <li><a href='http://facebook.com'>Facebook</a></li>
                </ul>
            </div>
            <div className='copyright'>
                <p>© Copyright 2023 Little Lemon FR</p>
            </div>
        </div>


    )
}

export default Footer;