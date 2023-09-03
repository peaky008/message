import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
const Navbar = () => {
  return (
    <nav className='ncontainer'>
        <h1 className='nleft'>Dictionary App</h1>
      <ul className='nright'>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
