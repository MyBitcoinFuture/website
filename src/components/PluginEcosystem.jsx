import React from 'react';

const PluginEcosystem = () => {
  const pluginCategories = [
    {
      title: "Business Operations",
      description: "Streamline your Bitcoin operations with Lightning payments, governance automation, and workflow optimization",
      plugins: [
        {
          name: "Lightning Integration Pro",
          description: "Accept Lightning payments instantly with multi-provider support and automated invoice management",
          features: ["Instant payments", "Multi-provider routing", "Automated invoices", "Channel optimization"],
          price: "$49/month"
        },
        {
          name: "Treasury Governance",
          description: "Automate board decisions and policy enforcement for professional Bitcoin treasury management",
          features: ["Automated voting", "Policy enforcement", "Stakeholder management", "Compliance tracking"],
          price: "$99/month"
        },
        {
          name: "Workflow Automation",
          description: "Eliminate manual processes with smart triggers and conditional workflows for Bitcoin operations",
          features: ["Smart triggers", "Conditional workflows", "API integrations", "Process automation"],
          price: "$59/month"
        }
      ]
    },
    {
      title: "Analytics & Integration",
      description: "Connect your Bitcoin treasury with existing business systems and get deeper insights",
      plugins: [
        {
          name: "Accounting Integration Pro",
          description: "Seamlessly sync Bitcoin transactions with QuickBooks, Xero, and other accounting systems",
          features: ["QuickBooks sync", "Xero integration", "Tax reporting", "Audit trails"],
          price: "$79/month"
        },
        {
          name: "Advanced Analytics",
          description: "Get institutional-grade insights with comprehensive portfolio analytics and risk assessment",
          features: ["Portfolio analytics", "Risk assessment", "Performance tracking", "Custom dashboards"],
          price: "$69/month"
        },
        {
          name: "Custom Branding Pro",
          description: "White-label your Bitcoin treasury platform with custom themes and branded reporting",
          features: ["Custom themes", "Branded reports", "White-label options", "Custom domains"],
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
            Extend Your Bitcoin Treasury with Premium Plugins
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Unlock advanced features with our professional plugin ecosystem. From Lightning payments 
            to accounting integration - everything you need for enterprise Bitcoin treasury management.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {pluginCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.plugins.map((plugin, pluginIndex) => (
                  <div key={pluginIndex} className="bg-primary-500/5 border border-primary-500/20 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base mb-2">
                          {plugin.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {plugin.description}
                        </p>
                      </div>
                      {plugin.price && (
                        <div className="text-right ml-4">
                          <div className="text-primary-500 font-bold text-lg">{plugin.price}</div>
                          <div className="text-gray-400 text-xs">per month</div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {plugin.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">
                          {feature}
                        </span>
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
