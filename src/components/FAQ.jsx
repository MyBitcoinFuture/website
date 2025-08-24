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
      question: "What enterprise capabilities are available?",
      answer: "The system provides comprehensive enterprise features including Lightning Network integration for payments, governance automation for board oversight, accounting integration for financial reporting, multi-signature management for institutional security, workflow automation for operational efficiency, and custom branding for professional presentation."
    },
    {
      question: "How does the plugin architecture work?",
      answer: "The plugin architecture provides modular extension of functionality through a standardized interface. Core features are always available, while enterprise plugins provide additional capabilities like Lightning Network integration, governance automation, accounting integration, and custom branding. This ensures the system can grow with your organization's needs."
    },
    {
      question: "What deployment options are available?",
      answer: "Multiple deployment options are available including Docker containers, platform marketplaces (Start9, Umbrel), Kubernetes clusters, and traditional server deployments. Each option maintains the same security and functionality while accommodating different infrastructure preferences and operational requirements."
    },
    {
      question: "How does the system handle compliance and reporting?",
      answer: "The system provides comprehensive compliance and reporting capabilities including automated tax reporting, cost basis tracking, audit trails, governance compliance, and regulatory reporting. Enterprise plugins extend these capabilities with professional accounting integration and advanced analytics for institutional requirements."
    },
    {
      question: "What automation capabilities are available?",
      answer: "The system provides advanced automation capabilities including workflow automation, smart triggers, conditional actions, webhook integration, and process automation. This enables organizations to automate routine treasury operations, compliance processes, and governance workflows for operational efficiency."
    },
    {
      question: "How does the system support institutional use cases?",
      answer: "The system is designed specifically for institutional use cases with multi-signature management, governance automation, compliance reporting, enterprise security, and professional integration capabilities. It provides the tools and infrastructure needed for organizations to manage Bitcoin as a treasury asset with institutional-grade security and oversight."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-gray animate-fade-in-up" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto', animationDelay: '0.2s' }}>
            Common questions about enterprise Bitcoin treasury management, security architecture, 
            and professional capabilities for institutional use cases.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 stagger-item" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 focus-ring"
                style={{ cursor: 'pointer' }}
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold" style={{ fontSize: '1.1rem' }}>
                    {faq.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400 transition-transform duration-300" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openItems.has(index) && (
                <div 
                  id={`faq-answer-${index}`}
                  className="mt-2 p-6 bg-gray-900 rounded-lg border border-gray-700 animate-fade-in"
                  style={{ animationDelay: '0.1s' }}
                >
                  <p className="text-gray-300" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
