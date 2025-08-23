import React from 'react';

const UseCases = () => {
  const useCases = [
    {
      title: "Organizational Bitcoin Treasury",
      description: "Professional Bitcoin treasury management for organizations requiring secure, auditable, and scalable Bitcoin operations.",
      characteristics: [
        "Multi-wallet management",
        "Role-based access control",
        "Comprehensive audit trails",
        "Professional reporting"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Bitcoin Research & Analytics",
      description: "Advanced Bitcoin analytics and research capabilities for organizations requiring deep insights into Bitcoin network data.",
      characteristics: [
        "Bitcoin Research Kit integration",
        "Advanced UTXO analytics",
        "Mining metrics analysis",
        "Network transaction insights"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Sovereign Bitcoin Infrastructure",
      description: "Complete Bitcoin infrastructure deployment for organizations requiring full control over their Bitcoin operations.",
      characteristics: [
        "Self-hosted deployment",
        "Complete data sovereignty",
        "Network isolation",
        "Custom security policies"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Use Cases
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto' }}>
            MyBitcoinFuture serves organizations across the spectrum of Bitcoin treasury management needs, 
            from basic portfolio tracking to advanced research and sovereign infrastructure.
          </p>
        </div>

        <div className="grid" style={{ gap: '2rem' }}>
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <div className="icon-container" style={{ margin: '0 1rem 0 0' }}>
                  {useCase.icon}
                </div>
                <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {useCase.title}
                </h3>
              </div>
              <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.characteristics.map((characteristic, cIndex) => (
                  <li key={cIndex} className="text-gray-300 flex items-center">
                    <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {characteristic}
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

export default UseCases;
