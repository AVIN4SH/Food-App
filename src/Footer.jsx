import React from 'react';

function Footer() {

  return (
    <footer className='footer'>
        <p className='copyright'> &copy; Copyright {new Date().getFullYear()} </p>
        <p className='orderAdvertisement'>Order Food now from our platform for Authentic Taste & Experience</p>
        <p className='developnedDetail'>Developed in React JS </p>
    </footer>
  );

}

export default Footer;