const Deployment = () => {
  const deploymentOptions = [
    {
      title: "Desktop Applications",
      description: "Native desktop apps for Linux (DEB, RPM, AppImage), Windows (EXE), and macOS with full offline capabilities.",
      status: "Available Now",
      statusColor: "#10b981",
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Cross-platform support", "Offline operation", "Native performance", "Easy installation"]
    },
    {
      title: "Docker Containers",
      description: "Deploy with Docker containers for server environments. Frontend on port 3003, backend on 3100, BRK on 3110.",
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
      title: "Marketplace Deployment",
      description: "One-click deployment through Start9 and Umbrel marketplaces. Perfect for Bitcoin sovereignty advocates.",
      status: "Coming Soon",
      statusColor: "#f59e0b",
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ["One-click install", "Community marketplace", "Automatic updates", "Bitcoin sovereignty"]
    }
  ]

  return (
    <section id="deployment" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Multi-Platform Deployment Options
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}>
            Deploy MyBitcoinFuture on any platform - from desktop applications to server environments. 
            Choose the deployment method that fits your infrastructure and security requirements.
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

        {/* Quick Start and Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginTop: '4rem' }}>
          {/* Docker Quick Start */}
          <div className="card" style={{ padding: '2rem' }}>
            <div className="text-center">
              <h3 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Quick Start with Docker
              </h3>
              <p className="text-gray mb-6">
                Get up and running with our multi-container Docker setup in minutes.
              </p>
              
              {/* Prerequisites */}
              <div className="text-left mb-6">
                <h4 className="text-white font-semibold mb-3">Prerequisites:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Docker and Docker Compose installed</li>
                  <li>• 4GB+ RAM available</li>
                  <li>• 10GB+ free disk space</li>
                  <li>• Ports 3003, 3100, 3110 available</li>
                </ul>
              </div>

              <div 
                style={{ 
                  background: 'rgba(15, 23, 42, 0.5)', 
                  borderRadius: '8px', 
                  padding: '1rem',
                  textAlign: 'left',
                  marginBottom: '1rem'
                }}
              >
                <pre style={{ fontSize: '0.875rem', color: '#bfdbfe', overflowX: 'auto', margin: '0' }}>
                  <code>
{`# Clone the repository
git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard

# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f`}
                  </code>
                </pre>
              </div>

              <div className="text-left">
                <h4 className="text-white font-semibold mb-2">Access Points:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• <strong>Dashboard:</strong> http://localhost:3003</li>
                  <li>• <strong>API:</strong> http://localhost:3100</li>
                  <li>• <strong>BRK Analytics:</strong> http://localhost:3110</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Official Downloads */}
          <div className="card" style={{ padding: '2rem' }}>
            <div className="text-center">
              <h3 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Official Downloads
              </h3>
              <p className="text-gray mb-6">
                Download native desktop applications for your platform.
              </p>
              
              <div className="space-y-4">
                {/* Linux Downloads */}
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.504 0C5.643 0 0 5.643 0 12.504s5.643 12.504 12.504 12.504S25.008 19.365 25.008 12.504 19.365 0 12.504 0zm0 23.04c-5.815 0-10.536-4.721-10.536-10.536S6.689 1.968 12.504 1.968s10.536 4.721 10.536 10.536-4.721 10.536-10.536 10.536z"/>
                    </svg>
                    Linux
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors">
                      📦 DEB Package (Ubuntu/Debian)
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors">
                      📦 RPM Package (Fedora/RHEL)
                    </a>
                    <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors">
                      📦 AppImage (Universal)
                    </a>
                  </div>
                </div>

                {/* Windows Download */}
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91v-6.84l10 .15z"/>
                    </svg>
                    Windows
                  </h4>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors block">
                    💻 Windows EXE Installer
                  </a>
                </div>

                {/* macOS Download */}
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    macOS
                  </h4>
                  <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors block">
                    🍎 macOS Application
                  </a>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-400 text-xs">
                  Downloads are automatically updated from the latest dashboard release
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deployment
