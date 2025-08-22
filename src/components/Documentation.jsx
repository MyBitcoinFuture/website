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
      icon: <BoltIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "System Overview", href: "/docs/system-overview", status: "Available" },
        { name: "Quick Start Guide", href: "/docs/quickstart", status: "Available" },
        { name: "Onboarding Guide", href: "/docs/onboarding", status: "Available" },
        { name: "CLI Standards", href: "/docs/cli-standards", status: "Available" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers and integrations.",
      icon: <CodeBracketIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "API Documentation", href: "/docs/api-documentation", status: "Available" },
        { name: "Quick Reference", href: "/docs/quick-reference", status: "Available" },
        { name: "Authentication", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md#authentication", status: "Available", external: true },
        { name: "REST Endpoints", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md#rest-api-endpoints", status: "Available", external: true }
      ]
    },
    {
      title: "Development",
      description: "Development guides and standards for contributors.",
      icon: <CogIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "CLI Consistency Standards", href: "/docs/cli-standards", status: "Available" },
        { name: "Plugin Development", href: "https://github.com/MyBitcoinFuture/dashboard/tree/main/plugins", status: "Available", external: true },
        { name: "Contributing Guidelines", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/CONTRIBUTING.md", status: "Available", external: true },
        { name: "Development Setup", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/README.md#development", status: "Available", external: true }
      ]
    },
    {
      title: "Deployment",
      description: "Deployment guides for different platforms and environments.",
      icon: <BoltIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "Docker Deployment", href: "https://github.com/MyBitcoinFuture/dashboard#docker-deployment", status: "Available", external: true },
        { name: "Start9 Installation", href: "https://github.com/MyBitcoinFuture/platform-manifests/tree/main/start9", status: "Available", external: true },
        { name: "Umbrel App", href: "https://github.com/MyBitcoinFuture/platform-manifests/tree/main/umbrel", status: "Available", external: true },
        { name: "Manual Installation", href: "https://github.com/MyBitcoinFuture/dashboard#installation", status: "Available", external: true }
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
            Complete guides, API references, and development resources.
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
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-orange-400 hover:text-orange-300 transition-colors flex items-center"
                    >
                      {link.name}
                      {link.external && (
                        <svg style={{ width: '12px', height: '12px', marginLeft: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
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
            style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              color: '#ffffff',
              border: '1px solid #f97316',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View All Documentation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Documentation
