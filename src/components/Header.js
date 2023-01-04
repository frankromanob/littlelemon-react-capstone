import React from 'react';
import logoimg from '../img/Logo.svg';

function Header() {
return(
  <div>
    <img src={logoimg} alt='Little Lemon' />
    <h1>Little Lemon</h1>
  </div>
)
}

export default Header;