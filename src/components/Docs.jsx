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
          title: "Getting Started Guide", 
          description: "Complete installation and setup walkthrough",
          link: "/getting-started",
          internal: true
        },
        { 
          title: "Quick Start Guide", 
          description: "Fast deployment and configuration",
          link: "/docs/quick-start",
          internal: true
        },
        { 
          title: "System Overview", 
          description: "Architecture and component overview",
          link: "/docs/system-overview",
          internal: true
        }
      ]
    },
    {
      title: "User Documentation",
      description: "Step-by-step guides and user interface documentation",
      icon: GlobeAltIcon,
      items: [
        { 
          title: "User Guides", 
          description: "Complete user documentation and tutorials",
          link: "/docs/user-guides",
          internal: true
        },
        { 
          title: "Feature Overview", 
          description: "Complete feature list and capabilities",
          link: "/#features",
          internal: true
        },
        { 
          title: "Deployment Options", 
          description: "Docker, manual, and home server deployment",
          link: "/#deployment",
          internal: true
        }
      ]
    },
    {
      title: "API Documentation",
      description: "Complete REST API reference and integration guides",
      icon: CpuChipIcon,
      items: [
        { 
          title: "API Reference", 
          description: "Complete REST API endpoints and examples",
          link: "/docs/api-reference",
          internal: true
        },
        { 
          title: "Authentication", 
          description: "JWT authentication and security",
          link: "/docs/api-reference#authentication",
          internal: true
        },
        { 
          title: "WebSocket API", 
          description: "Real-time notifications and events",
          link: "/docs/api-reference#websocket",
          internal: true
        }
      ]
    },
    {
      title: "Plugin System",
      description: "Extensible plugin architecture and integrations",
      icon: PuzzlePieceIcon,
      items: [
        { 
          title: "Plugin Development", 
          description: "Creating custom plugins and extensions",
          link: "https://github.com/MyBitcoinFuture/plugins",
          internal: false
        },
        { 
          title: "Plugin API Reference", 
          description: "Technical plugin development reference",
          link: "https://github.com/MyBitcoinFuture/plugins/blob/main/README.md",
          internal: false
        },
        { 
          title: "Available Plugins", 
          description: "IFTTT, accounting, and compliance plugins",
          link: "/#features",
          internal: true
        }
      ]
    },
    {
      title: "Development & Support",
      description: "Developer resources and technical references",
      icon: ShieldCheckIcon,
      items: [
        { 
          title: "Technical Documentation", 
          description: "Detailed technical references and architecture",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs",
          internal: false
        },
        { 
          title: "Source Code", 
          description: "Browse all repositories and source",
          link: "https://github.com/MyBitcoinFuture",
          internal: false
        },
        { 
          title: "Contact & Support", 
          description: "Get help and community resources",
          link: "/#contact",
          internal: true
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
                      <div style={{ marginRight: '24px' }}>
                        <IconComponent style={{ width: '24px', height: '24px' }} className="text-orange-400" />
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
                                item.internal ? (
                                  <Link 
                                    to={item.link}
                                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                                  >
                                    View Documentation
                                  </Link>
                                ) : (
                                  <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors inline-flex items-center gap-1"
                                  >
                                    View Documentation
                                    <ArrowTopRightOnSquareIcon style={{ width: '16px', height: '16px' }} />
                                  </a>
                                )
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
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    View Repository
                    <ArrowTopRightOnSquareIcon style={{ width: '18px', height: '18px' }} />
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

