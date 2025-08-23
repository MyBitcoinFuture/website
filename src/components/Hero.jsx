import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
      <div className="container-max text-center">
        {/* Main Headline */}
        <h1 className="mb-8 animate-fade-in-up">
          <span className="text-white font-extrabold text-5xl md:text-6xl">Enterprise-Grade</span>
          <br />
          <span className="text-orange font-extrabold text-5xl md:text-6xl">Bitcoin Treasury</span>
          <br />
          <span className="text-white font-extrabold text-5xl md:text-6xl">Management</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white-80 mb-12 animate-fade-in font-medium text-xl md:text-2xl" style={{ maxWidth: '64rem', margin: '0 auto 3rem', animationDelay: '0.2s' }}>
          Professional Bitcoin treasury management with complete data sovereignty, 
          multi-wallet architecture, and instant access to comprehensive Bitcoin analytics.
        </p>

        {/* Key Benefits */}
        <div className="grid mb-16 animate-fade-in-up" style={{ maxWidth: '80rem', margin: '0 auto 4rem', animationDelay: '0.4s' }}>
          <div className="card">
            <div className="icon-container">
              <svg style={{ width: '24px', height: '24px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold text-xl">Complete Sovereignty</h3>
            <p className="text-white-60 font-medium">Your data never leaves your deployment. Full control over infrastructure and security.</p>
          </div>

          <div className="card">
            <div className="icon-container">
              <svg style={{ width: '24px', height: '24px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold text-xl">Professional Analytics</h3>
            <p className="text-white-60 font-medium">Comprehensive Bitcoin analytics and research data for informed treasury decisions.</p>
          </div>

          <div className="card">
            <div className="icon-container">
              <svg style={{ width: '24px', height: '24px' }} className="text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold text-xl">Extensible Architecture</h3>
            <p className="text-white-60 font-medium">Modular plugin ecosystem for custom functionality and enterprise integrations.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="btn-group animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/MyBitcoinFuture/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              color: '#ffffff',
              border: '1px solid #f97316',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease-in-out',
              fontSize: '1rem',
              minHeight: '48px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
            }}
          >
            View on GitHub
          </a>
          <a
            href="#deployment"
            className="btn-secondary"
          >
            Deploy Now
          </a>
          <Link
            to="/getting-started"
            className="btn-secondary"
          >
            Getting Started
          </Link>
        </div>

        {/* Demo Video */}
        <div className="mt-20 animate-fade-in" style={{ maxWidth: '96rem', margin: '5rem auto 0', animationDelay: '0.8s' }}>
          <div className="card" style={{ padding: 'var(--space-8)', position: 'relative' }}>
            <div className="text-center text-white-60">
              <div className="animate-float" style={{ marginBottom: 'var(--space-4)' }}>
                <svg style={{ width: '3rem', height: '3rem', margin: '0 auto', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white mb-3 font-bold text-2xl">Demo Video</h3>
              <p className="text-white-60 mb-6 font-medium">See MyBitcoinFuture in action</p>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(15, 23, 42, 0.3) 100%)',
                borderRadius: '8px',
                padding: 'var(--space-8)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                maxWidth: '32rem',
                margin: '0 auto'
              }}>
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  background: 'rgba(15, 23, 42, 0.5)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(249, 115, 22, 0.1)'
                }}>
                  <div className="text-center">
                    <svg style={{ width: '4rem', height: '4rem', margin: '0 auto 1rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-white-60 font-medium">Demo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
