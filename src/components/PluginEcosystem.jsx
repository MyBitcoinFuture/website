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
          features: ["Invoice creation", "Payment routing", "Channel management", "Multi-provider support"],
          price: "$49/month"
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
          features: ["Board voting", "Meeting automation", "Policy enforcement", "Stakeholder management"],
          price: "$99/month"
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
          features: ["QuickBooks integration", "Xero integration", "Transaction sync", "Tax reporting"],
          price: "$79/month"
        },
        {
          name: "Advanced Analytics",
          description: "Comprehensive Bitcoin analytics with portfolio performance tracking",
          features: ["Portfolio analytics", "Risk analysis", "Performance tracking", "Custom reporting"],
          price: "$69/month"
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
          features: ["Smart triggers", "Conditional workflows", "Webhook integration", "Process automation"],
          price: "$59/month"
        },
        {
          name: "Custom Branding Pro",
          description: "White-label customization with custom themes and branding",
          features: ["Custom themes", "Logo upload", "Branded reports", "White-label options"],
          price: "$49/month"
        }
      ]
    }
  ];

  return (
    <section id="plugin-ecosystem" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-3 text-3xl font-bold">
            Enterprise Plugin Ecosystem
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional-grade plugins for enterprise Bitcoin treasury management, providing 
            comprehensive capabilities for institutional and business use cases.
          </p>
        </div>

        <div className="space-y-12">
          {pluginCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="stagger-item">
              <div className="text-center mb-8">
                <h3 className="text-white mb-2 text-xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-base max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {category.plugins.map((plugin, pluginIndex) => (
                  <div key={pluginIndex} className="card" style={{ 
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.03) 0%, rgba(249, 115, 22, 0.01) 100%)'
                  }}>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white text-lg font-semibold">
                        {plugin.name}
                      </h4>
                      {plugin.price && (
                        <div className="text-right">
                          <div className="text-orange font-bold text-lg">{plugin.price}</div>
                          <div className="text-gray text-xs">per month</div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                      {plugin.description}
                    </p>
                    <div className="space-y-3">
                      {plugin.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray">
                          <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-orange text-sm font-medium bg-orange-500/10 px-3 py-1 rounded-full">
                        ⭐ Premium Plugin
                      </span>
                      <button className="btn-secondary text-sm" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                        Learn More
                      </button>
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
              <a href="/docs" className="btn-secondary focus-ring">
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
