import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

const MarkdownRenderer = ({ content, className = '' }) => {
  if (!content) {
    return <div className="text-gray-400">No content available</div>;
  }

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        components={{
          // Use existing CodeBlock component for code blocks
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock
                code={String(children).replace(/\n$/, '')}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={`${className} bg-gray-800 px-1 py-0.5 rounded text-orange-400 font-mono text-sm`} {...props}>
                {children}
              </code>
            );
          },
          // Customize headers
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold text-white mb-3 mt-6">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-white mb-2 mt-4">{children}</h4>
          ),
          // Customize paragraphs
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
          ),
          // Customize lists
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">{children}</ol>
          ),
          // Customize links
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-orange-400 hover:text-orange-300 underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          // Customize strong text
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          // Customize emphasis
          em: ({ children }) => (
            <em className="text-gray-200 italic">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
