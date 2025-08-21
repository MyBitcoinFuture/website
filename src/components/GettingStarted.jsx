import Header from './Header'
import CodeBlock from './CodeBlock'
import { 
  RocketLaunchIcon, 
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  WalletIcon,
  CogIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
          <div className="container-max max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="text-white">Getting Started</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.1rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                Set up your Bitcoin treasury management system in 4 simple steps. Get started in under 10 minutes.
              </p>
            </div>

            {/* Step 1: Welcome */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <RocketLaunchIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Step 1: Welcome to Bitcoin Treasury
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">What is a Bitcoin Treasury?</div>
                    <p className="text-gray text-sm mb-4">
                      A Bitcoin treasury is a system for managing and monitoring your Bitcoin holdings. 
                      Think of it like a digital vault manager that helps you track your Bitcoin across multiple wallets.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Track Bitcoin balance across multiple wallets</li>
                      <li>• Monitor transactions and network activity</li>
                      <li>• Get real-time updates on your Bitcoin</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Choose Your Setup</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Web Dashboard</div>
                        <p className="text-gray text-sm">Deploy the web version for cross-platform access via browser.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Docker Deployment</div>
                        <p className="text-gray text-sm">Deploy with Docker for quick setup and easy management.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">What You'll Need</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Bitcoin wallet public keys (xpub)</li>
                      <li>• Bitcoin node connection (optional)</li>
                      <li>• Admin account credentials</li>
                      <li>• 10 minutes of setup time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 2: Connect to Bitcoin Network */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <GlobeAltIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Step 2: Connect to Bitcoin Network
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Why Connect to Bitcoin?</div>
                    <p className="text-gray text-sm mb-4">
                      We need to connect to a Bitcoin node to get real-time information about your Bitcoin transactions, 
                      current prices, and network status. This is like connecting to the internet - it's how we access Bitcoin data.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Real-time transaction data</li>
                      <li>• Current Bitcoin prices</li>
                      <li>• Network status updates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Connection Options</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Local Bitcoin Core</div>
                        <p className="text-gray text-sm">Connect to your own Bitcoin Core node for maximum privacy.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Public APIs</div>
                        <p className="text-gray text-sm">Use public Bitcoin APIs for quick setup (less private).</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Configuration</div>
                    <CodeBlock 
                      code={`# Bitcoin Core RPC (optional)
BITCOIN_RPC_HOST=localhost
BITCOIN_RPC_PORT=8332
BITCOIN_RPC_USER=your_rpc_user
BITCOIN_RPC_PASS=your_rpc_pass`}
                      language="bash"
                      title="Bitcoin Node Config"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3: Add Your Bitcoin Wallets */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <WalletIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Step 3: Add Your Bitcoin Wallets
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Wallet Security</div>
                    <p className="text-gray text-sm mb-4">
                      Add your Bitcoin wallets so we can track your balance, transactions, and provide you with insights about your holdings. 
                      We only need your public keys - your private keys stay with you.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Only public keys (xpub) required</li>
                      <li>• Private keys never leave your device</li>
                      <li>• Read-only access to balances</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Add Wallet</div>
                    <CodeBlock 
                      code={`# Via CLI
npm run cli wallet add --name "My Wallet" --xpub "xpub..."

# Via API
curl -X POST http://localhost:3100/api/wallets \\
  -H "Content-Type: application/json" \\
  -d '{"name": "My Wallet", "xpub": "xpub..."}'`}
                      language="bash"
                      title="Add Wallet Commands"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Supported Wallets</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Hardware wallets (Ledger, Trezor)</li>
                      <li>• Software wallets (Electrum, Bitcoin Core)</li>
                      <li>• Multi-sig wallets</li>
                      <li>• Watch-only wallets</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 4: Explore Your Dashboard */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <ChartBarIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Step 4: Explore Your Dashboard
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Dashboard Overview</div>
                    <p className="text-gray text-sm mb-4">
                      Take a tour of your dashboard to see your Bitcoin balance, recent transactions, 
                      and the powerful tools available for managing your Bitcoin treasury.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Total portfolio balance</li>
                      <li>• Recent transactions</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Key Features</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Real-time balance updates</li>
                      <li>• Transaction history</li>
                      <li>• Multi-wallet support</li>
                      <li>• Export capabilities</li>
                      <li>• API integration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Next Steps</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Configure notifications</li>
                      <li>• Set up API access</li>
                      <li>• Add more wallets</li>
                      <li>• Explore advanced features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Setup Options */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <CogIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Quick Setup Options
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col overflow-hidden">
                    <div className="text-orange font-semibold mb-3 text-lg">Docker Deployment</div>
                    <p className="text-gray text-sm mb-4">Deploy with Docker for quick setup and easy management.</p>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <CodeBlock 
                        code={`# Clone repository
git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard

# Deploy with Docker
docker-compose up -d

# Access at http://localhost:3003`}
                        language="bash"
                        title="Docker Setup"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col overflow-hidden">
                    <div className="text-orange font-semibold mb-3 text-lg">Manual Installation</div>
                    <p className="text-gray text-sm mb-4">Install manually for full control and customization.</p>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <CodeBlock 
                        code={`# Clone and install
git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard
npm run install:all
npm run dev

# Access at http://localhost:3003`}
                        language="bash"
                        title="Manual Setup"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ready to Start */}
            <section className="mb-16">
              <div className="text-center">
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto">
                  <CheckCircleIcon style={{ width: '48px', height: '48px', margin: '0 auto 1rem', color: '#f97316' }} />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-6">
                    Your Bitcoin treasury management system is ready to deploy. Choose your preferred setup method and get started in minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://github.com/MyBitcoinFuture/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      View Repository
                    </a>
                    <a 
                      href="/docs"
                      style={{
                        background: 'transparent',
                        color: '#f97316',
                        border: '1px solid #f97316',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#f97316';
                        e.target.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#f97316';
                      }}
                    >
                      View Documentation
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default GettingStarted



