import { BRAND_MESSAGING } from '../constants/content';

const Features = () => {
  const coreFeatures = [
    {
      title: "Multi-Wallet Architecture",
      description: "Manage multiple xpub-based wallets with real-time balance monitoring and transaction history.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Bitcoin Research & Analytics",
      description: "Bitcoin analytics and research data for informed treasury decisions with portfolio performance tracking.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "xpub-Only Security",
      description: "Maximum security with xpub-only architecture. No private keys stored, ensuring complete data sovereignty.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Self-Hosted Deployment",
      description: "Complete data sovereignty with self-hosted deployment options including Docker, Start9, and Umbrel.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Plugin System Infrastructure",
      description: "Extensible architecture with plugin marketplace for custom functionality and enterprise integrations.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Basic Lightning Integration",
      description: "Essential Lightning Network capabilities for plugin purchases and basic payment processing.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const premiumFeatures = [
    {
      title: "Advanced Lightning Integration",
      description: "Full Lightning Network capabilities with payment routing, channel management, and multi-provider support.",
      price: "$49/month",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Treasury Governance",
      description: "Board meeting automation, governance voting systems, and policy enforcement with stakeholder management.",
      price: "$99/month",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Accounting Integration",
      description: "Integration with QuickBooks, Xero, and other accounting systems for automated transaction synchronization.",
      price: "$79/month",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Workflow Automation",
      description: "Advanced automation with smart triggers, conditional workflows, and process management for operational efficiency.",
      price: "$59/month",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Custom Branding",
      description: "White-label customization with custom themes, logos, and branding for enterprise clients.",
      price: "$49/month",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0l-3-3m3 3H9" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-3 text-3xl font-bold">
            Enterprise Bitcoin Treasury Features
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {BRAND_MESSAGING.valueProposition}
          </p>
        </div>

        {/* Core Features Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-white mb-2 text-xl font-semibold">
              Core Features <span className="text-green-400">(Included)</span>
            </h3>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="card">
                <div className="flex items-start mb-3">
                  <div className="mr-3 text-primary-500 mt-1">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-full">
                    ✓ Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Features Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-white mb-2 text-xl font-semibold">
              Premium Plugins <span className="text-primary-500">(Subscription Required)</span>
            </h3>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="card border-primary-500/30 bg-primary-500/5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start flex-1">
                    <div className="mr-3 text-primary-500 mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-primary-500 font-bold text-lg">{feature.price}</div>
                    <div className="text-gray-400 text-xs">per month</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
