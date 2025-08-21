import { 
  BoltIcon,
  CodeBracketIcon,
  BookOpenIcon,
  CogIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

const Documentation = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick setup and deployment guides for different platforms.",
      icon: <BoltIcon className="icon-small" />,
      links: [
        { name: "System Overview", href: "/docs/system-overview", status: "Available" },
        { name: "Quick Start Guide", href: "/docs/quick-start", status: "Available" },
        { name: "Docker Deployment", href: "/docs/deployment/docker", status: "Available" },
        { name: "Start9 Installation", href: "/docs/deployment/start9", status: "Available" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers and integrations.",
      icon: <CodeBracketIcon className="icon-small" />,
      links: [
        { name: "REST API Reference", href: "/docs/api-reference", status: "Available" },
        { name: "Authentication", href: "/docs/api-reference#authentication", status: "Available" },
        { name: "WebSocket API", href: "/docs/api-reference#websocket", status: "Available" },
        { name: "SDK Examples", href: "/docs/api-reference#sdk-examples", status: "Available" }
      ]
    },
    {
      title: "User Guides",
      description: "Comprehensive guides for treasury management and analytics.",
      icon: <BookOpenIcon className="icon-small" />,
      links: [
        { name: "Wallet Management", href: "/docs/user-guides/wallet-management", status: "Available" },
        { name: "Portfolio Analytics", href: "/docs/user-guides/portfolio-analytics", status: "Available" },
        { name: "Transaction Monitoring", href: "/docs/user-guides/transaction-monitoring", status: "Available" },
        { name: "Compliance Reporting", href: "/docs/user-guides/compliance-reporting", status: "Available" }
      ]
    },
    {
      title: "Plugin Development",
      description: "Build custom plugins and extend the platform functionality.",
      icon: <CogIcon className="icon-small" />,
      links: [
        { name: "Plugin Architecture", href: "/docs/plugin-development/architecture", status: "Available" },
        { name: "Creating Your First Plugin", href: "/docs/plugin-development/getting-started", status: "Available" },
        { name: "Plugin API Reference", href: "/docs/plugin-development/api", status: "Available" },
        { name: "LNBits Integration", href: "/docs/plugin-development/lnbits-integration", status: "Available" }
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues, solutions, and support resources.",
      icon: <QuestionMarkCircleIcon className="icon-small" />,
      links: [
        { name: "Common Issues", href: "/docs/troubleshooting/common-issues", status: "Available" },
        { name: "Bitcoin Core Setup", href: "/docs/troubleshooting/bitcoin-core", status: "Available" },
        { name: "Network Configuration", href: "/docs/troubleshooting/network", status: "Available" },
        { name: "Support Resources", href: "/docs/troubleshooting/support", status: "Available" }
      ]
    }
  ]

  return (
    <section id="documentation" className="section-padding bg-primary-900/50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Documentation
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Everything you need to deploy, configure, and extend MyBitcoinFuture. 
            Complete guides, API references, and plugin development resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {docSections.map((section, index) => (
            <div
              key={index}
              className="bg-primary-800/30 rounded-lg p-6 border border-primary-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
              </div>
              
              <p className="text-primary-300 mb-6">
                {section.description}
              </p>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center justify-between">
                    <a 
                      href={link.href}
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      {link.name}
                    </a>
                    <span 
                      className={`px-2 py-1 text-xs rounded-full ${
                        link.status === 'Available' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {link.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/docs"
            className="btn-primary"
          >
            View All Documentation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Documentation
