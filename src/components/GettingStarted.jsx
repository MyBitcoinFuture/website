import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
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
                <span className="text-white">Getting Started</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.1rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
                Deploy and configure the Bitcoin treasury management system in under 10 minutes.
              </p>
            </div>

            {/* Quick Start */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <RocketLaunchIcon className="icon-medium mr-4 text-orange-400" />
                  Quick Start
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">1. Clone & Deploy</h4>
                    <CodeBlock 
                      code={`git clone https://github.com/MyBitcoinFuture/dashboard.git
cd dashboard
npm run install:all
npm run dev`}
                      language="bash"
                      title="Quick Deploy"
                    />
                    <p className="text-gray text-sm mt-3">
                      • API: http://localhost:3100 • Web: http://localhost:3003 • CLI: npm run cli
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">2. Add Your First Wallet</h4>
                    <CodeBlock 
                      code={`# Add wallet via CLI
npm run cli wallet add --name "Main Wallet" --xpub "xpub..."

# Or via API
curl -X POST http://localhost:3100/api/wallets \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Main Wallet", "xpub": "xpub..."}'`}
                      language="bash"
                      title="Add Wallet"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">3. Check Status</h4>
                    <CodeBlock 
                      code={`# Check system status
npm run cli status

# List wallets
npm run cli wallet list

# Get wallet balance
npm run cli wallet balance --id 1`}
                      language="bash"
                      title="System Status"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Configuration */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <WrenchScrewdriverIcon className="icon-medium mr-4 text-orange-400" />
                  Configuration
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Environment Variables</h4>
                    <CodeBlock 
                      code={`# .env file
NODE_ENV=development
PORT=3100
WEB_PORT=3003

# Bitcoin Core RPC (optional)
BITCOIN_RPC_HOST=localhost
BITCOIN_RPC_PORT=8332
BITCOIN_RPC_USER=your_rpc_user
BITCOIN_RPC_PASS=your_rpc_pass

# Database
DB_PATH=./data/treasury.db

# Security
JWT_SECRET=your_jwt_secret
ADMIN_TOKEN=your_admin_token`}
                      language="bash"
                      title="Environment Config"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">API Endpoints</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <div className="text-orange font-semibold">GET /api/status</div>
                        <div className="text-gray">System health check</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <div className="text-orange font-semibold">GET /api/wallets</div>
                        <div className="text-gray">List all wallets</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <div className="text-orange font-semibold">POST /api/wallets</div>
                        <div className="text-gray">Add new wallet</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <div className="text-orange font-semibold">GET /api/wallets/:id/balance</div>
                        <div className="text-gray">Get wallet balance</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <div className="text-orange font-semibold">GET /api/transactions</div>
                        <div className="text-gray">List transactions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CLI Commands */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <CommandLineIcon className="icon-medium mr-4 text-orange-400" />
                  CLI Commands
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Wallet Management</h4>
                    <div className="space-y-3 text-sm">
                      <CodeBlock 
                        code={`npm run cli wallet add --name "Wallet1" --xpub "xpub..."
npm run cli wallet list
npm run cli wallet balance --id 1
npm run cli wallet remove --id 1`}
                        language="bash"
                        title="Wallet Commands"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">System Commands</h4>
                    <div className="space-y-3 text-sm">
                      <CodeBlock 
                        code={`npm run cli status
npm run cli config show
npm run cli config set --key port --value 3100
npm run cli logs --level debug`}
                        language="bash"
                        title="System Commands"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Production Deployment */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <CloudArrowUpIcon className="icon-medium mr-4 text-orange-400" />
                  Production Deployment
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Docker Deployment</h4>
                    <CodeBlock 
                      code={`# Build and run with Docker
docker-compose up -d

# Or build custom image
docker build -t mbf-treasury .
docker run -p 3100:3100 -p 3003:3003 mbf-treasury`}
                      language="bash"
                      title="Docker Deploy"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Systemd Service</h4>
                    <CodeBlock 
                      code={`# Create service file
sudo nano /etc/systemd/system/mbf-treasury.service

[Unit]
Description=MyBitcoinFuture Treasury
After=network.target

[Service]
Type=simple
User=mbf
WorkingDirectory=/opt/mbf-treasury
ExecStart=/usr/bin/npm start
Restart=always

[Install]
WantedBy=multi-user.target

# Enable and start
sudo systemctl enable mbf-treasury
sudo systemctl start mbf-treasury`}
                      language="bash"
                      title="Systemd Service"
                    />
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-lg font-medium text-white mb-4">Nginx Reverse Proxy</h4>
                    <CodeBlock 
                      code={`# /etc/nginx/sites-available/mbf-treasury
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3003;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    location /api {
        proxy_pass http://localhost:3100;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}
                      language="nginx"
                      title="Nginx Config"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <ShieldCheckIcon className="icon-medium mr-4 text-orange-400" />
                  Troubleshooting
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Common Issues</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <div className="text-orange font-semibold">Port Already in Use</div>
                        <div className="text-gray text-sm">Change ports in .env or kill existing processes</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <div className="text-orange font-semibold">Invalid xpub Format</div>
                        <div className="text-gray text-sm">Ensure xpub starts with 'xpub' and is 111 characters</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <div className="text-orange font-semibold">Database Locked</div>
                        <div className="text-gray text-sm">Check file permissions on ./data/treasury.db</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Debug Commands</h4>
                    <CodeBlock 
                      code={`# Check system status
npm run cli status

# View logs
npm run cli logs --level debug

# Test API connectivity
curl http://localhost:3100/api/status

# Check database
sqlite3 ./data/treasury.db ".tables"`}
                      language="bash"
                      title="Debug Commands"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <DocumentTextIcon className="icon-medium mr-4 text-orange-400" />
                  Next Steps
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-3">API Integration</h4>
                      <p className="text-gray text-sm mb-4">Integrate with your existing systems using the REST API</p>
                      <a 
                        href="https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium"
                      >
                        API Documentation →
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-3">Plugin Development</h4>
                      <p className="text-gray text-sm mb-4">Extend functionality with custom plugins</p>
                      <a 
                        href="https://github.com/MyBitcoinFuture/plugins" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium"
                      >
                        Plugin Guide →
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-3">Security Hardening</h4>
                      <p className="text-gray text-sm mb-4">Configure authentication, SSL, and access controls</p>
                      <a 
                        href="https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/SECURITY.md" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-300 text-sm font-medium"
                      >
                        Security Guide →
                      </a>
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



