import React, { useEffect, useState } from 'react';
import FoodAppLogo from './assets/FoodAppLogo.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus';

function Header() {

  const [logInOutInformation, setLogInOutInformation] = useState("Log In");

  /*
    useEffect can be used in 3 ways including:
      -no dependency array => useEffect is called on every render of the component
      -empty dependency array => useEffect is called only on initial render of the component and once only
      -dependency array with value => useEffect is called when the dependency mentioned changes
  */
  useEffect(() => {
    // console.log("useEffect Called");
  }, [logInOutInformation]);

// Never use anchor tag to route to different page as because of anchor tag, whole website gets refreshed which is not good, we only need to re-render the routed pages content that gets added so we use Link component with its to attribute and we have to import { Link } from react-router-dom for linking navigation bar's contents to routes without need to reload entire web app.

  const onlineStatus = useOnlineStatus(); //this is to provide a icon in nav bar if user is online or offline using our cutom hook we imported.


  const [menuOpen, setMenuOpen] = useState(false); //this is to show hamburger menu for smaller screens.

  return (
    <header className="border border-black shadow-md bg-[#181818] text-white p-4 flex flex-col md:flex-row justify-around items-center">
      <div className={`${menuOpen ? 'self-center mb-4' : 'ml-6'}`}>
        <img src={FoodAppLogo} alt="Food App Logo" className="w-12 h-auto rounded-full" />
      </div>
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-wheat hover:border-wheat"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <nav className={`${menuOpen ? 'flex flex-col items-center' : 'hidden'} md:flex md:flex-row md:items-center w-full md:w-auto`}>
        <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-lg">
          <li className="hover:text-wheat transition-transform transform hover:scale-105 mt-2 sm:mt-0">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-wheat transition-transform transform hover:scale-105 mt-2 sm:mt-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-wheat transition-transform transform hover:scale-105 mt-2 sm:mt-0">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-wheat transition-transform transform hover:scale-105 mt-2 sm:mt-0">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="border border-wheat rounded-full px-2 hover:text-wheat transition-transform transform hover:scale-105 mt-2 sm:mt-0">
            Internet Status: {onlineStatus === "true" ? "🟢" : "🔴"}
          </li>
          <li className="mt-2 sm:mt-0">
            <button
              className="border border-wheat rounded-full px-4 py-1 hover:bg-wheat hover:text-black hover:bg-[wheat] transition-colors"
              onClick={() => setLogInOutInformation(logInOutInformation === "Log In" ? "Log Out" : "Log In")}
            >
              {logInOutInformation}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;