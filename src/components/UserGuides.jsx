import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CodeBlock from './CodeBlock';
import Breadcrumbs from './ui/Breadcrumbs';

const UserGuides = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'User Guides' }]} />
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">User Guides</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Comprehensive guides for managing your Bitcoin treasury, from initial setup to advanced analytics.
              </p>
            </div>

            {/* Guide Navigation */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">📚 Available Guides</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="#wallet-management" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Wallet Management</h3>
                  <p className="text-gray-300 text-sm">Add, manage, and organize your Bitcoin wallets</p>
                </Link>
                
                <Link to="#portfolio-analytics" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Portfolio Analytics</h3>
                  <p className="text-gray-300 text-sm">Track performance and analyze your portfolio</p>
                </Link>
                
                <Link to="#transaction-monitoring" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Transaction Monitoring</h3>
                  <p className="text-gray-300 text-sm">Monitor and track Bitcoin transactions</p>
                </Link>
                
                <Link to="#compliance-reporting" className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-400 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Compliance Reporting</h3>
                  <p className="text-gray-300 text-sm">Generate reports for compliance and audits</p>
                </Link>
              </div>
            </div>

            {/* Wallet Management Guide */}
            <div className="card mb-20" id="wallet-management">
              <h2 className="text-3xl font-bold text-white mb-8">💼 Wallet Management</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Adding Your First Wallet</h3>
                  <p className="text-gray-300 mb-4">
                    MyBitcoinFuture uses extended public keys (xpub) to track your Bitcoin wallets. 
                    This approach ensures maximum security - we use xpub-only architecture and never access your private keys.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Step 1: Get Your xpub</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Export the extended public key from your Bitcoin wallet. This is safe to share and 
                        allows the system to track your addresses without access to your private keys.
                      </p>
                      <CodeBlock 
                        language="bash"
                        code={`# Example: Export xpub from Bitcoin Core
bitcoin-cli -regtest getnewaddress
bitcoin-cli -regtest dumpprivkey <address>
bitcoin-cli -regtest getaddressinfo <address>`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Step 2: Add Wallet via CLI</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- add-wallet --xpub "xpub..." --label "My Wallet"`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Step 3: Add Wallet via API</h4>
                      <CodeBlock 
                        language="http"
                        code={`POST /wallets
Authorization: Bearer <token>
Content-Type: application/json

{
  "xpub": "xpub...",
  "label": "My Wallet",
  "description": "Optional description"
}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Managing Multiple Wallets</h3>
                  <p className="text-gray-300 mb-4">
                    Organize your Bitcoin holdings across multiple wallets for better management and security.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">List All Wallets</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- list-wallets`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Get Wallet Details</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- wallet-details <wallet-id>`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Remove Wallet</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- remove-wallet <wallet-id>`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Analytics Guide */}
            <div className="card mb-20" id="portfolio-analytics">
              <h2 className="text-3xl font-bold text-white mb-8">📊 Portfolio Analytics</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Understanding Your Portfolio</h3>
                  <p className="text-gray-300 mb-4">
                    Track your Bitcoin portfolio performance, risk metrics, and historical data.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Portfolio Overview</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- portfolio`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Metrics</h4>
                      <CodeBlock 
                        language="http"
                        code={`GET /portfolio/performance
Authorization: Bearer <token>`}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
                  <p className="text-gray-300 mb-4">
                    Access advanced portfolio analytics powered by Bitcoin Research Kit (BRK).
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Portfolio Metrics</h4>
                      <CodeBlock 
                        language="http"
                        code={`GET /advanced-analytics/portfolio-metrics
Authorization: Bearer <token>
Query Parameters:
- wallets: Comma-separated wallet IDs (optional)`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Risk Analysis</h4>
                      <CodeBlock 
                        language="http"
                        code={`GET /advanced-analytics/risk-analysis
Authorization: Bearer <token>`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Monitoring Guide */}
            <div className="card mb-20" id="transaction-monitoring">
              <h2 className="text-3xl font-bold text-white mb-8">🔍 Transaction Monitoring</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Real-time Transaction Tracking</h3>
                  <p className="text-gray-300 mb-4">
                    Monitor all Bitcoin transactions across your wallets in real-time.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">View All Transactions</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- transactions-global`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Filter Transactions</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- transactions --wallet <wallet-id> --amount-min 0.1`}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Transaction Export</h3>
                  <p className="text-gray-300 mb-4">
                    Export transaction data for analysis, reporting, or compliance purposes.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Export to CSV</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- transactions-global --output csv > transactions.csv`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Export to JSON</h4>
                      <CodeBlock 
                        language="bash"
                        code={`npm run dev:cli -- transactions-global --output json > transactions.json`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Reporting Guide */}
            <div className="card mb-20" id="compliance-reporting">
              <h2 className="text-3xl font-bold text-white mb-8">📋 Compliance Reporting</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Generating Reports</h3>
                  <p className="text-gray-300 mb-4">
                    Create comprehensive reports for tax purposes, audits, and compliance requirements.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Financial Summary Report</h4>
                      <CodeBlock 
                        language="http"
                        code={`POST /reports/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "financial_summary",
  "dateRange": {
    "start": "2025-01-01",
    "end": "2025-12-31"
  },
  "wallets": ["wallet1", "wallet2"]
}`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Performance Report</h4>
                      <CodeBlock 
                        language="http"
                        code={`POST /reports/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "performance_analysis",
  "period": "1Y",
  "includeCharts": true
}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Audit Trail</h3>
                  <p className="text-gray-300 mb-4">
                    Access complete audit logs for all system activities and user actions.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">View Audit Logs</h4>
                      <CodeBlock 
                        language="http"
                        code={`GET /audit/logs
Authorization: Bearer <token>
Query Parameters:
- startDate: 2025-01-01
- endDate: 2025-12-31
- action: wallet_created`}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Export Audit Trail</h4>
                      <CodeBlock 
                        language="http"
                        code={`GET /audit/export
Authorization: Bearer <token>
Query Parameters:
- format: csv
- dateRange: 1M`}
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
                  Explore our API reference and troubleshooting guides for advanced usage.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/docs/api-documentation" 
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
                    API Reference
                  </Link>
                  <Link 
                    to="/docs/quickstart" 
                    className="btn-secondary"
                  >
                    Quick Start
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

export default UserGuides;
