import React from 'react';
import { Link } from 'react-router-dom';

const Docs = () => {
  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup",
      icon: "🚀",
      items: [
        { title: "Installation Guide", description: "Step-by-step installation instructions", status: "available" },
        { title: "Quick Start", description: "Get up and running in 5 minutes", status: "available" },
        { title: "Configuration", description: "Basic configuration options", status: "available" },
        { title: "First Wallet", description: "Adding your first Bitcoin wallet", status: "available" }
      ]
    },
    {
      title: "Core Platform",
      description: "Main system architecture and components",
      icon: "🏗️",
      items: [
        { title: "System Architecture", description: "Overview of the platform design", status: "available" },
        { title: "API Reference", description: "Complete REST API documentation", status: "coming-soon" },
        { title: "Database Schema", description: "Data models and relationships", status: "coming-soon" },
        { title: "Authentication", description: "Security and access control", status: "coming-soon" }
      ]
    },
    {
      title: "Treasury Management",
      description: "Multi-wallet tracking and portfolio management",
      icon: "💰",
      items: [
        { title: "Wallet Management", description: "Adding, removing, and monitoring wallets", status: "available" },
        { title: "Portfolio Analytics", description: "Performance tracking and insights", status: "available" },
        { title: "Transaction Monitoring", description: "Real-time transaction tracking", status: "available" },
        { title: "Risk Assessment", description: "Portfolio risk analysis and reporting", status: "coming-soon" }
      ]
    },
    {
      title: "Bitcoin Research Kit (BRK)",
      description: "Advanced analytics and research capabilities",
      icon: "📊",
      items: [
        { title: "BRK Integration", description: "Setting up and configuring BRK", status: "available" },
        { title: "Analytics API", description: "Advanced analytics endpoints", status: "coming-soon" },
        { title: "Research Tools", description: "Custom research and analysis tools", status: "coming-soon" },
        { title: "Data Export", description: "Exporting analytics data", status: "coming-soon" }
      ]
    },
    {
      title: "CLI Interface",
      description: "Command-line tools and automation",
      icon: "💻",
      items: [
        { title: "CLI Installation", description: "Installing the command-line tools", status: "available" },
        { title: "Basic Commands", description: "Essential CLI operations", status: "available" },
        { title: "Advanced Commands", description: "Power user CLI features", status: "coming-soon" },
        { title: "Automation", description: "Scripting and automation examples", status: "coming-soon" }
      ]
    },
    {
      title: "Deployment",
      description: "Production deployment and infrastructure",
      icon: "🚀",
      items: [
        { title: "Docker Deployment", description: "Containerized deployment guide", status: "available" },
        { title: "Start9/Umbrel", description: "Home server deployment", status: "available" },
        { title: "Cloud VPS", description: "Cloud deployment options", status: "coming-soon" },
        { title: "Kubernetes", description: "Enterprise Kubernetes deployment", status: "coming-soon" }
      ]
    },
    {
      title: "Plugin Development",
      description: "Building and distributing plugins",
      icon: "🔌",
      items: [
        { title: "Plugin Architecture", description: "Understanding the plugin system", status: "coming-soon" },
        { title: "Creating Plugins", description: "Step-by-step plugin development", status: "coming-soon" },
        { title: "Plugin API", description: "Plugin development API reference", status: "coming-soon" },
        { title: "Plugin Marketplace", description: "Distributing your plugins", status: "coming-soon" }
      ]
    },
    {
      title: "Monitoring & Observability",
      description: "System monitoring and alerting",
      icon: "📈",
      items: [
        { title: "Health Checks", description: "System health monitoring", status: "available" },
        { title: "Logging", description: "Log management and analysis", status: "available" },
        { title: "Metrics", description: "Performance metrics and dashboards", status: "coming-soon" },
        { title: "Alerting", description: "Setting up alerts and notifications", status: "coming-soon" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete guide to MyBitcoinFuture - from quick start to advanced features
          </p>
        </div>

        {/* Documentation Tree */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docCategories.map((category, index) => (
            <div key={index} className="card stagger-item">
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{category.icon}</div>
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
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6">
              Begin with our quick start guide and have your first wallet connected in minutes.
            </p>
            <Link to="/getting-started" className="btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;

