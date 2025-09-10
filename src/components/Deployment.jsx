const Deployment = () => {
  const deploymentOptions = [
    {
      title: "Docker",
      description: "Deploy with Docker containers. Frontend on port 3003, backend on 3100, BRK on 3110.",
      status: "Available Now",
      statusColor: "#10b981",
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.186.185v1.888c0 .102.083.186.186.186m0 2.716h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.186.186v1.887c0 .102.083.185.186.185m-2.93 0h2.12a.186.186 0 00.185-.185V6.29a.186.186 0 00-.186-.186H8.1a.186.186 0 00-.185.186v1.887c0 .102.082.185.185.185m0 2.715h2.12a.186.186 0 00.185-.186V9.006a.186.186 0 00-.186-.186H8.1a.186.186 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.954 0h2.119a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186H5.146a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m5.883 2.715h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.93 0h2.12a.186.186 0 00.185-.185v-1.887a.186.186 0 00-.186-.186H8.1a.186.186 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.954 0h2.119a.186.186 0 00.186-.185v-1.887a.186.186 0 00-.186-.186H5.146a.186.186 0 00-.185.186v1.887c0 .102.083.185.185.185"/>
        </svg>
      ),
      features: ["Multi-container setup", "Production ready", "Easy scaling", "Complete isolation"]
    },
    {
      title: "Start9",
      description: "One-click deployment through the Start9 marketplace. Perfect for Bitcoin sovereignty advocates.",
      status: "Planned",
      statusColor: "#f59e0b",
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ["One-click install", "Community marketplace", "Automatic updates", "Bitcoin sovereignty"]
    },
    {
      title: "Umbrel",
      description: "Deploy on Umbrel for integration with your Bitcoin node and broader self-hosting community.",
      status: "Planned",
      statusColor: "#f59e0b",
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      features: ["Official app store", "Bitcoin node integration", "App ecosystem", "Self-hosting"]
    }
  ]

  return (
    <section id="deployment" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Multi-Platform Deployment Strategy
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Comprehensive deployment options for sovereignty advocates, businesses, and enterprises. 
            From self-hosted Bitcoin infrastructure to cloud VPS and merchant integrations.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className="card flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary-500">
                  {option.icon}
                </div>
                <span 
                  className="text-sm font-semibold"
                  style={{ color: option.statusColor }}
                >
                  {option.status}
                </span>
              </div>
              
              <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                {option.title}
              </h3>
              
              <p className="text-gray mb-6" style={{ flex: '1' }}>
                {option.description}
              </p>
              
              <ul style={{ marginBottom: '1.5rem' }}>
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray mb-2">
                    <svg 
                      style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: '#f97316' }} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {option.title === "Docker" && (
                <div style={{ marginTop: 'auto' }}>
                  <a
                    href="https://github.com/MyBitcoinFuture/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: '#ffffff',
                      border: '1px solid #f97316',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.375rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-block',
                      transition: 'all 0.2s ease-in-out',
                      fontSize: '1rem',
                      minHeight: '48px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
                    }}
                  >
                    Deploy with Docker
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Start */}
        <div className="card" style={{ marginTop: '4rem', padding: '2rem' }}>
          <div className="text-center">
            <h3 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
              Quick Start with Docker
            </h3>
            <p className="text-gray mb-6">
              Get up and running with our multi-container Docker setup.
            </p>
            <div 
              style={{ 
                background: 'rgba(15, 23, 42, 0.5)', 
                borderRadius: '8px', 
                padding: '1rem',
                textAlign: 'left',
                maxWidth: '32rem',
                margin: '0 auto'
              }}
            >
              <pre style={{ fontSize: '0.875rem', color: '#bfdbfe', overflowX: 'auto', margin: '0' }}>
                <code>
{`# Pull and run MyBitcoinFuture
docker run -d \\
  --name mybitcoinfuture \\
  -p 3003:3003 \\
  -v /path/to/data:/app/data \\
  mybitcoinfuture/treasury-platform

# Access the dashboard
open http://localhost:3003`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deployment
