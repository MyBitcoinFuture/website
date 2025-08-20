import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import CodeBlock from './CodeBlock'
import { 
  RocketLaunchIcon, 
  FlagIcon, 
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline'

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="text-white">Getting Started with</span>
                <br />
                <span className="text-orange">MyBitcoinFuture Treasury</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem' }}>
                Complete beginner's guide to deploying and using the enterprise Bitcoin treasury management software. 
                From initial setup to advanced features in simple, step-by-step instructions.
              </p>
            </div>

            {/* System Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <FlagIcon className="w-8 h-8 mr-4 text-orange-400" />
                  System Overview
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">What is MyBitcoinFuture Treasury?</h3>
                <p className="text-gray mb-8 leading-relaxed text-lg">
                  MyBitcoinFuture Treasury is a comprehensive Bitcoin treasury management software designed for enterprises, 
                  institutions, and serious Bitcoin holders. It provides multi-wallet tracking, advanced analytics, 
                  risk management, and compliance features through an intuitive web dashboard and powerful CLI.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                      <FlagIcon className="w-6 h-6 mr-2 text-orange-400" />
                      Core Capabilities
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Multi-Wallet Management</div>
                        <div className="text-gray text-sm">Track unlimited wallets with real-time balance updates</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Portfolio Analytics</div>
                        <div className="text-gray text-sm">Advanced performance metrics and risk analysis</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Transaction Monitoring</div>
                        <div className="text-gray text-sm">Global transaction tracking and filtering</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Compliance & Reporting</div>
                        <div className="text-gray text-sm">Automated reporting and audit trails</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4 flex items-center">
                      <WrenchScrewdriverIcon className="w-6 h-6 mr-2 text-orange-400" />
                      Technical Architecture
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Web Dashboard</div>
                        <div className="text-gray text-sm">Modern React application with real-time updates</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">API Server</div>
                        <div className="text-gray text-sm">RESTful API with JWT authentication</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">CLI Interface</div>
                        <div className="text-gray text-sm">Command-line tools for automation</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Desktop App</div>
                        <div className="text-gray text-sm">Cross-platform Electron application</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Deployment Guide */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <RocketLaunchIcon className="w-8 h-8 mr-4 text-orange-400" />
                  Deployment Guide
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Step-by-Step Deployment</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">1. Prerequisites</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Required Software</div>
                        <ul className="text-gray space-y-2">
                          <li>• Node.js 18+ with npm</li>
                          <li>• Git for version control</li>
                          <li>• Docker & Docker Compose (optional)</li>
                          <li>• 4GB+ RAM available</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">System Requirements</div>
                        <ul className="text-gray space-y-2">
                          <li>• Linux, macOS, or Windows</li>
                          <li>• 50GB+ storage space</li>
                          <li>• Stable internet connection</li>
                          <li>• Port 3100 and 3003 available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">2. Quick Deployment (Docker)</h4>
                    <CodeBlock 
                      code={`# Clone the repository
git clone https://github.com/secsovereign/mbfbtc.git
cd mbfbtc

# Start all services with Docker Compose
docker-compose up -d

# Verify services are running
docker-compose ps

# Access the dashboard
# Open http://localhost:3003 in your browser`}
                      language="bash"
                      title="Docker Quick Start"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">3. Manual Installation</h4>
                    <CodeBlock 
                      code={`# Clone and setup
git clone https://github.com/secsovereign/mbfbtc.git
cd mbfbtc
npm install

# Install frontend dependencies
cd web-react && npm install && cd ..

# Configure environment
cp env.example .env
# Edit .env with your settings

# Build frontend
npm run frontend:build

# Start the application
npm start`}
                      language="bash"
                      title="Manual Installation"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Initial Setup */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="inline-flex items-center">
                <span className="mr-4">⚙️</span>
                Initial Setup
              </span>
            </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">First-Time Configuration</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">1. Access the Dashboard</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Web Dashboard</div>
                        <ul className="text-gray space-y-2">
                          <li>• Open http://localhost:3003</li>
                          <li>• Create admin account</li>
                          <li>• Configure initial settings</li>
                          <li>• Set up security preferences</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">CLI Access</div>
                        <ul className="text-gray space-y-2">
                          <li>• Use mbf-treasury commands</li>
                          <li>• Check system status</li>
                          <li>• View configuration</li>
                          <li>• Access logs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">2. System Health Check</h4>
                    <CodeBlock 
                      code={`# Check system status
mbf-treasury status

# Comprehensive health check
mbf-treasury health

# View system logs
mbf-treasury logs

# Check API connectivity
curl http://localhost:3100/health`}
                      language="bash"
                      title="Health Check Commands"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">3. Initial Configuration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Security Settings</div>
                        <div className="text-gray text-sm">Configure JWT secrets, rate limits, and access controls</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Database Setup</div>
                        <div className="text-gray text-sm">Initialize SQLite database and run migrations</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Cache Configuration</div>
                        <div className="text-gray text-sm">Set up Redis cache for performance optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Wallet Integration */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="inline-flex items-center">
                <span className="mr-4">💼</span>
                Wallet Integration
              </span>
            </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Adding Your First Wallet</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Via CLI</h4>
                    <CodeBlock 
                      code={`# List current wallets
mbf-treasury list-wallets

# Add a new wallet
mbf-treasury add-wallet \\
  --xpub "xpub..." \\
  --label "My Wallet" \\
  --type "bip44"

# Verify wallet was added
mbf-treasury list-wallets

# Check wallet balance
mbf-treasury portfolio`}
                      language="bash"
                      title="CLI Wallet Management"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Via Dashboard</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Dashboard Steps</div>
                        <ul className="text-gray space-y-2">
                          <li>• Navigate to Wallets section</li>
                          <li>• Click "Add New Wallet"</li>
                          <li>• Enter xpub or address</li>
                          <li>• Set wallet label and type</li>
                          <li>• Save and verify</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Supported Formats</div>
                        <ul className="text-gray space-y-2">
                          <li>• BIP44 xpub keys</li>
                          <li>• BIP49 ypub keys</li>
                          <li>• BIP84 zpub keys</li>
                          <li>• Individual addresses</li>
                          <li>• Wallet descriptors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Portfolio Overview</h4>
                    <CodeBlock 
                      code={`# View portfolio summary
mbf-treasury portfolio

# Detailed portfolio analysis
mbf-treasury portfolio --detailed

# Risk analysis
mbf-treasury portfolio --risk

# Performance metrics
mbf-treasury portfolio --performance`}
                      language="bash"
                      title="Portfolio Commands"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="inline-flex items-center">
                <span className="mr-4">⚡</span>
                Advanced Features
              </span>
            </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Beyond Basic Setup</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">BRK Integration</h4>
                    <CodeBlock 
                      code={`# Enable BRK integration
mbf-treasury setup --brk

# Configure BRK indexes
mbf-treasury brk --indexes date,address,transaction

# Start BRK services
mbf-treasury brk --start

# Check BRK status
mbf-treasury brk --status`}
                      language="bash"
                      title="BRK Setup Commands"
                    />
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
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Monitoring & Alerts</h4>
                    <CodeBlock 
                      code={`# Set up monitoring
mbf-treasury monitor --enable

# Configure alerts
mbf-treasury alerts --add \\
  --type "balance_change" \\
  --threshold "0.1" \\
  --email "admin@example.com"

# View monitoring dashboard
mbf-treasury monitor --dashboard

# Check alert history
mbf-treasury alerts --history`}
                      language="bash"
                      title="Monitoring Setup"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Security Best Practices */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="inline-flex items-center">
                <span className="mr-4">🔒</span>
                Security Best Practices
              </span>
            </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Securing Your Deployment</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Security Measures</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">Access Control</div>
                        <ul className="text-gray space-y-2">
                          <li>• Use strong JWT secrets</li>
                          <li>• Enable rate limiting</li>
                          <li>• Implement role-based access</li>
                          <li>• Regular access reviews</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">Network Security</div>
                        <ul className="text-gray space-y-2">
                          <li>• Use HTTPS in production</li>
                          <li>• Configure firewall rules</li>
                          <li>• VPN access for remote users</li>
                          <li>• Regular security updates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Security Risks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">⚠️ Key Management</div>
                        <div className="text-gray text-sm">Never store private keys in the system</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">⚠️ Network Exposure</div>
                        <div className="text-gray text-sm">Limit API access to trusted networks</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">⚠️ Data Privacy</div>
                        <div className="text-gray text-sm">Ensure compliance with data regulations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="inline-flex items-center">
                <span className="mr-4">🎯</span>
                Next Steps
              </span>
            </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Continuing Your Journey</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Documentation & Resources</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="text-orange font-semibold mb-3">📚 Technical Documentation</div>
                        <ul className="text-gray space-y-2">
                          <li>• <a href="/docs" className="text-blue-400 hover:underline">Complete API Reference</a></li>
                          <li>• Architecture documentation</li>
                          <li>• Deployment guides</li>
                          <li>• Security best practices</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-orange font-semibold mb-3">🔗 External Resources</div>
                        <ul className="text-gray space-y-2">
                          <li>• <a href="https://github.com/secsovereign/mbfbtc" className="text-blue-400 hover:underline">GitHub Repository</a></li>
                          <li>• Issue tracking and discussions</li>
                          <li>• Community support</li>
                          <li>• Feature requests</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Advanced Configuration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Custom Integrations</div>
                        <div className="text-gray text-sm">Connect with external systems and APIs</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Automation</div>
                        <div className="text-gray text-sm">Set up automated workflows and alerts</div>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                        <div className="text-orange font-semibold mb-2">Scaling</div>
                        <div className="text-gray text-sm">Scale your deployment for enterprise use</div>
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

export default GettingStarted



