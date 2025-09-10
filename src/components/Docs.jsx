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
  MagnifyingGlassIcon,
  DocumentTextIcon,
  KeyIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { searchDocumentation } from '../utils/documentationImporter';

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
          docFile: "QUICKSTART.md",
          icon: RocketLaunchIcon
        },
        { 
          title: "System Overview", 
          description: "Architecture and component overview",
          link: "/docs/system-overview",
          internal: true,
          docFile: "SYSTEM_OVERVIEW.md",
          icon: BuildingOfficeIcon
        },
        { 
          title: "Onboarding Guide", 
          description: "Enhanced setup and configuration",
          link: "/docs/onboarding-guide",
          internal: true,
          docFile: "ONBOARDING_GUIDE.md",
          icon: BookOpenIcon
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
          docFile: "QUICK_REFERENCE.md",
          icon: DocumentTextIcon
        },
        { 
          title: "Feature Overview", 
          description: "Complete feature list and capabilities",
          link: "/#features",
          internal: true,
          icon: ChartBarIcon
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
          link: "/docs/api-documentation",
          internal: true,
          docFile: "API_DOCUMENTATION.md",
          icon: CodeBracketIcon
        },
        { 
          title: "Authentication", 
          description: "JWT authentication and security",
          link: "/docs/api-documentation",
          internal: true,
          icon: KeyIcon
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
          link: "/docs/quickstart",
          internal: true,
          icon: WrenchScrewdriverIcon
        },
        { 
          title: "Deployment Guide", 
          description: "Deployment and operations guide",
          link: "/docs/quickstart",
          internal: true,
          icon: ServerIcon
        },
        { 
          title: "Source Code", 
          description: "Browse all repositories and source",
          link: "https://github.com/MyBitcoinFuture",
          internal: false,
          icon: CodeBracketIcon
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
          internal: true,
          icon: ShieldCheckIcon
        },
        { 
          title: "Technical Documentation", 
          description: "Detailed technical references and architecture",
          link: "/docs/system-overview",
          internal: true,
          icon: DocumentTextIcon
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <main>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="doc-subtitle">
                Complete technical reference for deployment, API integration, and advanced features.
              </p>
            </div>

            {/* Search Bar */}
            <div className="search-container">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="search-input"
                />
                {isSearching && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-500"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="search-results">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Search Results ({searchResults.length})
                  </h2>
                  <div className="text-sm text-slate-400">
                    Found in {searchResults.length} document{searchResults.length !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="space-y-6">
                  {searchResults.map((result, index) => (
                    <div key={index} className="search-result-item">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors">
                          {result.metadata.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-600">
                            {result.metadata.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                            <span className="text-xs text-primary-400 font-medium">
                              {Math.round(result.relevance * 100)}% match
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{result.metadata.description}</p>
                      
                      {/* Show match highlights if available */}
                      {result.matches && result.matches.length > 0 && (
                        <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
                          <p className="text-xs text-slate-400 mb-2 font-medium">Matches found in:</p>
                          <div className="flex flex-wrap gap-2">
                            {result.matches.slice(0, 3).map((match, matchIndex) => (
                              <span key={matchIndex} className="text-xs bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full border border-primary-800">
                                {match.key}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/docs/${result.docPath.replace('.md', '').toLowerCase().replace(/_/g, '-')}`}
                          className="text-primary-400 hover:text-primary-300 text-sm font-medium inline-flex items-center gap-2 transition-colors group/link"
                        >
                          <span>View Documentation</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                        <span className="text-xs text-slate-500">
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
                  <div key={index} className="doc-card">
                    <div className="doc-category-header">
                      <div className="doc-category-icon">
                        <IconComponent className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="doc-category-title">
                          {category.title}
                        </h3>
                        <p className="doc-category-description">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => {
                        const ItemIconComponent = item.icon;
                        return (
                          <div key={itemIndex} className="doc-item">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  {ItemIconComponent && (
                                    <div className="doc-item-icon">
                                      <ItemIconComponent className="w-4 h-4 text-primary-400" />
                                    </div>
                                  )}
                                  <h4 className="doc-item-title">
                                    {item.title}
                                  </h4>
                                </div>
                                <p className="doc-item-description">{item.description}</p>
                                {item.link && (
                                  item.internal ? (
                                    <Link 
                                      to={item.link}
                                      className="doc-item-link"
                                    >
                                      <span>View Documentation</span>
                                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                  ) : (
                                    <a 
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="doc-item-link"
                                    >
                                      <span>View Documentation</span>
                                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </section>
      </main>
    </div>
  );
};

export default Docs;

