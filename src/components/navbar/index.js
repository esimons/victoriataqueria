import React from 'react';
import { Link } from "react-router-dom";

import './_index.css';

const Navbar = ({className}) => {
  return (
    <ul className="Navbar">
      <li className="Navbar_item">
        <Link className="Navbar_link" to="/">Home</Link>
      </li>
      <li className="Navbar_item">
        <Link className="Navbar_link" to="about">About</Link>
      </li>
      <li className="Navbar_item">
        <Link className="Navbar_link" to="menu">Menu</Link>
      </li>
      <li className="Navbar_item">
        <Link className="Navbar_link" to="locations">Locations</Link>
      </li>
    </ul>
  )
};

export default Navbar;