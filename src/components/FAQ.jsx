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
      question: "What's included vs. what requires plugins?",
      answer: "The core system includes multi-wallet architecture, Bitcoin analytics, xpub-only security, self-hosted deployment, and basic Lightning Network capabilities. Premium plugins extend functionality with advanced Lightning integration ($49/month), governance automation ($99/month), accounting integration ($79/month), workflow automation ($59/month), and custom branding ($49/month)."
    },
    {
      question: "What deployment options are available?",
      answer: "Multiple deployment options are available including Docker containers, platform marketplaces (Start9, Umbrel), Kubernetes clusters, and traditional server deployments. Each option maintains the same security and functionality while accommodating different infrastructure preferences and operational requirements."
    },
    {
      question: "How does the plugin system work?",
      answer: "The plugin architecture provides modular extension of functionality through a standardized interface. Core features are always available, while premium plugins provide additional capabilities. This ensures the system can grow with your organization's needs without requiring complex migrations or system changes."
    },
    {
      question: "How does self-hosted deployment ensure data sovereignty?",
      answer: "Self-hosted deployment means you maintain complete control over your infrastructure, data, and network access. Your Bitcoin treasury data never leaves your environment, ensuring privacy, compliance with data regulations, and independence from third-party services. This is particularly important for organizations with strict security and compliance requirements."
    }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="w-full text-left cursor-pointer p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500/40 transition-all duration-300 focus-ring"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold" style={{ fontSize: '1.1rem' }}>
                    {faq.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUpIcon 
                      className="w-5 h-5 text-primary-500 transition-transform duration-300" 
                    />
                  ) : (
                    <ChevronDownIcon 
                      className="w-5 h-5 text-gray-400 transition-transform duration-300" 
                    />
                  )}
                </div>
              </button>
              
              {openItems.has(index) && (
                <div 
                  id={`faq-answer-${index}`}
                  className="mt-2 animate-fade-in p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                >
                  <p className="text-gray" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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
