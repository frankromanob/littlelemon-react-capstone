import React from 'react';
import logoimg from '../img/Logo.svg';

function Nav() {
return(
    <nav>
        <img class="navlogo" src={logoimg} alt='Little Lemon' />
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>Reservations</a></li>
            <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
    </nav>

)
}

export default Nav;