const Hero = () => {
  return (
    <section className="section-padding" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
      <div className="container-max text-center">
        {/* Main Headline */}
        <h1 className="mb-6 animate-fade-in-up">
          <span className="text-white">Enterprise-Grade</span>
          <br />
          <span className="text-orange">Bitcoin Treasury</span>
          <br />
          <span className="text-white">Management</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray mb-8 animate-fade-in" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', animationDelay: '0.2s' }}>
          Complete data sovereignty with multi-wallet management, 
          real-time monitoring, and analytics powered by Bitcoin Research Kit.
        </p>

        {/* Key Benefits */}
        <div className="grid mb-12 animate-fade-in-up" style={{ maxWidth: '80rem', margin: '0 auto 3rem', animationDelay: '0.4s' }}>
          <div className="card">
            <div className="icon-container">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white mb-2">Complete Sovereignty</h3>
            <p className="text-gray">Your data never leaves your deployment. Full control.</p>
          </div>

          <div className="card">
            <div className="icon-container">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white mb-2">Advanced Analytics</h3>
            <p className="text-gray">Powered by Bitcoin Research Kit for insights.</p>
          </div>

          <div className="card">
            <div className="icon-container">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white mb-2">Extensible Platform</h3>
            <p className="text-gray">Plugin ecosystem for custom functionality and integrations.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="btn-group animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/MyBitcoinFuture"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View on GitHub
          </a>
          <a
            href="#deployment"
            className="btn-secondary"
          >
            Deploy Now
          </a>
          <a
            href="/getting-started"
            className="btn-secondary"
          >
            Getting Started
          </a>
        </div>

        {/* Demo Video */}
        <div className="mt-16 animate-fade-in" style={{ maxWidth: '96rem', margin: '4rem auto 0', animationDelay: '0.8s' }}>
          <div className="card" style={{ padding: '2rem', position: 'relative' }}>
            <div className="text-center text-gray">
              <div className="animate-float" style={{ marginBottom: '1rem' }}>
                <svg style={{ width: '3rem', height: '3rem', margin: '0 auto', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Demo Video</h3>
              <p className="text-gray mb-4">See MyBitcoinFuture in action</p>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(15, 23, 42, 0.3) 100%)',
                borderRadius: '8px',
                padding: '2rem',
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
                  border: '1px solid rgba(249, 115, 22, 0.3)'
                }}>
                  <div className="text-center">
                    <svg style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem', color: '#f97316' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p className="text-sm text-gray">Video coming soon</p>
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
