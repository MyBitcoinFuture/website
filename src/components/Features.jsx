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
      description: "Complete data sovereignty with self-hosted deployment options including Docker, with planned support for Start9 and Umbrel.",
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


  return (
    <section id="features" className="py-16 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Enterprise Bitcoin Treasury Features
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {BRAND_MESSAGING.valueProposition}
          </p>
        </div>

        {/* Core Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="subsection-title">
              Core Features
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage your Bitcoin treasury professionally, included at no extra cost.
            </p>
          </div>
          
          <div className="feature-grid">
            {coreFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="card interactive-hover animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 text-primary-500 mt-1 p-2 bg-primary-500/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">
                      Always Available
                    </span>
                  </div>
                  <span className="text-green-400 text-xs font-medium bg-green-400/10 px-3 py-1 rounded-full">
                    ✓ Core
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Premium Features CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Need Advanced Features?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive plugin ecosystem with advanced Lightning integration, 
                treasury governance, accounting systems, and enterprise automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#plugin-ecosystem" className="btn-primary cta-enhanced">
                  View Plugin Ecosystem
                </a>
                <a href="#deployment" className="btn-secondary cta-enhanced">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
