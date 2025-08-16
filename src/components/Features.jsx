const Features = () => {
  const features = [
    {
      title: "Multi-Wallet Management",
      description: "Track multiple xpub-based wallets with real-time balance monitoring and transaction history.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Real-Time Monitoring",
      description: "Live transaction updates and balance tracking with mempool.space integration for private transaction monitoring.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Advanced Analytics",
      description: "Portfolio performance, risk analysis, and cost basis tracking powered by Bitcoin Research Kit.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Compliance Reporting",
      description: "Tax reporting, audit trails, and compliance features for treasury operations.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      description: "Admin authentication, audit logging, and secure storage with security features.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Plugin Ecosystem",
      description: "Extensible architecture for custom functionality and integrations through the plugin marketplace.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Treasury Management Features
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Multi-wallet management, analytics, and compliance reporting 
            for Bitcoin treasury operations.
          </p>
        </div>

        <div className="grid" style={{ gap: '2rem' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
            >
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                {feature.title}
              </h3>
              <p className="text-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Stack */}
        <div className="text-center" style={{ marginTop: '4rem' }}>
          <h3 className="text-white mb-8" style={{ fontSize: '2rem', fontWeight: '700' }}>
            Technology Stack
          </h3>
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '64rem',
            margin: '0 auto'
          }}>
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(30, 41, 59, 0.3) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <div className="text-orange" style={{ fontWeight: '600', fontSize: '1.125rem' }}>Node.js</div>
              <div className="text-gray" style={{ fontSize: '0.875rem' }}>Express API</div>
            </div>
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(30, 41, 59, 0.3) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <div className="text-orange" style={{ fontWeight: '600', fontSize: '1.125rem' }}>React</div>
              <div className="text-gray" style={{ fontSize: '0.875rem' }}>Dashboard</div>
            </div>
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(30, 41, 59, 0.3) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <div className="text-orange" style={{ fontWeight: '600', fontSize: '1.125rem' }}>Bitcoin Core</div>
              <div className="text-gray" style={{ fontSize: '0.875rem' }}>RPC Integration</div>
            </div>
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(30, 41, 59, 0.3) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <div className="text-orange" style={{ fontWeight: '600', fontSize: '1.125rem' }}>BRK</div>
              <div className="text-gray" style={{ fontSize: '0.875rem' }}>Analytics Engine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
