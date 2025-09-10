import { 
  RocketLaunchIcon,
  CodeBracketIcon,
  BookOpenIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  CommandLineIcon,
  ChartBarIcon,
  KeyIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  PuzzlePieceIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

const Documentation = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick setup and deployment guides for different platforms.",
      icon: <RocketLaunchIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "System Overview", href: "/docs/system-overview", status: "Available", icon: BuildingOfficeIcon },
        { name: "Quick Start Guide", href: "/docs/quickstart", status: "Available", icon: RocketLaunchIcon },
        { name: "Onboarding Guide", href: "/docs/onboarding-guide", status: "Available", icon: BookOpenIcon }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers and integrations.",
      icon: <CodeBracketIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "API Documentation", href: "/docs/api-documentation", status: "Available", icon: CodeBracketIcon },
        { name: "Quick Reference", href: "/docs/quick-reference", status: "Available", icon: DocumentTextIcon },
        { name: "Authentication", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md#authentication", status: "Available", external: true, icon: KeyIcon },
        { name: "REST Endpoints", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md#rest-api-endpoints", status: "Available", external: true, icon: ServerIcon }
      ]
    },
    {
      title: "Development",
      description: "Development guides and standards for contributors.",
      icon: <WrenchScrewdriverIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "Plugin Development", href: "https://github.com/MyBitcoinFuture/dashboard/tree/main/plugins", status: "Available", external: true, icon: PuzzlePieceIcon },
        { name: "Contributing Guidelines", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/CONTRIBUTING.md", status: "Available", external: true, icon: DocumentTextIcon },
        { name: "Development Setup", href: "https://github.com/MyBitcoinFuture/dashboard/blob/main/README.md#development", status: "Available", external: true, icon: CommandLineIcon }
      ]
    },
    {
      title: "Deployment",
      description: "Deployment guides for different platforms and environments.",
      icon: <CloudArrowUpIcon style={{ width: '24px', height: '24px', marginRight: '12px' }} />,
      links: [
        { name: "Docker Deployment", href: "https://github.com/MyBitcoinFuture/dashboard#docker-deployment", status: "Available", external: true, icon: CpuChipIcon },
        { name: "Start9 Installation", href: "https://github.com/MyBitcoinFuture/platform-manifests/tree/main/start9", status: "Available", external: true, icon: ComputerDesktopIcon },
        { name: "Umbrel App", href: "https://github.com/MyBitcoinFuture/platform-manifests/tree/main/umbrel", status: "Available", external: true, icon: ComputerDesktopIcon },
        { name: "Manual Installation", href: "https://github.com/MyBitcoinFuture/dashboard#installation", status: "Available", external: true, icon: CommandLineIcon }
      ]
    }
  ]

  return (
    <section id="documentation" className="section-padding" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)'
    }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up" style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Comprehensive Documentation
          </h2>
          <p className="text-gray animate-fade-in-up" style={{ 
            animationDelay: '0.2s',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Everything you need to deploy, configure, and extend MyBitcoinFuture. 
            Complete guides, API references, and development resources.
          </p>
        </div>

        <div className="grid" style={{ 
          gap: 'var(--space-xl)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {docSections.map((section, index) => (
            <div
              key={index}
              className="card stagger-item"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="icon-container" style={{ marginRight: 'var(--space-4)' }}>
                  {section.icon}
                </div>
                <h3 className="text-white" style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600'
                }}>
                  {section.title}
                </h3>
              </div>
              
              <p className="text-gray mb-6" style={{ 
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                {section.description}
              </p>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const LinkIconComponent = link.icon;
                  return (
                    <div key={linkIndex} className="flex items-center justify-between">
                      <a 
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="nav-link"
                        style={{ 
                          color: 'var(--color-primary)',
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {LinkIconComponent && (
                          <LinkIconComponent style={{ width: '16px', height: '16px' }} />
                        )}
                        {link.name}
                        {link.external && (
                          <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </a>
                      <span 
                        style={{
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.75rem',
                          borderRadius: '9999px',
                          backgroundColor: link.status === 'Available' 
                            ? 'rgba(16, 185, 129, 0.2)' 
                            : 'rgba(245, 158, 11, 0.2)',
                          color: link.status === 'Available' 
                            ? '#10b981' 
                            : '#f59e0b'
                        }}
                      >
                        {link.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/docs"
            className="btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              minHeight: '48px'
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
