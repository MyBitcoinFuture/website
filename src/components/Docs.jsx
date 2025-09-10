import React, { useState, useCallback } from 'react';
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
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { searchDocumentation } from '../utils/documentationImporter';
import DesignSystem from './DesignSystem';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(async (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    try {
      const results = await searchDocumentation(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup",
      icon: RocketLaunchIcon,
      items: [
        { 
          title: "Quick Start Guide", 
          description: "Fast deployment and configuration",
          link: "/docs/quickstart",
          internal: true,
          docFile: "QUICKSTART.md"
        },
        { 
          title: "System Overview", 
          description: "Architecture and component overview",
          link: "/docs/system-overview",
          internal: true,
          docFile: "SYSTEM_OVERVIEW.md"
        },
        { 
          title: "Onboarding Guide", 
          description: "Enhanced setup and configuration",
          link: "/docs/onboarding",
          internal: true,
          docFile: "ONBOARDING_GUIDE.md"
        }
      ]
    },
    {
      title: "User Documentation",
      description: "Step-by-step guides and user interface documentation",
      icon: GlobeAltIcon,
      items: [
        { 
          title: "Quick Reference", 
          description: "Essential CLI commands and API endpoints",
          link: "/docs/quick-reference",
          internal: true,
          docFile: "QUICK_REFERENCE.md"
        },
        { 
          title: "CLI Standards", 
          description: "Command-line interface consistency standards",
          link: "/docs/cli-standards",
          internal: true,
          docFile: "CLI_CONSISTENCY_STANDARDS.md"
        },
        { 
          title: "Feature Overview", 
          description: "Complete feature list and capabilities",
          link: "/#features",
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
          title: "API Documentation", 
          description: "Complete REST API endpoints and examples",
          link: "/docs/api-documentation",
          internal: true,
          docFile: "API_DOCUMENTATION.md"
        },
        { 
          title: "Authentication", 
          description: "JWT authentication and security",
          link: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/API_DOCUMENTATION.md#authentication",
          internal: false
        }
      ]
    },
    {
      title: "Development & Support",
      description: "Developer resources and technical references",
      icon: ShieldCheckIcon,
      items: [
        { 
          title: "Development Guide", 
          description: "Technical development and contribution guide",
          link: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/development/guide.md",
          internal: false
        },
        { 
          title: "Deployment Guide", 
          description: "Deployment and operations guide",
          link: "https://github.com/MyBitcoinFuture/dashboard/blob/main/docs/deployment/guide.md",
          internal: false
        },
        { 
          title: "Source Code", 
          description: "Browse all repositories and source",
          link: "https://github.com/MyBitcoinFuture",
          internal: false
        }
      ]
    },
    {
      title: "Support & Community",
      description: "Help and community resources",
      icon: ShieldCheckIcon,
      items: [
        { 
          title: "Contact & Support", 
          description: "Get help and community resources",
          link: "/#contact",
          internal: true
        },
        { 
          title: "Technical Documentation", 
          description: "Detailed technical references and architecture",
          link: "https://github.com/MyBitcoinFuture/dashboard/tree/main/docs",
          internal: false
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
              <h1 className="mb-8" style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}>
                <span className="text-white">MyBitcoinFuture</span>
                <br />
                <span className="text-white" style={{ 
                  background: 'linear-gradient(135deg, #ffffff 0%, #f97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Documentation</span>
              </h1>
              <p className="text-gray mb-8" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                Complete technical reference for deployment, API integration, and advanced features.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {isSearching && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-500"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-12 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Search Results ({searchResults.length})
                  </h2>
                  <div className="text-sm text-gray-400">
                    Found in {searchResults.length} document{searchResults.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="space-y-6">
                  {searchResults.map((result, index) => (
                    <div key={index} className="bg-gray-900/50 border border-gray-600 rounded-lg p-6 hover:border-orange-400 hover:bg-gray-900/70 transition-all duration-200 group">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">
                          {result.metadata.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-600">
                            {result.metadata.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-xs text-orange-400 font-medium">
                              {Math.round(result.relevance * 100)}% match
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{result.metadata.description}</p>
                      
                      {/* Show match highlights if available */}
                      {result.matches && result.matches.length > 0 && (
                        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                          <p className="text-xs text-gray-400 mb-2 font-medium">Matches found in:</p>
                          <div className="flex flex-wrap gap-2">
                            {result.matches.slice(0, 3).map((match, matchIndex) => (
                              <span key={matchIndex} className="text-xs bg-orange-900/50 text-orange-300 px-3 py-1 rounded-full border border-orange-800">
                                {match.key}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/docs/${result.docPath.replace('.md', '').toLowerCase().replace(/_/g, '-')}`}
                          className="text-orange-400 hover:text-orange-300 text-sm font-medium inline-flex items-center gap-2 transition-colors group/link"
                        >
                          <span>View Documentation</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-xs text-gray-500">
                          Last updated: {result.metadata.lastUpdated}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documentation Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:shadow-xl hover:border-orange-400 transition-all duration-300 hover:scale-[1.02] group">
                    <div className="flex items-center mb-8">
                      <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 mr-4 group-hover:bg-orange-500/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-2 border-gray-600 pl-4 py-3 hover:border-orange-400 transition-colors group/item">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-2 text-base group-hover/item:text-orange-300 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-gray-400 text-sm mb-3 leading-relaxed">{item.description}</p>
                              {item.link && (
                                item.internal ? (
                                  <Link 
                                    to={item.link}
                                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors inline-flex items-center gap-2 group/link"
                                  >
                                    <span>View Documentation</span>
                                    <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                  </Link>
                                ) : (
                                  <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors inline-flex items-center gap-2 group/link"
                                  >
                                    <span>View Documentation</span>
                                    <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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

            {/* Design System Section */}
            <DesignSystem />

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

