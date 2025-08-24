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
    'cli-standards': 'CLI_CONSISTENCY_STANDARDS.md',
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
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-max py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading documentation...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div className="container-max py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Documentation Not Found</h1>
            <p className="text-gray-300 mb-8">{error}</p>
            <Link to="/docs" className="btn-primary">
              Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div className="container-max py-8">
        <Breadcrumbs 
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: metadata?.title || 'Document', href: '#' }
          ]} 
        />
        
        <div className="mt-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {metadata?.title || 'Documentation'}
            </h1>
            {metadata?.description && (
              <p className="text-xl text-gray-300">
                {metadata.description}
              </p>
            )}
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationViewer;
