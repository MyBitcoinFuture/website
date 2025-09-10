import React from 'react';
import { BRAND_MESSAGING } from '../constants/content';

const Hero = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in-up">
            <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {BRAND_MESSAGING.tagline}
            </h1>
            <p className="text-gray-400 mb-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
              {BRAND_MESSAGING.description}
            </p>
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-primary-500 font-bold text-2xl mb-1">xpub-Only</div>
                <div className="text-gray-400 text-sm">Architecture</div>
              </div>
              <div className="text-center">
                <div className="text-primary-500 font-bold text-2xl mb-1">Self-Hosted</div>
                <div className="text-gray-400 text-sm">Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-primary-500 font-bold text-2xl mb-1">No Trust</div>
                <div className="text-gray-400 text-sm">Required</div>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="#deployment" className="btn-primary">
                Deploy in 5 Minutes
              </a>
              <a href="#features" className="btn-secondary">
                See How It Works
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl blur-3xl animate-pulse"></div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl min-w-[400px] min-h-[300px]">
                <div className="text-center mb-6">
                  <div className="text-primary-400 text-2xl font-bold mb-2">Why Choose MyBitcoinFuture?</div>
                  <div className="text-gray-400 text-sm">The only platform that truly respects your sovereignty</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">Your Private Keys Never Leave Your Device</div>
                      <div className="text-gray-400 text-xs">xpub-only architecture means we can't access your Bitcoin</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">Deploy on Your Own Infrastructure</div>
                      <div className="text-gray-400 text-xs">No cloud dependencies, no third-party servers</div>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-green-400 text-xl mr-3">✓</span>
                    <div>
                      <div className="text-white font-bold text-sm">Enterprise Features Without the Risk</div>
                      <div className="text-gray-400 text-xs">Multi-sig, analytics, and governance - all self-hosted</div>
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

export default Hero;
