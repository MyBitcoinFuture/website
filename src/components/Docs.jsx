import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import CodeBlock from './CodeBlock'

const Docs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="text-white">MyBitcoinFuture</span>
                <br />
                <span className="text-orange">Technical Documentation</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem' }}>
                Complete technical reference for the enterprise Bitcoin treasury management software. 
                Comprehensive guides for deployment, API integration, and advanced features.
              </p>
            </div>

            {/* Documentation Index */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">📚 Documentation Index</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="#overview" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">🏗️</div>
                  <h4 className="text-orange font-semibold mb-2">Architecture</h4>
                  <p className="text-gray text-sm">System design and components</p>
                </a>
                <a href="#deployment" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="text-orange font-semibold mb-2">Deployment</h4>
                  <p className="text-gray text-sm">Production deployment guides</p>
                </a>
                <a href="#api" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">🔌</div>
                  <h4 className="text-orange font-semibold mb-2">API Reference</h4>
                  <p className="text-gray text-sm">REST API documentation</p>
                </a>
                <a href="#cli" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">💻</div>
                  <h4 className="text-orange font-semibold mb-2">CLI Reference</h4>
                  <p className="text-gray text-sm">Command line interface</p>
                </a>
                <a href="#advanced" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="text-orange font-semibold mb-2">Advanced Features</h4>
                  <p className="text-gray text-sm">BRK integration & analytics</p>
                </a>
                <a href="#security" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">🔒</div>
                  <h4 className="text-orange font-semibold mb-2">Security</h4>
                  <p className="text-gray text-sm">Security & compliance</p>
                </a>
                <a href="#monitoring" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="text-orange font-semibold mb-2">Monitoring</h4>
                  <p className="text-gray text-sm">Health checks & observability</p>
                </a>
                <a href="#development" className="block p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl mb-3">🛠️</div>
                  <h4 className="text-orange font-semibold mb-2">Development</h4>
                  <p className="text-gray text-sm">Contributing & extending</p>
                </a>
              </div>
            </div>

            {/* System Architecture */}
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">🏗️ System Architecture</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Enterprise Architecture Overview</h3>
                <p className="text-gray mb-8 leading-relaxed text-lg">
                  MyBitcoinFuture is a comprehensive Bitcoin treasury management software designed for enterprise-scale operations. 
                  The system provides multi-wallet tracking, advanced analytics, risk management, and compliance features 
                  through a modular, scalable architecture.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">🎯 Core Components</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">API Server (Express.js)</div>
                        <div className="text-gray text-sm">RESTful API with JWT authentication, rate limiting, and comprehensive middleware</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Web Dashboard (React)</div>
                        <div className="text-gray text-sm">Modern React application with real-time updates and responsive design</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Desktop App (Electron)</div>
                        <div className="text-gray text-sm">Cross-platform desktop application for offline functionality</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">CLI Interface (Commander.js)</div>
                        <div className="text-gray text-sm">Comprehensive command-line interface for automation and scripting</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">🔧 Data Layer</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">SQLite Database</div>
                        <div className="text-gray text-sm">Primary data store with automatic migrations and backup support</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Redis Cache</div>
                        <div className="text-gray text-sm">High-performance caching for API responses and session management</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Bitcoin Core RPC</div>
                        <div className="text-gray text-sm">Direct integration with Bitcoin Core for real-time blockchain data</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">BRK Integration</div>
                        <div className="text-gray text-sm">Bitcoin Research Kit for advanced analytics and indexing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-white mb-4">📊 Service Architecture</h4>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="text-orange font-semibold mb-3">Portfolio Services</div>
                      <ul className="text-gray space-y-2">
                        <li>• Multi-wallet aggregation</li>
                        <li>• Performance analytics</li>
                        <li>• Risk assessment</li>
                        <li>• Allocation tracking</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-orange font-semibold mb-3">Transaction Services</div>
                      <ul className="text-gray space-y-2">
                        <li>• Global transaction monitoring</li>
                        <li>• Advanced filtering</li>
                        <li>• Export capabilities</li>
                        <li>• Mempool integration</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-orange font-semibold mb-3">Analytics Services</div>
                      <ul className="text-gray space-y-2">
                        <li>• Real-time metrics</li>
                        <li>• Historical analysis</li>
                        <li>• Predictive modeling</li>
                        <li>• Custom reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Deployment Guide */}
            <section id="deployment" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Deployment Guide</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Production Deployment</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">1. System Requirements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Minimum Requirements</div>
                        <ul className="text-gray space-y-2">
                          <li>• Node.js 18+ with npm</li>
                          <li>• 4GB RAM minimum</li>
                          <li>• 50GB storage space</li>
                          <li>• Linux/macOS/Windows</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Recommended</div>
                        <ul className="text-gray space-y-2">
                          <li>• Node.js 20+ LTS</li>
                          <li>• 8GB+ RAM</li>
                          <li>• 100GB+ SSD storage</li>
                          <li>• Docker & Docker Compose</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">2. Docker Deployment (Recommended)</h4>
                    <CodeBlock 
                      code={`# Clone repository
git clone https://github.com/secsovereign/mbfbtc.git
cd mbfbtc

# Build and start with Docker Compose
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f`}
                      language="bash"
                      title="Docker Deployment Commands"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">3. Manual Deployment</h4>
                    <CodeBlock 
                      code={`# Install dependencies
npm install
cd web-react && npm install && cd ..

# Configure environment
cp env.example .env
# Edit .env with production settings

# Build frontend
npm run frontend:build

# Start production server
NODE_ENV=production npm start`}
                      language="bash"
                      title="Manual Deployment Commands"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">4. Environment Configuration</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-600/60">
                            <th className="text-left p-4 text-orange font-semibold border-b border-slate-500">Variable</th>
                            <th className="text-left p-4 text-orange font-semibold border-b border-slate-500">Description</th>
                            <th className="text-left p-4 text-orange font-semibold border-b border-slate-500">Default</th>
                            <th className="text-left p-4 text-orange font-semibold border-b border-slate-500">Production</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">NODE_ENV</td>
                            <td className="p-4 text-gray">Environment mode</td>
                            <td className="p-4 font-mono text-gray">development</td>
                            <td className="p-4 font-mono text-gray">production</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">BACKEND_PORT</td>
                            <td className="p-4 text-gray">API server port</td>
                            <td className="p-4 font-mono text-gray">3100</td>
                            <td className="p-4 font-mono text-gray">3100</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">FRONTEND_PORT</td>
                            <td className="p-4 text-gray">Web dashboard port</td>
                            <td className="p-4 font-mono text-gray">3003</td>
                            <td className="p-4 font-mono text-gray">3003</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">JWT_SECRET</td>
                            <td className="p-4 text-gray">JWT signing secret</td>
                            <td className="p-4 font-mono text-gray">dev-secret</td>
                            <td className="p-4 font-mono text-gray">[generate secure key]</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">REDIS_URL</td>
                            <td className="p-4 text-gray">Redis connection</td>
                            <td className="p-4 font-mono text-gray">redis://localhost:6379</td>
                            <td className="p-4 font-mono text-gray">redis://localhost:6379</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">DATABASE_URL</td>
                            <td className="p-4 text-gray">SQLite database path</td>
                            <td className="p-4 font-mono text-gray">./data/mbf.db</td>
                            <td className="p-4 font-mono text-gray">./data/mbf.db</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">BRK_URL</td>
                            <td className="p-4 text-gray">Bitcoin Research Kit URL</td>
                            <td className="p-4 font-mono text-gray">http://localhost:8080</td>
                            <td className="p-4 font-mono text-gray">http://localhost:8080</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">BITCOIN_RPC_URL</td>
                            <td className="p-4 text-gray">Bitcoin Core RPC URL</td>
                            <td className="p-4 font-mono text-gray">http://localhost:8332</td>
                            <td className="p-4 font-mono text-gray">http://localhost:8332</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">RATE_LIMIT_WINDOW</td>
                            <td className="p-4 text-gray">Rate limiting window (ms)</td>
                            <td className="p-4 font-mono text-gray">900000</td>
                            <td className="p-4 font-mono text-gray">900000</td>
                          </tr>
                          <tr className="border-b border-slate-700 hover:bg-slate-600/30">
                            <td className="p-4 font-mono text-white">RATE_LIMIT_MAX</td>
                            <td className="p-4 text-gray">Max requests per window</td>
                            <td className="p-4 font-mono text-gray">100</td>
                            <td className="p-4 font-mono text-gray">100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">🔌 API Reference</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">REST API Documentation</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Authentication</h4>
                    <p className="text-gray mb-4">All API endpoints require JWT authentication via Bearer token:</p>
                    <CodeBlock 
                      code="Authorization: Bearer <your-jwt-token>"
                      language="bash"
                      title="Authentication Header"
                    />
                    <p className="text-gray mt-4">Rate limiting: 100 requests per 15-minute window</p>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Core Endpoints</h4>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <div className="text-orange font-semibold mb-2">GET /portfolio/overview</div>
                          <div className="text-gray text-sm mb-3">Portfolio summary with balances and allocation</div>
                          <CodeBlock 
                            code={`Response:
{
  "totalBTC": 3.9,
  "totalUSD": 421200,
  "walletCount": 8,
  "allocation": [...],
  "recentTransactions": [...]
}`}
                            language="json"
                            title="Portfolio Overview Response"
                          />
                        </div>
                        <div>
                          <div className="text-orange font-semibold mb-2">GET /portfolio/risk</div>
                          <div className="text-gray text-sm mb-3">Risk metrics and analysis</div>
                          <CodeBlock 
                            code={`Response:
{
  "volatility": 0.42,
  "maxDrawdown": 0.27,
  "concentration": 0.38,
  "var95": -0.1,
  "riskLevel": "MODERATE"
}`}
                            language="json"
                            title="Risk Analysis Response"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Advanced Analytics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/performance</div>
                        <div className="text-gray text-sm">Performance metrics and attribution</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/insights</div>
                        <div className="text-gray text-sm">Portfolio insights and recommendations</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /transactions/global</div>
                        <div className="text-gray text-sm">Global transaction monitoring</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /reports/financial</div>
                        <div className="text-gray text-sm">Financial reporting and exports</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/risk</div>
                        <div className="text-gray text-sm">Risk metrics and analysis</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/allocation</div>
                        <div className="text-gray text-sm">Portfolio allocation breakdown</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/history</div>
                        <div className="text-gray text-sm">Historical portfolio data</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /analytics/forecast</div>
                        <div className="text-gray text-sm">Predictive analytics and forecasting</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Wallet Management API</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /wallets</div>
                        <div className="text-gray text-sm">List all configured wallets</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">POST /wallets</div>
                        <div className="text-gray text-sm">Add a new wallet</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /wallets/{'{id}'}</div>
                        <div className="text-gray text-sm">Get wallet details</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">PUT /wallets/{'{id}'}</div>
                        <div className="text-gray text-sm">Update wallet configuration</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">DELETE /wallets/{'{id}'}</div>
                        <div className="text-gray text-sm">Remove wallet</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /wallets/{'{id}'}/balance</div>
                        <div className="text-gray text-sm">Get wallet balance</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /wallets/{'{id}'}/transactions</div>
                        <div className="text-gray text-sm">Get wallet transactions</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /wallets/{'{id}'}/addresses</div>
                        <div className="text-gray text-sm">Get wallet addresses</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">System & Monitoring API</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /health</div>
                        <div className="text-gray text-sm">System health check</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /status</div>
                        <div className="text-gray text-sm">System status and metrics</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /logs</div>
                        <div className="text-gray text-sm">System logs</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /metrics</div>
                        <div className="text-gray text-sm">Performance metrics</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">POST /backup</div>
                        <div className="text-gray text-sm">Create system backup</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">POST /restore</div>
                        <div className="text-gray text-sm">Restore from backup</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /version</div>
                        <div className="text-gray text-sm">System version information</div>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-2">GET /config</div>
                        <div className="text-gray text-sm">Current configuration</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CLI Reference */}
            <section id="cli" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">💻 CLI Reference</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Command Line Interface</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">System Management</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury status</div>
                        <div className="text-gray text-sm">Check system health and component status</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury health</div>
                        <div className="text-gray text-sm">Comprehensive health check with detailed metrics</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury logs</div>
                        <div className="text-gray text-sm">View and manage system logs</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury setup</div>
                        <div className="text-gray text-sm">Initial system setup and configuration</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury backup</div>
                        <div className="text-gray text-sm">Create database and configuration backups</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury restore</div>
                        <div className="text-gray text-sm">Restore from backup files</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury update</div>
                        <div className="text-gray text-sm">Update system components and dependencies</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury version</div>
                        <div className="text-gray text-sm">Display current version information</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Portfolio Management</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio</div>
                        <div className="text-gray text-sm">Display portfolio overview and metrics</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio --risk</div>
                        <div className="text-gray text-sm">Show risk analysis and metrics</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio --performance</div>
                        <div className="text-gray text-sm">Display performance metrics and attribution</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio --allocation</div>
                        <div className="text-gray text-sm">Show wallet allocation breakdown</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio --history</div>
                        <div className="text-gray text-sm">Display historical portfolio data</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury portfolio --export</div>
                        <div className="text-gray text-sm">Export portfolio data to CSV/JSON</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Wallet Operations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury list-wallets</div>
                        <div className="text-gray text-sm">Display all configured wallets</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury add-wallet --xpub xpub... --label "Wallet"</div>
                        <div className="text-gray text-sm">Add a new wallet for tracking</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury remove-wallet &lt;id&gt;</div>
                        <div className="text-gray text-sm">Remove a wallet from tracking</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury update-wallet &lt;id&gt; --label "New Label"</div>
                        <div className="text-gray text-sm">Update wallet configuration</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury wallet-balance &lt;id&gt;</div>
                        <div className="text-gray text-sm">Show individual wallet balance</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">mbf-treasury wallet-transactions &lt;id&gt;</div>
                        <div className="text-gray text-sm">Show wallet transaction history</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section id="advanced" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">⚡ Advanced Features</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Bitcoin Research Kit Integration</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">BRK Capabilities</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Available Indexes (25 total)</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• Date-based indexing</li>
                          <li>• Address type indexing</li>
                          <li>• Transaction indexing</li>
                          <li>• Block height indexing</li>
                          <li>• OP_RETURN indexing</li>
                          <li>• Difficulty epoch indexing</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Data Types</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• Price data (OHLC)</li>
                          <li>• Market data (cap, volume)</li>
                          <li>• Mining data (difficulty, hashrate)</li>
                          <li>• Transaction data (fees, mempool)</li>
                          <li>• Network statistics</li>
                          <li>• Address analytics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Advanced Analytics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Performance Analytics</div>
                        <div className="text-gray text-sm">Sharpe ratio, alpha, beta, and attribution analysis</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Risk Modeling</div>
                        <div className="text-gray text-sm">VaR, CVaR, stress testing, and scenario analysis</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Predictive Analytics</div>
                        <div className="text-gray text-sm">Trend analysis and forecasting models</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">🔒 Security & Compliance</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Enterprise Security Features</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Authentication & Authorization</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">JWT Authentication</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• Secure token-based authentication</li>
                          <li>• Configurable token expiration</li>
                          <li>• Refresh token support</li>
                          <li>• Multi-factor authentication ready</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Role-Based Access Control</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• Admin, user, and read-only roles</li>
                          <li>• Granular permission system</li>
                          <li>• API endpoint protection</li>
                          <li>• Audit trail for all actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Data Protection</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Encryption</div>
                        <div className="text-gray text-sm">Data encryption at rest and in transit</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Audit Logging</div>
                        <div className="text-gray text-sm">Comprehensive operation tracking</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Backup & Recovery</div>
                        <div className="text-gray text-sm">Automated backup and disaster recovery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monitoring */}
            <section id="monitoring" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">📊 Monitoring & Observability</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Health Monitoring</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">System Health Checks</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Core Services</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• API server health</li>
                          <li>• Database connectivity</li>
                          <li>• Redis cache status</li>
                          <li>• Bitcoin Core RPC</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">External Services</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• BRK integration status</li>
                          <li>• Electrum server health</li>
                          <li>• Mempool connectivity</li>
                          <li>• Price feed availability</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Performance Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Response Times</div>
                        <div className="text-gray text-sm">API latency and throughput monitoring</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Resource Usage</div>
                        <div className="text-gray text-sm">CPU, memory, and disk utilization</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Error Rates</div>
                        <div className="text-gray text-sm">Error tracking and alerting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Development */}
            <section id="development" className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">🛠️ Development Guide</h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Contributing to MyBitcoinFuture</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Development Setup</h4>
                    <CodeBlock 
                      code={`# Clone and setup
git clone https://github.com/secsovereign/mbfbtc.git
cd mbfbtc
npm install

# Start development environment
npm run start:dev

# Run tests
npm test

# Code quality checks
npm run lint
npm run format`}
                      language="bash"
                      title="Development Setup Commands"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Project Structure</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Core Backend</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• core/api-server.js - Main server</li>
                          <li>• core/routes/ - API endpoints</li>
                          <li>• core/services/ - Business logic</li>
                          <li>• core/middleware/ - Express middleware</li>
                          <li>• core/security/ - Security features</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Frontend & CLI</div>
                        <ul className="text-gray space-y-2 text-sm">
                          <li>• web-react/ - React dashboard</li>
                          <li>• electron/ - Desktop application</li>
                          <li>• cli-commands/ - CLI implementation</li>
                          <li>• plugins/ - Plugin system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Testing Strategy</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Unit Tests</div>
                        <div className="text-gray text-sm">Jest-based testing for individual components</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Integration Tests</div>
                        <div className="text-gray text-sm">End-to-end API and service testing</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Performance Tests</div>
                        <div className="text-gray text-sm">Load testing and performance validation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Docs

