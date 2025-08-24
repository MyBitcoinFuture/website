import React from 'react';

const PluginEcosystem = () => {
  const pluginCategories = [
    {
      title: "Payment & Lightning",
      description: "Lightning Network integration for Bitcoin-native business operations",
      plugins: [
        {
          name: "Lightning Integration Pro",
          description: "Multi-provider Lightning payments with invoice generation and channel management",
          features: ["Invoice creation", "Payment routing", "Channel management", "Multi-provider support"]
        }
      ]
    },
    {
      title: "Governance & Compliance",
      description: "Enterprise governance and compliance automation for institutional use",
      plugins: [
        {
          name: "Treasury Governance",
          description: "Board meeting automation with voting systems and policy enforcement",
          features: ["Board voting", "Meeting automation", "Policy enforcement", "Stakeholder management"]
        },

      ]
    },
    {
      title: "Accounting & Reporting",
      description: "Professional accounting integration and financial reporting capabilities",
      plugins: [
        {
          name: "Accounting Integration Pro",
          description: "Seamless integration with QuickBooks and other accounting systems",
          features: ["QuickBooks integration", "Xero integration", "Transaction sync", "Tax reporting"]
        },
        {
          name: "Advanced Analytics",
          description: "Comprehensive Bitcoin analytics with portfolio performance tracking",
          features: ["Portfolio analytics", "Risk analysis", "Performance tracking", "Custom reporting"]
        }
      ]
    },
    {
      title: "Automation & Customization",
      description: "Workflow automation and enterprise customization capabilities",
      plugins: [
        {
          name: "Workflow Automation",
          description: "Advanced automation with smart triggers and conditional workflows",
          features: ["Smart triggers", "Conditional workflows", "Webhook integration", "Process automation"]
        },
        {
          name: "Custom Branding Pro",
          description: "White-label customization with custom themes and branding",
          features: ["Custom themes", "Logo upload", "Branded reports", "White-label options"]
        }
      ]
    }
  ];

  return (
    <section id="plugin-ecosystem" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up">
            Enterprise Plugin Ecosystem
          </h2>
          <p className="text-gray animate-fade-in-up" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto', animationDelay: '0.2s' }}>
            Professional-grade plugins for enterprise Bitcoin treasury management, providing 
            comprehensive capabilities for institutional and business use cases.
          </p>
        </div>

        <div className="space-y-12">
          {pluginCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card stagger-item" style={{ animationDelay: `${0.1 * (categoryIndex + 1)}s` }}>
              <div className="mb-8">
                <h3 className="text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {category.title}
                </h3>
                <p className="text-gray" style={{ fontSize: '1.1rem' }}>
                  {category.description}
                </p>
              </div>

              <div className="grid" style={{ 
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
              }}>
                {category.plugins.map((plugin, pluginIndex) => (
                  <div key={pluginIndex} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="mb-4">
                      <h4 className="text-white mb-2" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                        {plugin.name}
                      </h4>
                      <p className="text-gray-300 mb-4" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                        {plugin.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {plugin.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-white mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Extensible Architecture
            </h3>
            <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Our plugin ecosystem is built on a professional architecture that enables custom development, 
              third-party integrations, and enterprise-specific solutions for Bitcoin treasury management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#deployment" className="btn-primary focus-ring">
                Deploy Enterprise Solution
              </a>
              <a href="#docs" className="btn-secondary focus-ring">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginEcosystem;
