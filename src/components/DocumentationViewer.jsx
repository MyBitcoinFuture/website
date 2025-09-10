import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { importDashboardContent, getDocumentationMetadata } from '../utils/documentationImporter';
import MarkdownRenderer from './MarkdownRenderer';
import Breadcrumbs from './ui/Breadcrumbs';

const DocumentationViewer = () => {
  const { docSlug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map URL slugs to actual documentation files
  const docMapping = useMemo(() => ({
    'system-overview': 'SYSTEM_OVERVIEW.md',
    'api-documentation': 'API_DOCUMENTATION.md',
    'quickstart': 'QUICKSTART.md',
    'onboarding-guide': 'ONBOARDING_GUIDE.md',
    'quick-reference': 'QUICK_REFERENCE.md'
  }), []);

  useEffect(() => {
    const loadDocumentation = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const fileName = docMapping[docSlug];
        
        if (!fileName) {
          throw new Error('Documentation not found');
        }
        
        const [docContent, docMetadata] = await Promise.all([
          importDashboardContent(fileName),
          Promise.resolve(getDocumentationMetadata(fileName))
        ]);
        
        setContent(docContent);
        setMetadata(docMetadata);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDocumentation();
  }, [docSlug, docMapping]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="error-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading documentation...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="error-container">
            <h1 className="error-title">Documentation Not Found</h1>
            <p className="error-message">{error}</p>
            <Link to="/docs" className="btn-primary">
              Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs 
          items={[
            { label: metadata?.title || 'Document', href: '#' }
          ]} 
        />
        
        <div className="mt-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-white mb-2">
              {metadata?.title || 'Documentation'}
            </h1>
            {metadata?.description && (
              <p className="text-sm text-slate-400">
                {metadata.description}
              </p>
            )}
          </div>
          
          <div className="card">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationViewer;
