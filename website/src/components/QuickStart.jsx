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
              <h2 className="text-3xl font-bold text-white mb-8">Get Running in Minutes</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Node.js 18+ installed</li>
                    <li>• npm or yarn package manager</li>
                    <li>• Git for version control</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">1. Setup Dependencies</h3>
                  <CodeBlock language="bash">
{`npm run setup`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">2. Start Everything</h3>
                  <CodeBlock language="bash">
{`npm start`}
                  </CodeBlock>
                  <p className="text-gray-300 mt-4">This will:</p>
                  <ul className="text-gray-300 space-y-2 mt-2">
                    <li>• Initialize the database</li>
                    <li>• Create admin user (admin/admin123)</li>
                    <li>• Seed demo wallet with 1 BTC</li>
                    <li>• Start backend API (port 3100)</li>
                    <li>• Start frontend UI (port 5173)</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">3. Open the Application</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Frontend</h4>
                      <p className="text-gray-300">http://localhost:5173</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Backend API</h4>
                      <p className="text-gray-300">http://localhost:3100</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Login Credentials</h4>
                    <p className="text-gray-300">Username: admin / Password: admin123</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Features */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Available Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Core Functionality</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• View wallets and balances</li>
                    <li>• Browse transaction history</li>
                    <li>• Portfolio analytics dashboard</li>
                    <li>• UTXO management interface</li>
                    <li>• Cost basis & tax reporting</li>
                    <li>• Alert management</li>
                    <li>• User management (admin only)</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Development Features</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Mock data for development</li>
                    <li>• Hot reloading</li>
                    <li>• Debug tools</li>
                    <li>• Test data generation</li>
                    <li>• API documentation</li>
                    <li>• Error handling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manual Control */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Manual Service Control</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Run Services Separately</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Backend Only</h4>
                      <CodeBlock language="bash">
{`npm run backend`}
                      </CodeBlock>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Frontend Only</h4>
                      <CodeBlock language="bash">
{`npm run frontend`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Environment Configuration */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Environment Configuration</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Bitcoin Core Integration</h3>
                  <p className="text-gray-300 mb-4">Set these environment variables for Bitcoin Core integration:</p>
                  <CodeBlock language="bash">
{`export BITCOIN_HOST=localhost
export BITCOIN_PORT=8332
export BITCOIN_RPCUSER=your_rpc_user
export BITCOIN_RPCPASSWORD=your_rpc_password
export ADMIN_PASSWORD=your_admin_password`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Mock Data Configuration</h3>
                  <p className="text-gray-300 mb-4">For development and testing, you can configure mock data generation:</p>
                  <CodeBlock language="bash">
{`# Set dataset size for mock data
export SEED_DATASET=large

# Available sizes: small, medium, large, enterprise
# Or specify a custom JSON file path`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Mock Data Management */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Mock Data Management</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Reset and Reseed Database</h3>
                  <p className="text-gray-300 mb-4">Reset and reseed the database with large, realistic mock data for development, testing, or demos:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">1. Delete Existing Database (Optional)</h4>
                      <CodeBlock language="bash">
{`rm -f dist/treasury.db`}
                      </CodeBlock>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">2. Set Dataset Size</h4>
                      <CodeBlock language="bash">
{`# Available sizes:
export SEED_DATASET=small    # 3 wallets, 100 transactions, 50 UTXOs
export SEED_DATASET=medium   # 5 wallets, 1000 transactions, 500 UTXOs
export SEED_DATASET=large    # 10 wallets, 5000 transactions, 2000 UTXOs
export SEED_DATASET=enterprise # 20 wallets, 10000 transactions, 5000 UTXOs`}
                      </CodeBlock>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">3. Run Setup Script</h4>
                      <CodeBlock language="bash">
{`node setup.js --username=admin --password=admin123
# or
npm run setup`}
                      </CodeBlock>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Generate Custom Test Data</h3>
                  <CodeBlock language="bash">
{`# Generate custom dataset
npm run generate-test-data
# or
node test/data-generator.js large`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Troubleshooting</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Port Conflicts</h3>
                  <p className="text-gray-300 mb-4">Backend uses port 3100, Frontend uses port 5173</p>
                  <CodeBlock language="bash">
{`# Kill existing processes
pkill -f "node.*api-server"
pkill -f "vite"`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Database Issues</h3>
                  <p className="text-gray-300 mb-4">Delete treasury.db and restart to reset everything</p>
                  <CodeBlock language="bash">
{`rm -f dist/treasury.db
npm run setup`}
                  </CodeBlock>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Module Not Found</h3>
                  <p className="text-gray-300 mb-4">Run setup again to reinstall dependencies</p>
                  <CodeBlock language="bash">
{`npm run setup`}
                  </CodeBlock>
                </div>
              </div>
            </div>

            {/* Production Notice */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Production Deployment</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">⚠️ Mock Data Notice</h3>
                <p className="text-gray-300 mb-4">Most data is currently mocked. For production use, you'll need to:</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Connect to a real Bitcoin Core node</li>
                  <li>• Configure proper Bitcoin RPC credentials</li>
                  <li>• Set up real price data sources</li>
                  <li>• Configure SSL certificates</li>
                  <li>• Set up proper environment variables</li>
                  <li>• Configure backup and monitoring</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Deploy?</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Set up your Bitcoin treasury management system for production use.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/deployment" 
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
                    Production Setup
                  </Link>
                  <Link 
                    to="/system-overview" 
                    className="btn-secondary"
                  >
                    System Overview
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
