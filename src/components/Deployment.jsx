import React, { useState, useEffect } from 'react';
import { fetchLatestReleaseDownloads, formatFileSize } from '../utils/releaseDownloads';

const Deployment = () => {
  const [downloads, setDownloads] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDownloads = async () => {
      const data = await fetchLatestReleaseDownloads();
      setDownloads(data);
      setLoading(false);
    };
    loadDownloads();
  }, []);
  const deploymentOptions = [
    {
      title: "Desktop Applications",
      description: "Native desktop apps for Linux (DEB, RPM, AppImage) and Windows (EXE) with full offline capabilities.",
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
              
              <div 
                style={{ 
                  background: 'rgba(15, 23, 42, 0.5)', 
                  borderRadius: '8px', 
                  padding: '1rem',
                  textAlign: 'left',
                  marginBottom: '1rem',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  const commands = `git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard
docker-compose up -d`;
                  navigator.clipboard.writeText(commands).then(() => {
                    // Optional: Show a brief success message
                    console.log('Commands copied to clipboard');
                  });
                }}
                title="Click to copy commands"
              >
                <pre style={{ fontSize: '0.875rem', color: '#bfdbfe', overflowX: 'auto', margin: '0' }}>
                  <code>
{`# Clone the repository
git clone https://github.com/MyBitcoinFuture/dashboard.git

# Navigate to directory
cd dashboard

# Start all services
docker-compose up -d

# Access dashboard at http://localhost:3003`}
                  </code>
                </pre>
                <div style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: '#bfdbfe',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  opacity: '0.8'
                }}>
                  Click to copy
                </div>
              </div>

              <div className="text-left">
                <p className="text-gray-300 text-sm">
                  <strong>Requirements:</strong> Docker, 4GB RAM, 10GB disk space
                </p>
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
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Linux
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {downloads?.downloads.linux.deb ? (
                      <a 
                        href={downloads.downloads.linux.deb.url} 
                        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors"
                      >
                        📦 DEB Package (Ubuntu/Debian) - {formatFileSize(downloads.downloads.linux.deb.size)}
                      </a>
                    ) : (
                      <div className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded text-sm">
                        📦 DEB Package (Ubuntu/Debian) - Coming Soon
                      </div>
                    )}
                    {downloads?.downloads.linux.rpm ? (
                      <a 
                        href={downloads.downloads.linux.rpm.url} 
                        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors"
                      >
                        📦 RPM Package (Fedora/RHEL) - {formatFileSize(downloads.downloads.linux.rpm.size)}
                      </a>
                    ) : (
                      <div className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded text-sm">
                        📦 RPM Package (Fedora/RHEL) - Coming Soon
                      </div>
                    )}
                    {downloads?.downloads.linux.appimage ? (
                      <a 
                        href={downloads.downloads.linux.appimage.url} 
                        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors"
                      >
                        📦 AppImage (Universal) - {formatFileSize(downloads.downloads.linux.appimage.size)}
                      </a>
                    ) : (
                      <div className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded text-sm">
                        📦 AppImage (Universal) - Coming Soon
                      </div>
                    )}
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
                  {downloads?.downloads.windows.exe ? (
                    <a 
                      href={downloads.downloads.windows.exe.url} 
                      className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors block"
                    >
                      💻 Windows EXE Installer - {formatFileSize(downloads.downloads.windows.exe.size)}
                    </a>
                  ) : (
                    <div className="bg-gray-700/50 text-gray-400 px-3 py-2 rounded text-sm">
                      💻 Windows EXE Installer - Coming Soon
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-400 text-xs">
                  {downloads ? 
                    `Downloads from ${downloads.release.name} (${downloads.release.tag_name})` : 
                    'Downloads will be available from the latest dashboard release'
                  }
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
