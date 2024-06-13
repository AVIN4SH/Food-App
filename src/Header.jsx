import React from 'react';
import FoodAppLogo from './assets/FoodAppLogo.jpg';

function Header() {
  return (
    <header className='header'>
        <div className="logo-container"><img src={FoodAppLogo} alt="Food App Logo" className='logo'/></div>
        <div className="nav-items">
            <ul className=''>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </header>
  );
}

export default Header;