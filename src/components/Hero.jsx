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
                <div className="text-orange font-bold text-2xl mb-1">Complete</div>
                <div className="text-gray text-sm">Control</div>
              </div>
              <div className="text-center">
                <div className="text-orange font-bold text-2xl mb-1">Maximum</div>
                <div className="text-gray text-sm">Security</div>
              </div>
              <div className="text-center">
                <div className="text-orange font-bold text-2xl mb-1">Zero</div>
                <div className="text-gray text-sm">Compromises</div>
              </div>
            </div>
            <div className="btn-group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a href="#features" className="btn-primary focus-ring">
                Get Started
              </a>
              <a href="#deployment" className="btn-secondary focus-ring">
                View Demo
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl" style={{ minWidth: '400px', minHeight: '300px' }}>
                <div className="text-center mb-6">
                  <div className="text-orange-400 text-2xl font-bold mb-2">Dashboard Preview</div>
                  <div className="text-gray-400 text-sm">Enterprise Bitcoin Treasury Management</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-white text-sm">Total Balance</span>
                    <span className="text-orange-400 font-bold">₿ 1,247.89</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-white text-sm">Active Wallets</span>
                    <span className="text-green-400 font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="text-white text-sm">Security Status</span>
                    <span className="text-green-400 font-bold">✓ Secure</span>
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

export default Hero;
