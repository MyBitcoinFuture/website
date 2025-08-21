import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { 
  RocketLaunchIcon, 
  BuildingOfficeIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  CommandLineIcon, 
  ComputerDesktopIcon, 
  PuzzlePieceIcon, 
  CloudArrowUpIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BookOpenIcon,
  ServerIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const Docs = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup",
      icon: RocketLaunchIcon,
      items: [
        { 
          title: "Installation", 
          description: "Clone and install the monorepo",
          link: "https://github.com/MyBitcoinFuture/dashboard#quick-start"
        },
        { 
          title: "Environment Setup", 
          description: "Configure .env and dependencies",
          link: "https://github.com/MyBitcoinFuture/dashboard#prerequisites"
        },
        { 
          title: "Development Mode", 
          description: "Start all services with npm run dev",
          link: "https://github.com/MyBitcoinFuture/dashboard#development"
        },
        { 
          title: "First Wallet", 
          description: "Add your first Bitcoin wallet",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        }
      ]
    },
    {
      title: "API Module",
      description: "Express.js API server with Bitcoin Core integration",
      icon: CpuChipIcon,
      items: [
        { 
          title: "API Server Setup", 
          description: "Express.js server configuration",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api"
        },
        { 
          title: "Bitcoin Core RPC", 
          description: "Integration with Bitcoin Core",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api/bitcoin"
        },
        { 
          title: "BRK Integration", 
          description: "Bitcoin Research Kit analytics",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api/services/integration"
        },
        { 
          title: "API Reference", 
          description: "Complete REST API documentation",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        }
      ]
    },
    {
      title: "Web Module",
      description: "React-based web interface with Material-UI",
      icon: GlobeAltIcon,
      items: [
        { 
          title: "React Components", 
          description: "Component architecture and structure",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/web/src"
        },
        { 
          title: "Material-UI Integration", 
          description: "UI framework and theming",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/web/src/components"
        },
        { 
          title: "State Management", 
          description: "Redux/Context API patterns",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/web/src/context"
        },
        { 
          title: "API Client", 
          description: "Frontend API integration",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/web/src/services"
        }
      ]
    },
    {
      title: "CLI Module",
      description: "Command-line interface for treasury operations",
      icon: CommandLineIcon,
      items: [
        { 
          title: "CLI Installation", 
          description: "Installing the command-line tools",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/cli"
        },
        { 
          title: "Basic Commands", 
          description: "Essential CLI operations",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        },
        { 
          title: "Wallet Operations", 
          description: "Wallet management via CLI",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        },
        { 
          title: "Automation Scripts", 
          description: "CLI automation and scripting",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/scripts"
        }
      ]
    },
    {
      title: "Desktop Module",
      description: "Electron-based desktop application",
      icon: ComputerDesktopIcon,
      items: [
        { 
          title: "Electron Setup", 
          description: "Desktop app configuration",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/desktop"
        },
        { 
          title: "Main Process", 
          description: "Electron main process logic",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/desktop/src"
        },
        { 
          title: "Renderer Process", 
          description: "UI rendering and IPC",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/desktop/src"
        },
        { 
          title: "Desktop Features", 
          description: "Native desktop capabilities",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        }
      ]
    },
    {
      title: "Plugin System",
      description: "Extensible plugin architecture",
      icon: PuzzlePieceIcon,
      items: [
        { 
          title: "Plugin Architecture", 
          description: "Understanding the plugin system",
          link: "https://github.com/MyBitcoinFuture/plugins"
        },
        { 
          title: "IFTTT Integration", 
          description: "Automated workflow plugins",
          link: "https://github.com/MyBitcoinFuture/plugins"
        },
        { 
          title: "Accounting Plugins", 
          description: "Financial reporting plugins",
          link: "https://github.com/MyBitcoinFuture/plugins"
        },
        { 
          title: "Plugin Development", 
          description: "Creating custom plugins",
          link: "https://github.com/MyBitcoinFuture/plugins"
        }
      ]
    },
    {
      title: "Deployment",
      description: "Production deployment and infrastructure",
      icon: CloudArrowUpIcon,
      items: [
        { 
          title: "Docker Deployment", 
          description: "Containerized deployment with Docker Compose",
          link: "https://github.com/MyBitcoinFuture/dashboard#docker-deployment"
        },
        { 
          title: "Start9/Umbrel", 
          description: "Home server deployment packages",
          link: "https://github.com/MyBitcoinFuture/platform-manifests"
        },
        { 
          title: "Production Config", 
          description: "Nginx, SSL, monitoring setup",
          link: "https://github.com/MyBitcoinFuture/dashboard/blob/main/DEPLOYMENT.md"
        },
        { 
          title: "Kubernetes", 
          description: "Enterprise K8s deployment",
          link: "https://github.com/MyBitcoinFuture/platform-manifests/tree/main/kubernetes"
        }
      ]
    },
    {
      title: "Security",
      description: "Security features and best practices",
      icon: ShieldCheckIcon,
      items: [
        { 
          title: "Authentication", 
          description: "JWT-based auth with 2FA",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api/routes/core/auth.js"
        },
        { 
          title: "Authorization", 
          description: "Role-based access control",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api/routes/core/auth.js"
        },
        { 
          title: "Bitcoin Security", 
          description: "xpub-only, no private keys",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs"
        },
        { 
          title: "Audit Logging", 
          description: "Complete operation audit trail",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/api/routes/security/audit.js"
        }
      ]
    },
    {
      title: "Repository Structure",
      description: "Current project organization",
      icon: BookOpenIcon,
      items: [
        { 
          title: "MyBitcoinFuture/dashboard", 
          description: "Main dashboard monorepo",
          link: "https://github.com/MyBitcoinFuture/dashboard"
        },
        { 
          title: "MyBitcoinFuture/plugins", 
          description: "Plugin ecosystem repository",
          link: "https://github.com/MyBitcoinFuture/plugins"
        },
        { 
          title: "MyBitcoinFuture/core", 
          description: "Infrastructure components",
          link: "https://github.com/MyBitcoinFuture/core"
        },
        { 
          title: "MyBitcoinFuture/platform-manifests", 
          description: "Kubernetes/Helm manifests",
          link: "https://github.com/MyBitcoinFuture/platform-manifests"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="mb-8">
                <span className="text-white">MyBitcoinFuture</span>
                <br />
                <span className="text-orange">Documentation</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Complete technical reference for deployment, API integration, and advanced features.
              </p>
            </div>

            {/* Documentation Tree - Less dense layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="card hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                    <div className="flex items-center mb-8">
                      <div className="mr-6">
                        <IconComponent style={{ width: '40px', height: '40px' }} className="text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-2 border-slate-700 pl-4 py-3 hover:border-orange-400 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-2 text-base">{item.title}</h4>
                              <p className="text-slate-400 text-sm mb-3 leading-relaxed">{item.description}</p>
                              {item.link && (
                                <a 
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                                >
                                  View Documentation
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Clone the repository and have the full system running in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/getting-started" 
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
                    Get Started
                  </Link>
                  <a 
                    href="https://github.com/MyBitcoinFuture/dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Docs;

