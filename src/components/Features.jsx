const Features = () => {
  const features = [
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
      title: "Lightning Network Integration",
      description: "Lightning payment capabilities with invoice generation, payment routing, and channel management.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Treasury Governance",
      description: "Board meeting automation, governance voting systems, and policy enforcement with stakeholder management.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      title: "Accounting Integration",
      description: "Integration with QuickBooks and other accounting systems for automated transaction synchronization.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },

    {
      title: "Workflow Automation",
      description: "Automation with smart triggers, conditional workflows, and process management for operational efficiency.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Custom Branding",
      description: "White-label customization with custom themes, logos, and branding for enterprise clients.",
      icon: (
        <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0l-3-3m3 3H9" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up">
            Enterprise Bitcoin Treasury Features
          </h2>
          <p className="text-gray animate-fade-in-up" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto', animationDelay: '0.2s' }}>
            Professional Bitcoin treasury management with comprehensive capabilities for institutional 
            and enterprise use cases, built on proven security principles and extensible architecture.
          </p>
        </div>

        <div className="grid" style={{ 
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="card stagger-item" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className="flex items-center mb-4">
                <div className="text-orange mr-3 p-2 rounded-lg bg-orange-500/10">
                  {feature.icon}
                </div>
                <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
