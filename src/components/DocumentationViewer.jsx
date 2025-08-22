import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import DocumentationLoader from './DocumentationLoader';
import { ArrowLeftIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const DocumentationViewer = () => {
  const { docSlug } = useParams();
  const [docFile, setDocFile] = useState(null);

  // Map URL slugs to documentation files
  const docMapping = {
    'system-overview': 'SYSTEM_OVERVIEW.md',
    'api-documentation': 'API_DOCUMENTATION.md',
    'quickstart': 'QUICKSTART.md',
    'onboarding': 'ONBOARDING_GUIDE.md',
    'cli-standards': 'CLI_CONSISTENCY_STANDARDS.md',
    'quick-reference': 'QUICK_REFERENCE.md'
  };

  useEffect(() => {
    const file = docMapping[docSlug];
    if (file) {
      setDocFile(file);
    }
  }, [docSlug]);

  if (!docFile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <BookOpenIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-4">Documentation Not Found</h1>
            <p className="text-gray-300 mb-6">The requested documentation could not be found.</p>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <span>Home</span>
          </Link>
          <span className="text-gray-600">/</span>
          <Link to="/docs" className="hover:text-white transition-colors flex items-center gap-1">
            <span>Documentation</span>
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-white font-medium">{docFile.replace('.md', '').replace(/_/g, ' ')}</span>
        </nav>
      </div>

      {/* Documentation Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <DocumentationLoader 
            docPath={docFile} 
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl"
          />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Documentation
          </Link>
          
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationViewer;
