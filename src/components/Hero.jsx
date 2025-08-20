import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ paddingTop: 'var(--space-24)' }}
          >
            <span className="text-gradient">MBFBTC</span>
            <br />
            <span className="text-white">Bitcoin Treasury Management</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ marginBottom: 'var(--space-12)' }}
          >
            A comprehensive <strong>hybrid monorepo</strong> with modular architecture for enterprise-grade Bitcoin treasury management. 
            Multi-wallet tracking, real-time analytics, and complete data sovereignty.
          </p>
          
          {/* Key Features Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            style={{ marginBottom: 'var(--space-16)' }}
          >
            <div className="card text-center">
              <div className="icon-container mx-auto">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modular Architecture</h3>
              <p className="text-slate-400">
                API, Web, CLI, Desktop, and Shared modules in a sophisticated monorepo structure
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-container mx-auto">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plugin Ecosystem</h3>
              <p className="text-slate-400">
                Extensible plugin system with IFTTT integration, accounting, and compliance modules
              </p>
            </div>
            
            <div className="card text-center">
              <div className="icon-container mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">BRK Integration</h3>
              <p className="text-slate-400">
                Advanced analytics powered by Bitcoin Research Kit with real-time monitoring
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/getting-started" className="btn-primary text-lg px-8 py-4">
              Get Started
            </Link>
            <a 
              href="https://github.com/MyBitcoinFuture/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              View on GitHub
            </a>
          </div>
          
          {/* Repository Structure Preview */}
          <div 
            className="mt-20 p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700"
            style={{ marginTop: 'var(--space-20)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Repository Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">📦 Core Modules</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• <code className="text-orange-300">api/</code> - Express.js API server</li>
                  <li>• <code className="text-orange-300">web/</code> - React web interface</li>
                  <li>• <code className="text-orange-300">cli/</code> - Command-line tools</li>
                  <li>• <code className="text-orange-300">desktop/</code> - Electron app</li>
                  <li>• <code className="text-orange-300">shared/</code> - Shared utilities</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">🔌 Related Repos</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>• <code className="text-orange-300">plugins/</code> - Plugin ecosystem</li>
                  <li>• <code className="text-orange-300">core/</code> - Infrastructure</li>
                  <li>• <code className="text-orange-300">monitoring/</code> - Observability</li>
                  <li>• <code className="text-orange-300">platform-manifests/</code> - K8s configs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-orange-400 font-semibold mb-3">🚀 Quick Start</h4>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <code className="text-green-400 text-sm">
                    git clone https://github.com/MyBitcoinFuture/dashboard.git<br/>
                    cd dashboard<br/>
                    npm run install:all<br/>
                    npm run dev
                  </code>
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
