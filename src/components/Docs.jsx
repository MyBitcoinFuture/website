import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
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
  BookOpenIcon 
} from '@heroicons/react/24/outline';

const Docs = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup",
      icon: RocketLaunchIcon,
      items: [
        { title: "Installation", description: "Clone and install the monorepo", status: "available" },
        { title: "Environment Setup", description: "Configure .env and dependencies", status: "available" },
        { title: "Development Mode", description: "Start all services with npm run dev", status: "available" },
        { title: "First Wallet", description: "Add your first Bitcoin wallet", status: "available" }
      ]
    },
    {
      title: "Monorepo Architecture",
      description: "Understanding the hybrid monorepo structure",
      icon: BuildingOfficeIcon,
      items: [
        { title: "Workspace Overview", description: "API, Web, CLI, Desktop, Shared modules", status: "available" },
        { title: "Module Dependencies", description: "How modules interact and share code", status: "available" },
        { title: "Build System", description: "npm workspaces and build scripts", status: "available" },
        { title: "Development Workflow", description: "Working across multiple modules", status: "available" }
      ]
    },
    {
      title: "API Module",
      description: "Express.js API server with Bitcoin Core integration",
      icon: CpuChipIcon,
      items: [
        { title: "API Server Setup", description: "Express.js server configuration", status: "available" },
        { title: "Bitcoin Core RPC", description: "Integration with Bitcoin Core", status: "available" },
        { title: "BRK Integration", description: "Bitcoin Research Kit analytics", status: "available" },
        { title: "API Reference", description: "Complete REST API documentation", status: "coming-soon" }
      ]
    },
    {
      title: "Web Module",
      description: "React-based web interface with Material-UI",
      icon: GlobeAltIcon,
      items: [
        { title: "React Components", description: "Component architecture and structure", status: "available" },
        { title: "Material-UI Integration", description: "UI framework and theming", status: "available" },
        { title: "State Management", description: "Redux/Context API patterns", status: "available" },
        { title: "API Client", description: "Frontend API integration", status: "available" }
      ]
    },
    {
      title: "CLI Module",
      description: "Command-line interface for treasury operations",
      icon: CommandLineIcon,
      items: [
        { title: "CLI Installation", description: "Installing the command-line tools", status: "available" },
        { title: "Basic Commands", description: "Essential CLI operations", status: "available" },
        { title: "Wallet Operations", description: "Wallet management via CLI", status: "available" },
        { title: "Automation Scripts", description: "CLI automation and scripting", status: "coming-soon" }
      ]
    },
    {
      title: "Desktop Module",
      description: "Electron-based desktop application",
      icon: ComputerDesktopIcon,
      items: [
        { title: "Electron Setup", description: "Desktop app configuration", status: "available" },
        { title: "Main Process", description: "Electron main process logic", status: "available" },
        { title: "Renderer Process", description: "UI rendering and IPC", status: "available" },
        { title: "Desktop Features", description: "Native desktop capabilities", status: "coming-soon" }
      ]
    },
    {
      title: "Plugin System",
      description: "Extensible plugin architecture",
      icon: PuzzlePieceIcon,
      items: [
        { title: "Plugin Architecture", description: "Understanding the plugin system", status: "available" },
        { title: "IFTTT Integration", description: "Automated workflow plugins", status: "available" },
        { title: "Accounting Plugins", description: "Financial reporting plugins", status: "coming-soon" },
        { title: "Plugin Development", description: "Creating custom plugins", status: "coming-soon" }
      ]
    },
    {
      title: "Deployment",
      description: "Production deployment and infrastructure",
      icon: CloudArrowUpIcon,
      items: [
        { title: "Docker Deployment", description: "Containerized deployment with Docker Compose", status: "available" },
        { title: "Start9/Umbrel", description: "Home server deployment packages", status: "available" },
        { title: "Production Config", description: "Nginx, SSL, monitoring setup", status: "available" },
        { title: "Kubernetes", description: "Enterprise K8s deployment", status: "coming-soon" }
      ]
    },
    {
      title: "Monitoring & Observability",
      description: "System monitoring and observability",
      icon: ChartBarIcon,
      items: [
        { title: "Health Checks", description: "Service health monitoring", status: "available" },
        { title: "Prometheus Metrics", description: "Performance metrics collection", status: "available" },
        { title: "Grafana Dashboards", description: "Monitoring dashboards", status: "available" },
        { title: "Logging", description: "Centralized logging with ELK", status: "coming-soon" }
      ]
    },
    {
      title: "Security",
      description: "Security features and best practices",
      icon: ShieldCheckIcon,
      items: [
        { title: "Authentication", description: "JWT-based auth with 2FA", status: "available" },
        { title: "Authorization", description: "Role-based access control", status: "available" },
        { title: "Bitcoin Security", description: "xpub-only, no private keys", status: "available" },
        { title: "Audit Logging", description: "Complete operation audit trail", status: "coming-soon" }
      ]
    },
    {
      title: "Related Repositories",
      description: "Additional repositories in the ecosystem",
      icon: BookOpenIcon,
      items: [
        { title: "MyBitcoinFuture/plugins", description: "Plugin ecosystem repository", status: "available" },
        { title: "MyBitcoinFuture/core", description: "Infrastructure components", status: "available" },
        { title: "MyBitcoinFuture/monitoring", description: "Monitoring and observability", status: "available" },
        { title: "MyBitcoinFuture/platform-manifests", description: "Kubernetes/Helm manifests", status: "available" }
      ]
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>;
      case 'coming-soon':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Coming Soon</span>;
      default:
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Planned</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main>
        <section className="section-padding" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-16)' }}>
          <div className="container-max">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="mb-6">
                <span className="text-white">MyBitcoinFuture</span>
                <br />
                <span className="text-orange">Treasury Management Software</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem' }}>
                Complete technical reference for the enterprise Bitcoin treasury management software. 
                Comprehensive guides for deployment, API integration, and advanced features.
              </p>
            </div>

            {/* Repository Overview */}
            <div className="card mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">MyBitcoinFuture Treasury Dashboard</h2>
                <p className="text-slate-300 text-lg">
                  A comprehensive Bitcoin treasury management system with modular architecture
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="flex justify-center mb-2">
                    <BuildingOfficeIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">5 Core Modules</h3>
                  <p className="text-slate-400 text-sm">API, Web, CLI, Desktop, Shared</p>
                </div>
                <div className="text-center p-4">
                  <div className="flex justify-center mb-2">
                    <PuzzlePieceIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Plugin Ecosystem</h3>
                  <p className="text-slate-400 text-sm">Extensible plugin architecture</p>
                </div>
                <div className="text-center p-4">
                  <div className="flex justify-center mb-2">
                    <ChartBarIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">BRK Integration</h3>
                  <p className="text-slate-400 text-sm">Bitcoin Research Kit analytics</p>
                </div>
                <div className="text-center p-4">
                  <div className="flex justify-center mb-2">
                    <CloudArrowUpIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Production Ready</h3>
                  <p className="text-slate-400 text-sm">Docker, monitoring, security</p>
                </div>
              </div>
            </div>

            {/* Documentation Tree */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="card stagger-item">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <IconComponent className="w-8 h-8 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-slate-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-2 border-slate-700 pl-4 py-2">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-1">{item.title}</h4>
                              <p className="text-slate-400 text-sm">{item.description}</p>
                            </div>
                            <div className="ml-4">
                              {getStatusBadge(item.status)}
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
            <div className="text-center mt-16">
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-slate-300 mb-6">
                  Clone the repository and have the full system running in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/getting-started" className="btn-primary">
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
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Docs;

