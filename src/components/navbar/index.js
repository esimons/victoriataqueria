import React from 'react';
import { Link } from "react-router-dom";

import './_index.css';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="menu">Menu</Link>
      </li>
      <li>
        <Link to="locations">Locations</Link>
      </li>
    </ul>
  )
};

export default Navbar;