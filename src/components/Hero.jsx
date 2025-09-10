import React from 'react';
import { BRAND_MESSAGING } from '../constants/content';

const Hero = () => {
  return (
    <section className="section-padding" style={{ 
      background: 'var(--bg-primary)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-max">
        <div className="grid hero-grid" style={{ 
          gap: 'var(--space-3xl)',
          alignItems: 'center',
          minHeight: '80vh'
        }}>
          <div className="animate-fade-in-up">
            <h1 className="text-white mb-6" style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              {BRAND_MESSAGING.tagline}
            </h1>
            <p className="text-gray mb-8 animate-fade-in-up" style={{ 
              animationDelay: '0.2s',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: '1.6',
              maxWidth: '48rem'
            }}>
              {BRAND_MESSAGING.description}
            </p>
            <div className="flex gap-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-orange font-bold text-2xl mb-1">100%</div>
                <div className="text-gray text-sm">Self-Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-orange font-bold text-2xl mb-1">xpub</div>
                <div className="text-gray text-sm">Only Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-orange font-bold text-2xl mb-1">Enterprise</div>
                <div className="text-gray text-sm">Grade Security</div>
              </div>
            </div>
            <div className="btn-group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a href="#features" className="btn-primary focus-ring">
                View Features
              </a>
              <a href="#deployment" className="btn-secondary focus-ring">
                Deploy Now
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/mybitcoinfuture_logo.png" 
                alt="MyBitcoinFuture Enterprise Treasury Management"
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  maxHeight: '400px',
                  filter: 'drop-shadow(0 20px 40px rgba(249, 115, 22, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
