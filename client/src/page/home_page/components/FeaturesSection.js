import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: '💳',
      title: 'Online Payments',
      description: 'Accept payments from customers worldwide with multiple payment methods.'
    },
    {
      icon: '🌍',
      title: 'Borderless Money',
      description: 'Send and receive money across borders without restrictions.'
    },
    {
      icon: '⚡',
      title: 'Instant Creation',
      description: 'Set up your account and start transacting in minutes, not days.'
    },
    {
      icon: '🚀',
      title: 'Instant Withdrawals',
      description: 'Get your money when you need it with fast withdrawal options.'
    },
    {
      icon: '🚫',
      title: 'No Cashouts',
      description: 'Keep your money digital and avoid unnecessary cash handling.'
    },
    {
      icon: '🎯',
      title: 'All-in-one Platform',
      description: 'Manage all your financial needs from a single, unified platform.'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">AnyPay brings it all together.</h2>
          <p className="features-subtitle">
            Everything you need for modern cross-border payments in one powerful platform
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
