import React from 'react';

const DesignSystem = () => {
  const designPrinciples = [
    {
      title: "Professional Aesthetics",
      description: "Clean, modern design that conveys trust and reliability for enterprise Bitcoin treasury management.",
      principles: [
        "Consistent visual hierarchy",
        "Professional color palette",
        "Clear typography system",
        "Balanced white space"
      ]
    },
    {
      title: "Accessibility First",
      description: "Design that works for everyone, ensuring usability across different abilities and devices.",
      principles: [
        "WCAG 2.1 AA compliance",
        "Keyboard navigation support",
        "Screen reader compatibility",
        "High contrast ratios"
      ]
    },
    {
      title: "Responsive Design",
      description: "Seamless experience across all devices and screen sizes.",
      principles: [
        "Mobile-first approach",
        "Flexible grid systems",
        "Adaptive typography",
        "Touch-friendly interactions"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Fast, efficient interfaces that don't compromise on functionality.",
      principles: [
        "Optimized animations",
        "Efficient rendering",
        "Minimal bundle size",
        "Progressive enhancement"
      ]
    }
  ];

  const colorPalette = [
    {
      name: "Primary Orange",
      hex: "#f97316",
      usage: "Primary actions, highlights, and brand elements"
    },
    {
      name: "White",
      hex: "#ffffff",
      usage: "Primary text and high-contrast elements"
    },
    {
      name: "White 80%",
      hex: "rgba(255, 255, 255, 0.8)",
      usage: "Secondary text and subtle elements"
    },
    {
      name: "Gray",
      hex: "#94a3b8",
      usage: "Body text and supporting content"
    },
    {
      name: "Dark Gray",
      hex: "#64748b",
      usage: "Muted text and borders"
    }
  ];

  const typographyScale = [
    {
      size: "text-xs",
      value: "0.75rem (12px)",
      usage: "Captions and fine print"
    },
    {
      size: "text-sm",
      value: "0.875rem (14px)",
      usage: "Small text and secondary information"
    },
    {
      size: "text-base",
      value: "1rem (16px)",
      usage: "Body text and general content"
    },
    {
      size: "text-lg",
      value: "1.125rem (18px)",
      usage: "Large body text and emphasis"
    },
    {
      size: "text-xl",
      value: "1.25rem (20px)",
      usage: "Subheadings and important text"
    },
    {
      size: "text-2xl",
      value: "1.5rem (24px)",
      usage: "Section headings"
    },
    {
      size: "text-3xl",
      value: "1.875rem (30px)",
      usage: "Page headings"
    },
    {
      size: "text-4xl",
      value: "2.25rem (36px)",
      usage: "Hero headings"
    }
  ];

  const spacingScale = [
    {
      name: "space-1",
      value: "0.25rem (4px)",
      usage: "Tight spacing between related elements"
    },
    {
      name: "space-2",
      value: "0.5rem (8px)",
      usage: "Standard spacing between elements"
    },
    {
      name: "space-4",
      value: "1rem (16px)",
      usage: "Section padding and margins"
    },
    {
      name: "space-6",
      value: "1.5rem (24px)",
      usage: "Component spacing"
    },
    {
      name: "space-8",
      value: "2rem (32px)",
      usage: "Section spacing"
    },
    {
      name: "space-12",
      value: "3rem (48px)",
      usage: "Major section breaks"
    },
    {
      name: "space-16",
      value: "4rem (64px)",
      usage: "Page-level spacing"
    },
    {
      name: "space-24",
      value: "6rem (96px)",
      usage: "Hero section spacing"
    }
  ];

  const componentPatterns = [
    {
      name: "Cards",
      description: "Consistent container styling for content sections",
      characteristics: [
        "Rounded corners (8px)",
        "Dark background with borders",
        "Consistent padding",
        "Hover state interactions"
      ]
    },
    {
      name: "Buttons",
      description: "Clear call-to-action elements with consistent styling",
      characteristics: [
        "Primary and secondary variants",
        "Consistent padding and typography",
        "Hover and focus states",
        "Accessible focus indicators"
      ]
    },
    {
      name: "Navigation",
      description: "Clear, accessible navigation patterns",
      characteristics: [
        "Consistent link styling",
        "Active state indicators",
        "Mobile-responsive design",
        "Keyboard navigation support"
      ]
    },
    {
      name: "Forms",
      description: "Professional form elements for data input",
      characteristics: [
        "Clear labels and validation",
        "Consistent input styling",
        "Error state handling",
        "Accessible form controls"
      ]
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Design System
          </h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '64rem', margin: '0 auto' }}>
            Timeless design principles and consistent patterns for professional Bitcoin treasury management interfaces.
          </p>
        </div>

        {/* Design Principles */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Design Principles
          </h3>
          <div className="grid" style={{ gap: '2rem' }}>
            {designPrinciples.map((principle, index) => (
              <div key={index} className="card">
                <h4 className="text-white mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {principle.title}
                </h4>
                <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {principle.description}
                </p>
                <ul className="space-y-2">
                  {principle.principles.map((item, pIndex) => (
                    <li key={pIndex} className="text-gray-300 flex items-center">
                      <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Color Palette
          </h3>
          <div className="grid" style={{ gap: '1rem' }}>
            {colorPalette.map((color, index) => (
              <div key={index} className="card">
                <div className="flex items-center">
                  <div 
                    style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      backgroundColor: color.hex, 
                      borderRadius: '0.5rem',
                      border: '1px solid var(--color-gray-dark)',
                      marginRight: '1rem'
                    }}
                  />
                  <div>
                    <h4 className="text-white font-semibold">{color.name}</h4>
                    <p className="text-gray text-sm">{color.hex}</p>
                    <p className="text-gray-300 text-sm">{color.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Scale */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Typography Scale
          </h3>
          <div className="grid" style={{ gap: '1rem' }}>
            {typographyScale.map((type, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">{type.size}</h4>
                    <p className="text-gray text-sm">{type.value}</p>
                    <p className="text-gray-300 text-sm">{type.usage}</p>
                  </div>
                  <div style={{ fontSize: type.size.replace('text-', '').includes('xs') ? '0.75rem' : 
                    type.size.replace('text-', '').includes('sm') ? '0.875rem' :
                    type.size.replace('text-', '').includes('base') ? '1rem' :
                    type.size.replace('text-', '').includes('lg') ? '1.125rem' :
                    type.size.replace('text-', '').includes('xl') ? '1.25rem' :
                    type.size.replace('text-', '').includes('2xl') ? '1.5rem' :
                    type.size.replace('text-', '').includes('3xl') ? '1.875rem' : '2.25rem'
                  }}>
                    <span className="text-white">Sample Text</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing Scale */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Spacing Scale
          </h3>
          <div className="grid" style={{ gap: '1rem' }}>
            {spacingScale.map((space, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">{space.name}</h4>
                    <p className="text-gray text-sm">{space.value}</p>
                    <p className="text-gray-300 text-sm">{space.usage}</p>
                  </div>
                  <div 
                    style={{ 
                      width: space.value.split('(')[1].replace(')', '').replace('px', 'px'),
                      height: '1rem',
                      backgroundColor: 'var(--color-orange)',
                      borderRadius: '0.25rem'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Patterns */}
        <div className="mb-16">
          <h3 className="text-white mb-8 text-center" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Component Patterns
          </h3>
          <div className="grid" style={{ gap: '2rem' }}>
            {componentPatterns.map((pattern, index) => (
              <div key={index} className="card">
                <h4 className="text-white mb-4" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  {pattern.name}
                </h4>
                <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  {pattern.description}
                </p>
                <ul className="space-y-2">
                  {pattern.characteristics.map((characteristic, cIndex) => (
                    <li key={cIndex} className="text-gray-300 flex items-center">
                      <svg style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', color: 'var(--color-orange)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Guidelines */}
        <div className="text-center">
          <h3 className="text-white mb-8" style={{ fontSize: '2rem', fontWeight: '600' }}>
            Implementation Guidelines
          </h3>
          <div className="card">
            <p className="text-gray mb-6" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              This design system ensures consistent, professional, and accessible interfaces across all 
              Bitcoin treasury management applications. All components follow these timeless principles 
              to maintain quality and usability over time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/MyBitcoinFuture/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  color: '#ffffff',
                  border: '1px solid #f97316',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease-in-out',
                  fontSize: '1rem',
                  minHeight: '48px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
                }}
              >
                View Implementation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystem;
