const Documentation = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick setup and deployment guides for different platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
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
