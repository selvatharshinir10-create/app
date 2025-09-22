import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; // For styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🍔 Food Delivery</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
