import React from 'react';
import './MobileShowcase.css';

const MobileShowcase = () => {
  return (
    <section className="mobile-showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-tag">BUILT FOR AFRICA</span>
            <h2 className="showcase-title">
              Built for how Africans really live, work, and earn.
            </h2>
            <div className="showcase-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Fast, free & secure</h4>
                  <p>Lightning-fast transactions with bank-level security</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Simplified Startup</h4>
                  <p>Get started in minutes with minimal documentation</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <div>
                  <h4>Instant Payouts</h4>
                  <p>Receive your money immediately without delays</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🌍</span>
                <div>
                  <h4>Local & Global</h4>
                  <p>Connect local markets to global opportunities</p>
                </div>
              </div>
            </div>
            <p className="showcase-motto">
              No middlemen, No restrictions. Just freedom to transact.
            </p>
          </div>
          
          <div className="showcase-visual">
            <div className="phone-mockup-large">
              <div className="phone-header">
                <span className="time">9:41</span>
                <div className="phone-icons">
                  <span>📶</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              <div className="phone-content">
                <div className="app-header">
                  <h3>AnyPay</h3>
                  <div className="user-info">
                    <span>Hello, Estime</span>
                    <div className="balance-display">
                      <span className="balance-label">Total Balance</span>
                      <span className="balance-amount">$1,421.94</span>
                    </div>
                  </div>
                </div>
                
                <div className="quick-actions">
                  <button className="action-btn send">Send</button>
                  <button className="action-btn receive">Receive</button>
                  <button className="action-btn swap">Swap</button>
                </div>
                
                <div className="transactions">
                  <h4>Recent Transactions</h4>
                  <div className="transaction-list">
                    <div className="transaction-item">
                      <div className="transaction-icon sent">📤</div>
                      <div className="transaction-details">
                        <span className="transaction-title">Sent to John</span>
                        <span className="transaction-date">Today, 2:30 PM</span>
                      </div>
                      <span className="transaction-amount negative">-$50.00</span>
                    </div>
                    <div className="transaction-item">
                      <div className="transaction-icon received">📥</div>
                      <div className="transaction-details">
                        <span className="transaction-title">Received from Sarah</span>
                        <span className="transaction-date">Yesterday, 5:15 PM</span>
                      </div>
                      <span className="transaction-amount positive">+$120.00</span>
                    </div>
                    <div className="transaction-item">
                      <div className="transaction-icon swap">🔄</div>
                      <div className="transaction-details">
                        <span className="transaction-title">BTC to USD</span>
                        <span className="transaction-date">Dec 8, 3:45 PM</span>
                      </div>
                      <span className="transaction-amount neutral">$560.95</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
