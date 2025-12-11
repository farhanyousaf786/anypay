import React from 'react';
import Navbar from '../../components/Navbar';
import './HomePage.css';
import phoneImage from '../../assets/home-center-phone-img.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                The simplest way to pay, accept payments, and <span className="highlight">get paid.</span>
              </h1>
              <p className="hero-description">
                Whether you're a business or an individual, AnyPay helps you send money, accept payments, 
                create invoices, and manage funds — all in one place.
              </p>
            </div>
            <div className="hero-cta">
              <input 
                type="email" 
                placeholder="Enter your active email" 
                className="email-input"
              />
              <button className="join-btn">Join waitlist</button>
            </div>
            <div className="hero-image">
              <img src={phoneImage} alt="AnyPay App" className="phone-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
