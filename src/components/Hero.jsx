import React, { useState, useEffect } from 'react';
import { BRAND_MESSAGING } from '../constants/content';
import Container from './Container';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 min-h-screen flex items-center relative overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-600/10 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] relative z-10">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left' : ''}`}>

            {/* Main Headline */}
            <h1 className="hero-title mb-6">
              {BRAND_MESSAGING.tagline}
            </h1>

            {/* Description */}
            <p className="text-slate-300 mb-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
              {BRAND_MESSAGING.description}
            </p>


            {/* Enhanced CTAs */}
            <div className="flex gap-4 flex-wrap">
              <a href="#deployment" className="btn-primary cta-enhanced">
                <span className="relative z-10">Deploy in 5 Minutes</span>
              </a>
              <a href="#features" className="btn-secondary cta-enhanced">
                <span className="relative z-10">See How It Works</span>
              </a>
            </div>

          </div>

          {/* Right Column - Interactive Demo */}
          <div className={`flex justify-center items-center ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl blur-3xl pulse-glow"></div>
              
              {/* Main demo card */}
              <div className="floating-card bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl min-w-[400px] min-h-[300px]">
                <div className="text-center mb-6">
                  <div className="text-primary-400 text-2xl font-bold mb-2 security-shield">
                    Why Choose MyBitcoinFuture?
                  </div>
                  <div className="text-slate-400 text-sm">The only Bitcoin treasury platform with institutional-grade analytics</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg interactive-hover">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">Bitcoin Research Kit Integration</div>
                      <div className="text-slate-400 text-xs">Access comprehensive Bitcoin analytics directly from your node</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg interactive-hover">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">One-Click Marketplace Deployment</div>
                      <div className="text-slate-400 text-xs">Deploy on Start9, Umbrel, or Docker in under 5 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg interactive-hover">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">Professional Bitcoin Treasury Management</div>
                      <div className="text-slate-400 text-xs">Multi-sig, cost basis accounting, and portfolio analytics built-in</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Bitcoin icon */}
              <div className="absolute -top-4 -right-4 text-4xl bitcoin-pulse">
                ₿
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
