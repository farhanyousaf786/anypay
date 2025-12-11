import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The simplest way to pay, accept payments, and get paid.
            </h1>
            <p className="hero-description">
              AnyPay brings together everything you need for seamless cross-border payments. 
              Send money globally, accept payments from anywhere, and manage your finances 
              all in one powerful platform built for Africa and the world.
            </p>
            <div className="hero-cta">
              <input 
                type="email" 
                placeholder="Enter your active email" 
                className="email-input"
              />
              <button className="btn-primary hero-btn">
                Join waitlist
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-header">
                <span className="time">9:41</span>
                <div className="phone-icons">
                  <span>📶</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              <div className="phone-content">
                <div className="greeting">Hello, Estime</div>
                
                <div className="wallet-card bitcoin-card">
                  <div className="card-header">
                    <span className="card-title">Bitcoin</span>
                    <span className="card-amount">$560.95</span>
                  </div>
                  <div className="card-subtitle">0.00235 BTC</div>
                  <div className="card-actions">
                    <button className="card-btn">Send</button>
                    <button className="card-btn">Request</button>
                    <button className="card-btn">Swap</button>
                  </div>
                </div>
                
                <div className="wallet-card usd-card">
                  <div className="card-header">
                    <span className="card-title">USD Wallet</span>
                    <span className="card-amount">$860.99</span>
                  </div>
                  <div className="card-actions">
                    <button className="card-btn">Add</button>
                    <button className="card-btn">Send</button>
                    <button className="card-btn">Request</button>
                  </div>
                </div>
                
                <div className="assets-section">
                  <h3 className="assets-title">Assets</h3>
                  <div className="asset-item">
                    <div className="asset-info">
                      <span className="asset-name">Canadian Dollar</span>
                      <span className="asset-amount">$126.08</span>
                    </div>
                    <div className="asset-balance">Bal: $612.60</div>
                  </div>
                  <div className="asset-item">
                    <div className="asset-info">
                      <span className="asset-name">Nigerian Naira</span>
                      <span className="asset-amount">N372.02</span>
                    </div>
                    <div className="asset-balance">Bal: N2690.05</div>
                  </div>
                </div>
                
                <div className="user-indicator">
                  <div className="user-avatars">
                    <div className="avatar">👤</div>
                    <div className="avatar">👤</div>
                    <div className="avatar">👤</div>
                  </div>
                  <span className="user-count">12k+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
