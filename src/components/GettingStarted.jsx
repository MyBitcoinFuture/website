import CodeBlock from './CodeBlock'
import Breadcrumbs from './ui/Breadcrumbs'
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
    <section className="py-16" style={{ paddingTop: '96px', paddingBottom: '64px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <Breadcrumbs items={[{ name: 'Getting Started' }]} />
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-white mb-6 text-3xl font-bold">
                Getting Started
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Understand the fundamental concepts and principles of professional Bitcoin treasury management.
              </p>
            </div>

            {/* Section 1: Understanding Bitcoin Treasury Management */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <RocketLaunchIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Understanding Bitcoin Treasury Management
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">What is Bitcoin Treasury Management?</div>
                    <p className="text-gray text-sm mb-4">
                      Professional Bitcoin treasury management involves systematic oversight of Bitcoin holdings 
                      with comprehensive monitoring, analytics, and governance capabilities.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Multi-wallet portfolio oversight</li>
                      <li>• Real-time balance monitoring</li>
                      <li>• Transaction history tracking</li>
                      <li>• Performance analytics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Core Principles</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Self-Custody Sovereignty</div>
                        <p className="text-gray text-sm">Complete control over Bitcoin holdings without third-party dependencies.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Professional Security</div>
                        <p className="text-gray text-sm">Enterprise-grade security with zero private key exposure.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Organizational Benefits</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Operational transparency</li>
                      <li>• Regulatory compliance</li>
                      <li>• Risk management</li>
                      <li>• Stakeholder reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Security Architecture Fundamentals */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <ShieldCheckIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Security Architecture Fundamentals
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">xpub-Only Architecture</div>
                    <p className="text-gray text-sm mb-4">
                      The system operates exclusively with extended public keys (xpubs), ensuring that 
                      private keys remain completely secure and never exposed to the treasury management system.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Zero private key handling</li>
                      <li>• Read-only access to balances</li>
                      <li>• Secure public key validation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Access Control</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Role-Based Security</div>
                        <p className="text-gray text-sm">Granular access control with defined roles and permissions.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Audit Logging</div>
                        <p className="text-gray text-sm">Comprehensive logging of all system activities and access.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Data Sovereignty</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Self-hosted deployment</li>
                      <li>• Complete data control</li>
                      <li>• Network isolation</li>
                      <li>• Privacy preservation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Multi-Wallet Architecture */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <WalletIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Multi-Wallet Architecture
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Organizational Wallet Management</div>
                    <p className="text-gray text-sm mb-4">
                      Professional organizations require multiple wallets for operational separation, 
                      risk management, and compliance with organizational policies.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Operational separation</li>
                      <li>• Risk management</li>
                      <li>• Compliance requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Wallet Types</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Hardware Wallets</div>
                        <p className="text-gray text-sm">Cold storage for long-term holdings and security.</p>
                      </div>

                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Management Capabilities</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Unified portfolio view</li>
                      <li>• Individual wallet tracking</li>
                      <li>• Transaction monitoring</li>
                      <li>• Balance aggregation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Analytics and Research */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <ChartBarIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Analytics and Research Capabilities
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Portfolio Analytics</div>
                    <p className="text-gray text-sm mb-4">
                      Comprehensive analytics provide insights into portfolio performance, 
                      risk metrics, and strategic decision-making capabilities.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Performance tracking</li>
                      <li>• Risk analysis</li>
                      <li>• Cost basis accounting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Bitcoin Research Integration</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Network Analytics</div>
                        <p className="text-gray text-sm">Deep insights into Bitcoin network activity and trends.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Market Intelligence</div>
                        <p className="text-gray text-sm">Comprehensive market data for informed decisions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Reporting Capabilities</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Executive dashboards</li>
                      <li>• Regulatory reporting</li>
                      <li>• Stakeholder updates</li>
                      <li>• Audit documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Deployment and Infrastructure */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <CloudArrowUpIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Deployment and Infrastructure
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Self-Hosted Deployment</div>
                    <p className="text-gray text-sm mb-4">
                      Complete control over infrastructure with self-hosted deployment options 
                      that ensure data sovereignty and operational independence.
                    </p>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Infrastructure control</li>
                      <li>• Network isolation</li>
                      <li>• Custom security policies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Platform Options</div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-white font-medium mb-2">Docker Deployment</div>
                        <p className="text-gray text-sm">Containerized deployment for consistent environments.</p>
                      </div>
                      <div>
                        <div className="text-white font-medium mb-2">Platform Marketplaces</div>
                        <p className="text-gray text-sm">One-click deployment through supported platforms.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="text-orange font-semibold mb-3 text-lg">Operational Requirements</div>
                    <ul className="text-gray space-y-2 text-sm">
                      <li>• Bitcoin node connection</li>
                      <li>• Secure network access</li>
                      <li>• Regular backups</li>
                      <li>• Monitoring and alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                <span className="inline-flex items-center">
                  <CheckCircleIcon style={{ width: '24px', height: '24px', marginRight: '16px' }} className="text-orange-400" />
                  Next Steps
                </span>
              </h2>
              
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                <div className="text-center">
                  <p className="text-gray mb-6" style={{ fontSize: '1.1rem' }}>
                    Now that you understand the fundamental concepts of Bitcoin treasury management, 
                    you're ready to explore deployment options and begin implementation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="/#deployment"
                      className="btn-primary"
                      style={{
                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                        color: '#ffffff',
                        border: '1px solid #f97316',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.375rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease-in-out',
                        fontSize: '1rem',
                        minHeight: '48px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
                      }}
                    >
                      Explore Deployment Options
                    </a>
                    <a
                      href="https://github.com/MyBitcoinFuture/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Documentation
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
  )
}

export default GettingStarted



