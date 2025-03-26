// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // If you want separate CSS

function Header() {
  return (
    <header className="header">
      <div className="container nav-container">
        <div className="logo">iHEATRISK</div>
        <nav>
          <ul>
            {/* Example links to Home and About */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* Add more nav links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;