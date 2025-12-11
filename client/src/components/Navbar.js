import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} alt="AnyPay" className="logo-icon" />
          </div>
          
          <div className="nav-links">
            <button className="nav-link">Home</button>
            <button className="nav-link">How it works</button>
            <button className="nav-link">Vision</button>
            <button className="nav-link">Contact</button>
          </div>
          
          <button className="nav-cta">
            Join waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
