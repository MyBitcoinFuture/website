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
        { title: "Installation", description: "Clone and install the monorepo" },
        { title: "Environment Setup", description: "Configure .env and dependencies" },
        { title: "Development Mode", description: "Start all services with npm run dev" },
        { title: "First Wallet", description: "Add your first Bitcoin wallet" }
      ]
    },
    {
      title: "Monorepo Architecture",
      description: "Understanding the hybrid monorepo structure",
      icon: BuildingOfficeIcon,
      items: [
        { title: "Workspace Overview", description: "API, Web, CLI, Desktop, Shared modules" },
        { title: "Module Dependencies", description: "How modules interact and share code" },
        { title: "Build System", description: "npm workspaces and build scripts" },
        { title: "Development Workflow", description: "Working across multiple modules" }
      ]
    },
    {
      title: "API Module",
      description: "Express.js API server with Bitcoin Core integration",
      icon: CpuChipIcon,
      items: [
        { title: "API Server Setup", description: "Express.js server configuration" },
        { title: "Bitcoin Core RPC", description: "Integration with Bitcoin Core" },
        { title: "BRK Integration", description: "Bitcoin Research Kit analytics" },
        { title: "API Reference", description: "Complete REST API documentation" }
      ]
    },
    {
      title: "Web Module",
      description: "React-based web interface with Material-UI",
      icon: GlobeAltIcon,
      items: [
        { title: "React Components", description: "Component architecture and structure" },
        { title: "Material-UI Integration", description: "UI framework and theming" },
        { title: "State Management", description: "Redux/Context API patterns" },
        { title: "API Client", description: "Frontend API integration" }
      ]
    },
    {
      title: "CLI Module",
      description: "Command-line interface for treasury operations",
      icon: CommandLineIcon,
      items: [
        { title: "CLI Installation", description: "Installing the command-line tools" },
        { title: "Basic Commands", description: "Essential CLI operations" },
        { title: "Wallet Operations", description: "Wallet management via CLI" },
        { title: "Automation Scripts", description: "CLI automation and scripting" }
      ]
    },
    {
      title: "Desktop Module",
      description: "Electron-based desktop application",
      icon: ComputerDesktopIcon,
      items: [
        { title: "Electron Setup", description: "Desktop app configuration" },
        { title: "Main Process", description: "Electron main process logic" },
        { title: "Renderer Process", description: "UI rendering and IPC" },
        { title: "Desktop Features", description: "Native desktop capabilities" }
      ]
    },
    {
      title: "Plugin System",
      description: "Extensible plugin architecture",
      icon: PuzzlePieceIcon,
      items: [
        { title: "Plugin Architecture", description: "Understanding the plugin system" },
        { title: "IFTTT Integration", description: "Automated workflow plugins" },
        { title: "Accounting Plugins", description: "Financial reporting plugins" },
        { title: "Plugin Development", description: "Creating custom plugins" }
      ]
    },
    {
      title: "Deployment",
      description: "Production deployment and infrastructure",
      icon: CloudArrowUpIcon,
      items: [
        { title: "Docker Deployment", description: "Containerized deployment with Docker Compose" },
        { title: "Start9/Umbrel", description: "Home server deployment packages" },
        { title: "Production Config", description: "Nginx, SSL, monitoring setup" },
        { title: "Kubernetes", description: "Enterprise K8s deployment" }
      ]
    },
    {
      title: "Monitoring & Observability",
      description: "System monitoring and observability",
      icon: ChartBarIcon,
      items: [
        { title: "Health Checks", description: "Service health monitoring" },
        { title: "Prometheus Metrics", description: "Performance metrics collection" },
        { title: "Grafana Dashboards", description: "Monitoring dashboards" },
        { title: "Logging", description: "Centralized logging with ELK" }
      ]
    },
    {
      title: "Security",
      description: "Security features and best practices",
      icon: ShieldCheckIcon,
      items: [
        { title: "Authentication", description: "JWT-based auth with 2FA" },
        { title: "Authorization", description: "Role-based access control" },
        { title: "Bitcoin Security", description: "xpub-only, no private keys" },
        { title: "Audit Logging", description: "Complete operation audit trail" }
      ]
    },
    {
      title: "Repository Structure",
      description: "Current project organization",
      icon: BookOpenIcon,
      items: [
        { title: "MyBitcoinFuture/dashboard", description: "Main dashboard monorepo" },
        { title: "MyBitcoinFuture/plugins", description: "Plugin ecosystem repository" },
        { title: "MyBitcoinFuture/core", description: "Infrastructure components" },
        { title: "MyBitcoinFuture/platform-manifests", description: "Kubernetes/Helm manifests" }
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

