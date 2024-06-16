import React, { useEffect, useState } from 'react';
import FoodAppLogo from './assets/FoodAppLogo.jpg';
import { Link } from 'react-router-dom';

function Header() {

  const [logInOutInformation, setLogInOutInformation] = useState("Log In");

  /*
    useEffect can be used in 3 ways including:
      -no dependency array => useEffect is called on every render of the component
      -empty dependency array => useEffect is called only on initial render of the component and once only
      -dependency array with value => useEffect is called when the dependency mentioned changes
  */
  useEffect(() => {
    console.log("useEffect Called");
  }, [logInOutInformation]);

// Never use anchor tag to route to different page as because of anchor tag, whole website gets refreshed which is not good, we only need to re-render the routed pages content that gets added so we use Link component with its to attribute and we have to import { Link } from react-router-dom for linking navigation bar's contents to routes without need to reload entire web app.

  return (
    <header className='header'>
        <div className="logo-container"><img src={FoodAppLogo} alt="Food App Logo" className='logo'/></div>
        <div className="nav-items">
            <ul className=''>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/about"> About Us </Link> </li>
                <li> <Link to="/contact"> Contact Us </Link> </li>
                <li> <Link to="/cart"> Cart </Link> </li>
                <li><button className='loginInOutBtn hover:bg-[wheat] hover:text-black ' onClick={() => {logInOutInformation === "Log In" ? setLogInOutInformation("Log Out") : setLogInOutInformation("Log In");}}>{logInOutInformation}</button></li>
            </ul>
        </div>
    </header>
  );
}

export default Header;