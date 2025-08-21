import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CodeBlock from './CodeBlock';
import Breadcrumbs from './ui/Breadcrumbs';

const QuickStart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'Quick Start' }]} />
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">Quick Start Guide</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Essential commands and endpoints to get you up and running with MyBitcoinFuture in minutes.
              </p>
            </div>

            {/* Getting Started */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">🚀 Getting Started</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Start the System</h3>
                  <div className="space-y-3">
                    <CodeBlock 
                      language="bash"
                      code={`npm run dev                  # Full development environment
npm run dev:api             # Backend only  
npm run dev:web             # Frontend only
npm run dev:cli             # CLI tool`}
                    />
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Access Points</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Web Dashboard:</strong> <span className="text-orange-400 font-mono">http://localhost:3003</span></li>
                    <li>• <strong>API Server:</strong> <span className="text-orange-400 font-mono">http://localhost:3100</span></li>
                    <li>• <strong>CLI:</strong> <span className="text-orange-400 font-mono">npm run dev:cli -- --help</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Essential CLI Commands */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">🛠️ Essential CLI Commands</h2>
              
              {/* System Status */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
                <div className="space-y-3">
                  <CodeBlock 
                    language="bash"
                    code={`npm run dev:cli -- status                    # System health
npm run dev:cli -- portfolio                 # Portfolio overview`}
                  />
                </div>
              </div>

              {/* Wallet Management */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Wallet Management</h3>
                <div className="space-y-3">
                  <CodeBlock 
                    language="bash"
                    code={`npm run dev:cli -- list-wallets              # List all wallets
npm run dev:cli -- add-wallet --xpub xpub... --label "My Wallet"
npm run dev:cli -- remove-wallet <id>        # Remove wallet
npm run dev:cli -- balance                   # Show balances`}
                  />
                </div>
              </div>

              {/* Transaction Management */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Transaction Management</h3>
                <div className="space-y-3">
                  <CodeBlock 
                    language="bash"
                    code={`npm run dev:cli -- transactions              # Wallet transactions
npm run dev:cli -- transactions-global       # All transactions
npm run dev:cli -- transactions-summary      # Transaction stats`}
                  />
                </div>
              </div>

              {/* Data Export */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Data Export</h3>
                <div className="space-y-3">
                  <CodeBlock 
                    language="bash"
                    code={`npm run dev:cli -- transactions-global --output csv
npm run dev:cli -- balance --output json
npm run dev:cli -- portfolio --output table`}
                  />
                </div>
              </div>
            </div>

            {/* Key API Endpoints */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">📊 Key API Endpoints</h2>
              
              {/* System */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">System</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Health Check</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /health                           # System health
GET /features                         # Feature flags
GET /status                           # System status`}
                    />
                  </div>
                </div>
              </div>

              {/* Wallets */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Wallets</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Wallet Operations</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /wallets                          # List wallets
POST /wallets                         # Create wallet
GET /wallets/:id                      # Wallet details
GET /wallets/:id/balance              # Wallet balance
GET /wallets/portfolio/overview       # Portfolio overview`}
                    />
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Transactions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Transaction Operations</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /transactions                     # Global transactions
GET /transactions/:txid               # Transaction details
GET /transactions/summary             # Transaction stats
GET /transactions/export              # Export transactions`}
                    />
                  </div>
                </div>
              </div>

              {/* Portfolio & Analytics */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Portfolio & Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Analytics Endpoints</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /portfolio/overview               # Portfolio overview
GET /portfolio/performance            # Performance metrics
GET /portfolio/risk                   # Risk assessment
GET /advanced-analytics/*             # Advanced analytics`}
                    />
                  </div>
                </div>
              </div>

              {/* Reports */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Reports</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Reporting Endpoints</h4>
                    <CodeBlock 
                      language="http"
                      code={`GET /reports                          # List reports
POST /reports/generate                # Generate report
GET /reports/:id                      # Report details
GET /reports/:id/download             # Download report`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Development Commands */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">🔧 Development Commands</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Testing</h3>
                  <div className="space-y-3">
                    <CodeBlock 
                      language="bash"
                      code={`npm test                              # Run all tests
npm run test:watch                    # Watch mode
npm run test:performance              # Performance tests`}
                    />
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Code Quality</h3>
                  <div className="space-y-3">
                    <CodeBlock 
                      language="bash"
                      code={`npm run lint                          # Lint code
npm run format                        # Format code
npm run type-check                    # Type checking`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Common Tasks */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">⚡ Common Tasks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                  <div className="space-y-3">
                    <CodeBlock 
                      language="bash"
                      code={`# Clone and setup
git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard
npm run install:all

# Start development
npm run dev

# Add first wallet
npm run dev:cli -- add-wallet --xpub "xpub..." --label "My Wallet"`}
                    />
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Production Deployment</h3>
                  <div className="space-y-3">
                    <CodeBlock 
                      language="bash"
                      code={`# Build for production
npm run build

# Start production services
npm run start:prod

# Docker deployment
docker-compose up -d

# Health check
curl http://localhost:3100/health`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">🔍 Troubleshooting</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Common Issues</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Port Already in Use</h4>
                      <CodeBlock 
                        language="bash"
                        code={`# Check what's using the port
lsof -i :3100
lsof -i :3003

# Kill process
kill -9 <PID>`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Database Issues</h4>
                      <CodeBlock 
                        language="bash"
                        code={`# Reset database
rm -rf data/treasury.db
npm run setup:db

# Check database status
npm run dev:cli -- status`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Bitcoin Core Connection</h4>
                      <CodeBlock 
                        language="bash"
                        code={`# Test Bitcoin Core connection
npm run dev:cli -- bitcoin:test-connection

# Check Bitcoin Core status
npm run dev:cli -- bitcoin:status`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Need More Help?</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Explore our comprehensive documentation for detailed guides and tutorials.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/docs/system-overview" 
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                      color: '#ffffff',
                      border: '1px solid #f97316',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    System Overview
                  </Link>
                  <Link 
                    to="/docs/api-reference" 
                    className="btn-secondary"
                  >
                    API Reference
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default QuickStart;
