import React from 'react';
import { USE_CASES } from '../constants/content';

const UseCases = () => {
  const useCases = [
    {
      ...USE_CASES[0],
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
      ...USE_CASES[1],
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
      ...USE_CASES[2],
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
    },
    {
      title: "Bitcoin Research & Development",
      description: "Advanced Bitcoin research capabilities with comprehensive network analytics, mining insights, and institutional-grade data for researchers and developers.",
      characteristics: [
        "Bitcoin Research Kit integration",
        "Network transaction analysis",
        "Mining pool analytics",
        "Research data export"
      ],
      icon: (
        <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-3 text-3xl font-bold">
            Use Cases
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            MyBitcoinFuture serves organizations across the spectrum of Bitcoin treasury management needs, 
            from basic portfolio tracking to advanced research and sovereign infrastructure.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div key={index} className="card">
              <div className="flex items-start mb-3">
                <div className="mr-3 text-primary-500 mt-1">
                  {useCase.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-1">
                    {useCase.characteristics.map((characteristic, cIndex) => (
                      <li key={cIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2 text-xs">✓</span>
                        {characteristic}
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

export default UseCases;
