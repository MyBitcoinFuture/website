import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section-padding" style={{ 
      paddingTop: 'clamp(4rem, 12vw, 8rem)', 
      paddingBottom: 'clamp(3rem, 8vw, 6rem)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container-max text-center">
        {/* Main Headline */}
        <h1 className="mb-8 animate-fade-in-up" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="text-white font-extrabold" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Enterprise-Grade
          </span>
          <br />
          <span className="text-orange font-extrabold" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Bitcoin Treasury
          </span>
          <br />
          <span className="text-white font-extrabold" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Management
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white-80 mb-12 animate-fade-in font-medium" style={{ 
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
          maxWidth: 'min(64rem, 90vw)',
          margin: '0 auto clamp(2rem, 4vw, 3rem)',
          animationDelay: '0.2s',
          lineHeight: '1.5'
        }}>
          Professional Bitcoin treasury management with complete data sovereignty, 
          multi-wallet architecture, and instant access to comprehensive Bitcoin analytics.
        </p>

        {/* Key Benefits */}
        <div className="grid mb-16 animate-fade-in-up" style={{ 
          maxWidth: 'min(80rem, 95vw)',
          margin: '0 auto clamp(3rem, 6vw, 4rem)',
          animationDelay: '0.4s',
          gap: 'clamp(1.5rem, 3vw, 2rem)'
        }}>
          <div className="card" style={{ 
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div className="icon-container" style={{ 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)'
            }}>
              <svg style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} className="text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
              Complete Sovereignty
            </h3>
            <p className="text-white-60 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              Your data never leaves your deployment. Full control over infrastructure and security.
            </p>
          </div>

          <div className="card" style={{ 
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div className="icon-container" style={{ 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)'
            }}>
              <svg style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} className="text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
              Professional Analytics
            </h3>
            <p className="text-white-60 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              Comprehensive Bitcoin analytics and research data for informed treasury decisions.
            </p>
          </div>

          <div className="card" style={{ 
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div className="icon-container" style={{ 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              borderRadius: '50%',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.2)'
            }}>
              <svg style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)' }} className="text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white mb-3 font-bold" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
              Extensible Architecture
            </h3>
            <p className="text-white-60 font-medium" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>
              Modular plugin ecosystem for custom functionality and enterprise integrations.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="btn-group animate-fade-in" style={{ 
          animationDelay: '0.6s',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a
            href="https://github.com/MyBitcoinFuture/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              minWidth: 'clamp(140px, 25vw, 180px)',
              minHeight: 'clamp(48px, 8vw, 56px)'
            }}
          >
            View on GitHub
          </a>
          <a
            href="#deployment"
            className="btn-secondary"
            style={{
              minWidth: 'clamp(140px, 25vw, 180px)',
              minHeight: 'clamp(48px, 8vw, 56px)'
            }}
          >
            Deploy Now
          </a>
          <Link
            to="/getting-started"
            className="btn-secondary"
            style={{
              minWidth: 'clamp(140px, 25vw, 180px)',
              minHeight: 'clamp(48px, 8vw, 56px)'
            }}
          >
            Getting Started
          </Link>
        </div>

        {/* Demo Video */}
        <div className="mt-20 animate-fade-in" style={{ 
          maxWidth: 'min(96rem, 95vw)',
          margin: 'clamp(4rem, 8vw, 5rem) auto 0',
          animationDelay: '0.8s'
        }}>
          <div className="card" style={{ 
            padding: 'clamp(2rem, 4vw, 3rem)',
            position: 'relative'
          }}>
            <div className="text-center text-white-60">
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
                Demo video coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
