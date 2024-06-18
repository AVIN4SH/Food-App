import React from 'react';

function Footer() {

  return (
    <footer className="bg-[#181818] text-white text-center p-4 flex flex-col sm:flex-row items-center justify-around space-y-2 sm:space-y-0">
    <p className="hover:cursor-pointer hover:text-lg transition duration-500">
      &copy; {new Date().getFullYear()}
    </p>
    <p className="hover:cursor-pointer hover:text-lg transition duration-500">
      Order Food now from our platform for Authentic Taste & Experience
    </p>
    <p className="hover:cursor-pointer hover:text-lg transition duration-500">
      Developed in React JS
    </p>
  </footer>
  );

}

export default Footer;