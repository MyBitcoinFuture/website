import React from 'react';
import { BRAND_MESSAGING } from '../constants/content';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-max">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              {BRAND_MESSAGING.tagline}
            </h1>
            <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {BRAND_MESSAGING.description}
            </p>
            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Self-Hosted</span>
              </div>
              <div className="stat">
                <span className="stat-number">xpub</span>
                <span className="stat-label">Only Architecture</span>
              </div>
              <div className="stat">
                <span className="stat-number">Enterprise</span>
                <span className="stat-label">Grade Security</span>
              </div>
            </div>
            <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a href="#features" className="btn-primary focus-ring">
                View Features
              </a>
              <a href="#deployment" className="btn-secondary focus-ring">
                Deploy Now
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <img 
                src="/mybitcoinfuture_logo.png" 
                alt="MyBitcoinFuture Enterprise Treasury Management"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
