import React from 'react';

const BitcoinTreasuryConcepts = () => {
  const concepts = [
    {
      title: "Self-Custody Sovereignty",
      description: "Complete control over your Bitcoin holdings without relying on third-party custodians. Your keys, your Bitcoin.",
      principles: [
        "Zero custody risk",
        "Full transaction control", 
        "Privacy preservation",
        "Infrastructure independence"
      ]
    },
    {
      title: "Multi-Wallet Architecture",
      description: "Professional-grade wallet management supporting multiple xpub-based wallets for organizational needs.",
      principles: [
        "Separation of concerns",
        "Operational security",
        "Scalable management",
        "Organizational flexibility"
      ]
    },
    {
      title: "Bitcoin Analytics & Research",
      description: "Comprehensive Bitcoin analytics and research data for informed treasury management decisions.",
      principles: [
        "Portfolio performance tracking",
        "Risk analysis and management",
        "Cost basis accounting",
        "Market intelligence"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Bitcoin Treasury Management Fundamentals
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto' }}>
            Professional Bitcoin treasury management is built on fundamental principles of sovereignty, 
            security, and comprehensive analytics for informed decision-making.
          </p>
        </div>

        <div className="grid" style={{ gap: '2rem' }}>
          {concepts.map((concept, index) => (
            <div key={index} className="card">
              <h3 className="text-white mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                {concept.title}
              </h3>
              <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                {concept.description}
              </p>
              <ul className="space-y-2">
                {concept.principles.map((principle, pIndex) => (
                  <li key={pIndex} className="text-gray-300 flex items-center">
                    <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BitcoinTreasuryConcepts;
