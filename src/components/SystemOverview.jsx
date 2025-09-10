import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import CodeBlock from './CodeBlock';
import Breadcrumbs from './ui/Breadcrumbs';

const SystemOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'System Overview' }]} />
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">System Overview</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                MyBitcoinFuture is a comprehensive Bitcoin Treasury Management System that provides multi-wallet tracking, 
                portfolio analytics, transaction monitoring, enhanced setup wizard, theme system, and reporting capabilities.
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">System Architecture</h2>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-8">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────┐
│                    MyBitcoinFuture System Architecture     │
│                                                             │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────┐
│  │  Desktop App    │    │   Web Frontend  │    │   CLI Interface │
│  │  (Electron)     │    │   (React)       │    │   (Commander)   │
│  │                 │    │   Port: 3003    │    │                 │
│  └─────────────────┘    └─────────────────┘    └─────────────────┘
│           │                       │                        │
│           └───────────────────────┼────────────────────────┘
│                                   │                        │
│  ┌─────────────────────────────────┼────────────────────────┐
│  │         Backend API Server      │                        │
│  │         (Node.js/Express)       │                        │
│  │         Port: 3100              │                        │
│  └─────────────────────────────────┘                        │
│                                   │                        │
│  ┌─────────────────────────────────┼────────────────────────┐
│  │         Data Layer              │                        │
│  │  ┌─────────────┐ ┌─────────────┐│                        │
│  │  │   SQLite    │ │   Redis     ││                        │
│  │  │  Database   │ │   Cache     ││                        │
│  │  └─────────────┘ └─────────────┘│                        │
│  └─────────────────────────────────┘                        │
│                                   │                        │
│  ┌─────────────────────────────────┼────────────────────────┐
│  │         Bitcoin Integration     │                        │
│  │  ┌─────────────┐ ┌─────────────┐│                        │
│  │  │  Bitcoin    │ │  Public     ││                        │
│  │  │    Core     │ │   APIs      ││                        │
│  │  │     RPC     │ │ (Mempool,   ││                        │
│  │  │             │ │ Blockstream)││                        │
│  │  └─────────────┘ └─────────────┘│                        │
│  └─────────────────────────────────┘                        │
└─────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Frontend Layer</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• React-based web interface</li>
                    <li>• Material-UI components</li>
                    <li>• Enhanced setup wizard</li>
                    <li>• Theme system (light/dark)</li>
                    <li>• Real-time updates</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Backend Layer</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Node.js/Express API</li>
                    <li>• RESTful endpoints</li>
                    <li>• ErrorHandler integration</li>
                    <li>• SecureLogger implementation</li>
                    <li>• Authentication & authorization</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Data Layer</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• SQLite/PostgreSQL database</li>
                    <li>• Redis caching</li>
                    <li>• Data persistence</li>
                    <li>• Backup & recovery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Backend</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQLite/PostgreSQL</li>
                    <li>Redis</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>React</li>
                    <li>Material-UI</li>
                    <li>Vite</li>
                    <li>TradingView Charts</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Bitcoin</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>Bitcoin Core RPC</li>
                    <li>Mempool API</li>
                    <li>BRK integration</li>
                    <li>xpub derivation</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>JWT authentication</li>
                    <li>2FA support</li>
                    <li>Role-based access</li>
                    <li>Audit logging</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Core Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Multi-Wallet Management</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Track multiple Bitcoin wallets via xpub</li>
                    <li>• Real-time balance monitoring</li>
                    <li>• Wallet hierarchy and organization</li>
                    <li>• Security scoring and risk assessment</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Portfolio Analytics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Real-time portfolio overview</li>
                    <li>• Performance attribution and analysis</li>
                    <li>• Risk metrics and assessment</li>
                    <li>• Historical performance tracking</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Transaction Monitoring</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Global transaction filtering and search</li>
                    <li>• Advanced filtering by amount, type, date</li>
                    <li>• Transaction export (CSV, JSON)</li>
                    <li>• Transaction statistics and summaries</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Reporting & Compliance</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Financial summary reports</li>
                    <li>• Performance analysis reports</li>
                    <li>• Tax reporting capabilities</li>
                    <li>• Audit trail and compliance reports</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Services */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Key Services</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">WalletService</h3>
                  <p className="text-gray-300 mb-3">Multi-wallet management with xpub tracking</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Wallet creation and management</li>
                    <li>• Balance calculation and tracking</li>
                    <li>• Address derivation and validation</li>
                    <li>• Security assessment and scoring</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">TransactionService</h3>
                  <p className="text-gray-300 mb-3">Global transaction management and filtering</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Transaction discovery and indexing</li>
                    <li>• Advanced filtering and search</li>
                    <li>• Export and reporting capabilities</li>
                    <li>• Real-time transaction monitoring</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">PortfolioService</h3>
                  <p className="text-gray-300 mb-3">Portfolio analytics and performance tracking</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Portfolio value calculation</li>
                    <li>• Performance metrics and attribution</li>
                    <li>• Risk analysis and assessment</li>
                    <li>• Historical performance tracking</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">AnalyticsService</h3>
                  <p className="text-gray-300 mb-3">Advanced analytics and insights</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Market trend analysis</li>
                    <li>• Correlation and regression analysis</li>
                    <li>• Predictive modeling</li>
                    <li>• Custom analytics dashboards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Set up your Bitcoin treasury management system in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/docs/quickstart" 
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
                    Get Started
                  </Link>
                  <Link 
                    to="/docs/api-documentation" 
                    className="btn-secondary"
                  >
                    View API Reference
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

export default SystemOverview;
