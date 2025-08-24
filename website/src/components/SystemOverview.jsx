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
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'System Overview' }]} />
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">System Overview</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                MyBitcoinFuture is a comprehensive Bitcoin Treasury Management System that provides multi-wallet tracking, 
                portfolio analytics, transaction monitoring, and reporting capabilities. The system operates with mock data for development 
                and integrates with real Bitcoin nodes and APIs for production use.
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

            {/* Core Functionality */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Core Functionality</h2>
              
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
                    <li>• Advanced filtering by amount, type, date, wallet</li>
                    <li>• Transaction export (CSV, JSON)</li>
                    <li>• Transaction statistics and summaries</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Enhanced Setup System</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Multi-step setup wizard with auto-discovery</li>
                    <li>• Automatic timezone and language detection</li>
                    <li>• Bitcoin node auto-discovery and configuration</li>
                    <li>• Sensible defaults with manual override options</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Theme System</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Professional theme customization</li>
                    <li>• Light and dark mode support</li>
                    <li>• Multiple theme variants (Bitcoin, Financial, Corporate)</li>
                    <li>• Persistent theme preferences</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Reporting System</h3>
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
                  <h3 className="text-xl font-bold text-white mb-3">ReportService</h3>
                  <p className="text-gray-300 mb-3">Reporting and export capabilities</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Financial summary reports</li>
                    <li>• Performance analysis reports</li>
                    <li>• Tax reporting capabilities</li>
                    <li>• Template-based report generation</li>
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

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">SecurityService</h3>
                  <p className="text-gray-300 mb-3">Authentication, authorization, and audit logging</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• JWT token-based authentication</li>
                    <li>• Role-based access control</li>
                    <li>• Session management</li>
                    <li>• Two-factor authentication support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Model */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Security Model</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Authentication</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• JWT token-based authentication</li>
                    <li>• Role-based access control</li>
                    <li>• Session management</li>
                    <li>• Two-factor authentication support</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Data Protection</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• xpub-only architecture (no private keys)</li>
                    <li>• Read-only Bitcoin operations</li>
                    <li>• Secure logging with automatic data redaction</li>
                    <li>• Input validation and sanitization</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Audit and Compliance</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Comprehensive audit logging</li>
                    <li>• Security event tracking</li>
                    <li>• Compliance reporting</li>
                    <li>• Data export and backup capabilities</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Error Handling</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Centralized error handling</li>
                    <li>• ValidationError handling</li>
                    <li>• NotFoundError handling</li>
                    <li>• Secure error responses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Integration Points */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Integration Points</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Bitcoin Services</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Bitcoin Core RPC</li>
                    <li>• Mempool.space API</li>
                    <li>• Blockstream API</li>
                    <li>• Electrum servers</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">External APIs</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Price data providers</li>
                    <li>• Market data sources</li>
                    <li>• Compliance services</li>
                    <li>• Notification services</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Development Tools</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Git version control</li>
                    <li>• npm package management</li>
                    <li>• Docker containerization</li>
                    <li>• CI/CD pipeline support</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Plugin System</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Extensible functionality through plugins</li>
                    <li>• Admin-protected plugin management</li>
                    <li>• Event-driven plugin architecture</li>
                    <li>• Marketplace for plugin discovery</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Characteristics */}
            <div className="card mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Performance Characteristics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Response Times</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• API responses under 200ms</li>
                    <li>• UI rendering under 100ms</li>
                    <li>• Theme switching under 50ms</li>
                    <li>• Database queries optimized</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Modular architecture</li>
                    <li>• Caching strategies</li>
                    <li>• Rate limiting</li>
                    <li>• Load balancing support</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Error handling and recovery</li>
                    <li>• Data validation</li>
                    <li>• Backup and restore</li>
                    <li>• Health monitoring</li>
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
                    to="/getting-started" 
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
