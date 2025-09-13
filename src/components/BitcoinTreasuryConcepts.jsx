import React from 'react';

const BitcoinTreasuryConcepts = () => {
  const concepts = [
    {
      title: "Complete Bitcoin Sovereignty",
      description: "Full control over your Bitcoin holdings without relying on third-party custodians. Your keys, your Bitcoin, your rules.",
      principles: [
        "Zero custody risk",
        "Full transaction control", 
        "Privacy preservation",
        "Infrastructure independence"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Professional Multi-Wallet Management",
      description: "Enterprise-grade wallet management supporting multiple Bitcoin wallets for complex organizational needs and treasury operations.",
      principles: [
        "Separation of concerns",
        "Operational security",
        "Scalable management",
        "Organizational flexibility"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Institutional-Grade Analytics",
      description: "Comprehensive Bitcoin analytics and research data powered by Bitcoin Research Kit for informed treasury management decisions.",
      principles: [
        "Portfolio performance tracking",
        "Risk analysis and management",
        "Cost basis accounting",
        "Market intelligence"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Enterprise Security & Compliance",
      description: "Built-in security features and compliance tools designed for institutional Bitcoin treasury management and regulatory requirements.",
      principles: [
        "Multi-signature wallet support",
        "Audit trail logging",
        "Role-based access control",
        "Regulatory reporting tools"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-3xl font-bold">
            Why Organizations Choose MyBitcoinFuture
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto' }}>
            The only Bitcoin treasury platform that combines institutional-grade analytics, complete sovereignty, 
            and enterprise features in a single self-hosted solution.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {concepts.map((concept, index) => (
            <div key={index} className="card">
              <div className="flex items-start mb-3">
                <div className="mr-3 text-primary-500 mt-1">
                  {concept.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {concept.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {concept.description}
                  </p>
                  <ul className="space-y-1">
                    {concept.principles.map((principle, pIndex) => (
                      <li key={pIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2 text-xs">✓</span>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BitcoinTreasuryConcepts;
