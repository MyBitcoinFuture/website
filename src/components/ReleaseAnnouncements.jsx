import React, { useState, useEffect } from 'react';
import { FaRocket, FaBug, FaStar, FaTools, FaShieldAlt, FaDownload, FaGithub } from 'react-icons/fa';

const ReleaseAnnouncements = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/repos/MyBitcoinFuture/dashboard/releases?per_page=5');
      if (!response.ok) {
        throw new Error('Failed to fetch releases');
      }
      const data = await response.json();
      setReleases(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const parseChangelog = (body) => {
    if (!body) return { features: [], fixes: [], improvements: [], security: [] };
    
    const lines = body.split('\n');
    const sections = {
      features: [],
      fixes: [],
      improvements: [],
      security: []
    };
    
    let currentSection = 'improvements';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## 🚀') || trimmed.toLowerCase().includes('feature')) {
        currentSection = 'features';
      } else if (trimmed.startsWith('## 🐛') || trimmed.toLowerCase().includes('fix')) {
        currentSection = 'fixes';
      } else if (trimmed.startsWith('## 🔧') || trimmed.toLowerCase().includes('improvement')) {
        currentSection = 'improvements';
      } else if (trimmed.startsWith('## 🔒') || trimmed.toLowerCase().includes('security')) {
        currentSection = 'security';
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        const item = trimmed.replace(/^[-•]\s*/, '');
        if (item && item.length > 3) {
          sections[currentSection].push(item);
        }
      }
    });
    
    return sections;
  };

  const getSectionIcon = (section) => {
    switch (section) {
      case 'features': return <FaRocket className="text-green-500" />;
      case 'fixes': return <FaBug className="text-red-500" />;
      case 'improvements': return <FaTools className="text-blue-500" />;
      case 'security': return <FaShieldAlt className="text-yellow-500" />;
      default: return <FaStar className="text-orange-500" />;
    }
  };

  const getSectionTitle = (section) => {
    switch (section) {
      case 'features': return 'New Features';
      case 'fixes': return 'Bug Fixes';
      case 'improvements': return 'Improvements';
      case 'security': return 'Security Updates';
      default: return 'Other Changes';
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4">Loading announcements...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-300">Error loading announcements: {error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Release Announcements
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest features, improvements, and security updates
          </p>
        </div>

        {/* Release Cards */}
        <div className="space-y-8">
          {releases.map((release, index) => {
            const changelog = parseChangelog(release.body);
            const hasChanges = Object.values(changelog).some(section => section.length > 0);
            
            return (
              <div 
                key={release.id}
                className={`bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-colors ${
                  index === 0 ? 'ring-2 ring-orange-500/50' : ''
                }`}
              >
                {/* Release Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {index === 0 && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Latest
                        </span>
                      )}
                      <h3 className="text-xl font-bold">{release.name}</h3>
                      <span className="text-gray-400 text-sm">{release.tag_name}</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Released {new Date(release.published_at).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                    >
                      <FaGithub />
                      View
                    </a>
                    {release.assets && release.assets.length > 0 && (
                      <a 
                        href={release.assets[0].browser_download_url}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                      >
                        <FaDownload />
                        Download
                      </a>
                    )}
                  </div>
                </div>

                {/* Release Description */}
                {release.body && (
                  <div className="mb-6">
                    <div 
                      className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ 
                        __html: release.body
                          .split('\n\n')[0] // First paragraph only
                          .replace(/\n/g, '<br>')
                          .substring(0, 300) + (release.body.length > 300 ? '...' : '')
                      }}
                    />
                  </div>
                )}

                {/* Changelog Sections */}
                {hasChanges && (
                  <div className="space-y-4">
                    {Object.entries(changelog).map(([section, items]) => {
                      if (items.length === 0) return null;
                      
                      return (
                        <div key={section} className="bg-gray-700/30 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            {getSectionIcon(section)}
                            <h4 className="font-semibold">{getSectionTitle(section)}</h4>
                            <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs">
                              {items.length}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {items.slice(0, 5).map((item, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                <span className="text-gray-500 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                            {items.length > 5 && (
                              <li className="text-sm text-gray-400 italic">
                                ...and {items.length - 5} more changes
                              </li>
                            )}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Download Stats */}
                {release.assets && release.assets.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>
                        {release.assets.length} asset{release.assets.length !== 1 ? 's' : ''} available
                      </span>
                      <span>
                        {release.assets.reduce((total, asset) => total + asset.download_count, 0)} total downloads
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Releases Link */}
        <div className="text-center mt-8">
          <a 
            href="/releases"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FaDownload />
            View All Releases
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReleaseAnnouncements; 