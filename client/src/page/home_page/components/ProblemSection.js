import React from 'react';
import './ProblemSection.css';

const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-content">
          <div className="problem-text">
            <span className="problem-tag">THE PROBLEM</span>
            <h2 className="problem-title">
              Cross-border payments are slow, expensive, and often out of reach.
            </h2>
            <p className="problem-description">
              Bank transfers can get flagged, mobile money doesn't travel, and crypto feels 
              disconnected from everyday use, in addition to the extra scrutiny for limited services.
            </p>
          </div>
          
          <div className="problem-visual">
            <div className="currency-converter">
              <div className="converter-header">
                <h3>Amount we'll convert</h3>
                <span className="balance">Balance: $458.07</span>
              </div>
              
              <div className="converter-input">
                <input type="text" value="$56.00" readOnly />
                <select className="currency-select">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              
              <div className="converter-toggle">
                <button className="toggle-btn">
                  <span>⇅</span>
                </button>
              </div>
              
              <div className="converter-input">
                <input type="text" value="₦150,000.00" readOnly />
                <select className="currency-select">
                  <option value="NGN">NGN</option>
                  <option value="GHS">GHS</option>
                  <option value="KES">KES</option>
                </select>
              </div>
              
              <div className="converter-footer">
                <h4>Amount you'll receive</h4>
              </div>
            </div>
            
            <div className="global-connections">
              <div className="country-flag china">🇨🇳</div>
              <div className="connection-line"></div>
              <div className="country-flag canada">🇨🇦</div>
              <div className="connection-line"></div>
              <div className="country-flag bangladesh">🇧🇩</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
