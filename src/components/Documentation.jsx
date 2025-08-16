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
        { name: "Quick Start Guide", href: "#", status: "Coming Soon" },
        { name: "Docker Deployment", href: "#", status: "Coming Soon" },
        { name: "Start9 Installation", href: "#", status: "Coming Soon" },
        { name: "Umbrel Setup", href: "#", status: "Coming Soon" }
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
        { name: "REST API Reference", href: "#", status: "Coming Soon" },
        { name: "Authentication", href: "#", status: "Coming Soon" },
        { name: "WebSocket API", href: "#", status: "Coming Soon" },
        { name: "Rate Limits", href: "#", status: "Coming Soon" }
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
        { name: "Plugin Architecture", href: "#", status: "Coming Soon" },
        { name: "Creating Your First Plugin", href: "#", status: "Coming Soon" },
        { name: "Plugin API Reference", href: "#", status: "Coming Soon" },
        { name: "Plugin Marketplace", href: "#", status: "Coming Soon" }
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
        { name: "Wallet Management", href: "#", status: "Coming Soon" },
        { name: "Analytics Dashboard", href: "#", status: "Coming Soon" },
        { name: "Compliance Reporting", href: "#", status: "Coming Soon" },
        { name: "Security Best Practices", href: "#", status: "Coming Soon" }
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
                    <span className="text-primary-300">{link.name}</span>
                    <span className="text-yellow-400 text-sm font-medium">{link.status}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Notice */}
        <div className="mt-16 bg-primary-800/30 rounded-lg p-8 border border-primary-700">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Documentation Coming Soon
            </h3>
            <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
              We're working on comprehensive documentation that will cover everything from 
              quick start guides to advanced plugin development. All documentation will be 
              generated using AI assistance for maximum accuracy and completeness.
            </p>
            <a
              href="https://github.com/MyBitcoinFuture"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow Development on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation
