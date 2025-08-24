import React, { useState, useEffect } from 'react';
import { FaDownload, FaGithub, FaLinux, FaApple, FaWindows, FaEye, FaCode } from 'react-icons/fa';

const Releases = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRelease, setSelectedRelease] = useState(null);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      setLoading(true);
      // Fetch releases from GitHub API
      const response = await fetch('https://api.github.com/repos/MyBitcoinFuture/dashboard/releases?per_page=10');
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

  const getPlatformIcon = (filename) => {
    if (filename.includes('.AppImage') || filename.includes('.deb') || filename.includes('.rpm')) {
      return <FaLinux className="text-blue-500" />;
    } else if (filename.includes('.dmg')) {
      return <FaApple className="text-gray-500" />;
    } else if (filename.includes('.exe')) {
      return <FaWindows className="text-blue-600" />;
    }
    return <FaDownload className="text-green-500" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getReleaseType = (release) => {
    if (release.prerelease) return 'Pre-release';
    if (release.draft) return 'Draft';
    return 'Release';
  };

  const getReleaseBadgeColor = (release) => {
    if (release.prerelease) return 'bg-yellow-500';
    if (release.draft) return 'bg-gray-500';
    return 'bg-green-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-lg">Loading releases...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-xl font-bold text-red-400 mb-2">Error Loading Releases</h2>
              <p className="text-red-300">{error}</p>
              <button 
                onClick={fetchReleases}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Releases & Downloads
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download the latest version of MyBitcoinFuture Treasury Management System
          </p>
        </div>

        {/* Latest Release Highlight */}
        {releases.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getReleaseBadgeColor(releases[0])}`}>
                    {getReleaseType(releases[0])}
                  </span>
                  <h2 className="text-2xl font-bold mt-2">{releases[0].name}</h2>
                  <p className="text-gray-300 mt-1">
                    Released {new Date(releases[0].published_at).toLocaleDateString()}
                  </p>
                </div>
                <a 
                  href={releases[0].html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: releases[0].body.replace(/\n/g, '<br>') }}
                />
              </div>

              {/* Download Assets */}
              {releases[0].assets && releases[0].assets.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Download Assets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {releases[0].assets.map((asset) => (
                      <a
                        key={asset.id}
                        href={asset.browser_download_url}
                        className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 rounded-lg p-4 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {getPlatformIcon(asset.name)}
                          <div className="flex-1">
                            <p className="font-medium text-sm">{asset.name}</p>
                            <p className="text-xs text-gray-400">
                              {formatFileSize(asset.size)} • {asset.download_count} downloads
                            </p>
                          </div>
                          <FaDownload className="text-orange-500" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* All Releases */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">All Releases</h2>
          
          {releases.map((release) => (
            <div 
              key={release.id}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getReleaseBadgeColor(release)}`}>
                      {getReleaseType(release)}
                    </span>
                    <h3 className="text-xl font-semibold">{release.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    Released {new Date(release.published_at).toLocaleDateString()} • {release.tag_name}
                  </p>
                  
                  <div className="prose prose-invert max-w-none">
                    <div 
                      className="text-gray-300 text-sm leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: release.body.replace(/\n/g, '<br>') }}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <a 
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <FaEye />
                    View
                  </a>
                  {release.assets && release.assets.length > 0 && (
                    <button
                      onClick={() => setSelectedRelease(selectedRelease === release.id ? null : release.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <FaDownload />
                      Download
                    </button>
                  )}
                </div>
              </div>
              
              {/* Expandable Download Assets */}
              {selectedRelease === release.id && release.assets && release.assets.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold mb-3">Download Assets</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {release.assets.map((asset) => (
                      <a
                        key={asset.id}
                        href={asset.browser_download_url}
                        className="bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 rounded-lg p-3 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {getPlatformIcon(asset.name)}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-xs truncate">{asset.name}</p>
                            <p className="text-xs text-gray-400">
                              {formatFileSize(asset.size)}
                            </p>
                          </div>
                          <FaDownload className="text-orange-500 flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/MyBitcoinFuture/dashboard/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FaGithub />
            View All Releases on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Releases; 