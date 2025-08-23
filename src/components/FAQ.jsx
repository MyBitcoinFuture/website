import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What is Bitcoin treasury management?",
      answer: "Bitcoin treasury management is the systematic oversight of Bitcoin holdings for organizations, involving portfolio monitoring, risk management, compliance reporting, and strategic decision-making. It provides professional-grade tools for managing Bitcoin as a treasury asset with the same rigor applied to traditional financial instruments."
    },
    {
      question: "How does the security model work?",
      answer: "The system operates on an xpub-only architecture, meaning it only requires extended public keys (xpubs) and never handles private keys. This ensures complete security while providing full visibility into wallet balances and transactions. Private keys remain entirely under your control, typically stored in hardware wallets or secure environments."
    },
    {
      question: "What are the benefits of multi-wallet architecture?",
      answer: "Multi-wallet architecture provides operational separation, risk management, and compliance capabilities. Organizations can maintain separate wallets for different purposes (operational, reserve, compliance), implement multi-signature requirements, and achieve granular control over Bitcoin holdings while maintaining a unified view of the entire portfolio."
    },
    {
      question: "How does self-hosted deployment ensure data sovereignty?",
      answer: "Self-hosted deployment means you maintain complete control over your infrastructure, data, and network access. Your Bitcoin treasury data never leaves your environment, ensuring privacy, compliance with data regulations, and independence from third-party services. This is particularly important for organizations with strict security and compliance requirements."
    },
    {
      question: "What analytics and research capabilities are available?",
      answer: "The system provides comprehensive portfolio analytics including performance tracking, risk analysis, and cost basis accounting. It integrates with Bitcoin Research Kit for advanced network analytics, mining metrics, and market intelligence. This enables informed decision-making based on both portfolio-specific and broader Bitcoin market data."
    },
    {
      question: "How does the plugin architecture work?",
      answer: "The plugin architecture allows for modular extension of functionality through a standardized interface. Core features are always available, while premium plugins provide additional capabilities like Lightning Network integration, governance automation, accounting integration, and custom branding. This ensures the system can grow with your organization's needs."
    },
    {
      question: "What deployment options are available?",
      answer: "Multiple deployment options are available including Docker containers, platform marketplaces (Start9, Umbrel), Kubernetes clusters, and traditional server deployments. Each option maintains the same security and functionality while accommodating different infrastructure preferences and operational requirements."
    },
    {
      question: "How does the system handle compliance and reporting?",
      answer: "The system provides comprehensive audit logging, role-based access control, and reporting capabilities designed for organizational compliance. It supports regulatory reporting requirements, stakeholder updates, and executive dashboards while maintaining complete transparency and audit trails for all operations."
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto' }}>
            Common questions about Bitcoin treasury management concepts, security, and implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                style={{ cursor: 'pointer' }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUpIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-orange)', flexShrink: 0 }} />
                  ) : (
                    <ChevronDownIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--color-orange)', flexShrink: 0 }} />
                  )}
                </div>
              </button>
              
              {openItems.has(index) && (
                <div className="bg-gray-900 p-6 rounded-b-lg border-l border-r border-b border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray mb-6">
            Have additional questions about Bitcoin treasury management?
          </p>
          <a
            href="https://github.com/MyBitcoinFuture/dashboard"
            target="_blank"
            rel="noopener noreferrer"
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
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
