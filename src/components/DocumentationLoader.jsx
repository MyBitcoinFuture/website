import React, { useState, useEffect } from 'react';
import { importDashboardContent } from '../utils/documentationImporter';
import MarkdownRenderer from './MarkdownRenderer';

const DocumentationLoader = ({ docPath, className = '' }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDocumentation = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const docContent = await importDashboardContent(docPath);
        setContent(docContent);
      } catch (err) {
        setError('Failed to load documentation');
        console.error('Documentation loading error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (docPath) {
      loadDocumentation();
    }
  }, [docPath]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-12 ${className}`}>
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500/20 border-t-orange-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-400 animate-ping"></div>
          </div>
          <h3 className="text-white font-semibold mb-2">Loading Documentation</h3>
          <p className="text-gray-400 text-sm">Fetching the latest content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-red-900/20 border border-red-700/50 rounded-xl p-8 ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-red-400 font-semibold mb-3 text-lg">Documentation Loading Error</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Retry Loading
          </button>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className={`bg-gray-800 border border-gray-700 rounded-lg p-6 ${className}`}>
        <div className="text-center">
          <p className="text-gray-400">No documentation content available.</p>
        </div>
      </div>
    );
  }

  return <MarkdownRenderer content={content} className={className} />;
};

export default DocumentationLoader;
