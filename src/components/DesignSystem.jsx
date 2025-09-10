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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="doc-section-title">
            Design System
          </h2>
          <p className="doc-subtitle">
            Timeless design principles and consistent patterns for professional Bitcoin treasury management interfaces.
          </p>
        </div>

        {/* Design Principles */}
        <div className="mb-16">
          <h3 className="doc-section-title">
            Design Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-semibold text-white mb-4">
                  {principle.title}
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {principle.description}
                </p>
                <ul className="space-y-2">
                  {principle.principles.map((item, pIndex) => (
                    <li key={pIndex} className="text-slate-300 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h3 className="doc-section-title">
            Color Palette
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorPalette.map((color, index) => (
              <div key={index} className="card">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-lg border border-slate-600 mr-4"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <h4 className="text-white font-semibold">{color.name}</h4>
                    <p className="text-slate-400 text-sm">{color.hex}</p>
                    <p className="text-slate-300 text-sm">{color.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Scale */}
        <div className="mb-16">
          <h3 className="doc-section-title">
            Typography Scale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {typographyScale.map((type, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">{type.size}</h4>
                    <p className="text-slate-400 text-sm">{type.value}</p>
                    <p className="text-slate-300 text-sm">{type.usage}</p>
                  </div>
                  <div className={type.size}>
                    <span className="text-white">Sample Text</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing Scale */}
        <div className="mb-16">
          <h3 className="doc-section-title">
            Spacing Scale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spacingScale.map((space, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-semibold">{space.name}</h4>
                    <p className="text-slate-400 text-sm">{space.value}</p>
                    <p className="text-slate-300 text-sm">{space.usage}</p>
                  </div>
                  <div 
                    className="h-4 bg-primary-500 rounded"
                    style={{ 
                      width: space.value.split('(')[1].replace(')', '').replace('px', 'px')
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Patterns */}
        <div className="mb-16">
          <h3 className="doc-section-title">
            Component Patterns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {componentPatterns.map((pattern, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-semibold text-white mb-4">
                  {pattern.name}
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {pattern.description}
                </p>
                <ul className="space-y-2">
                  {pattern.characteristics.map((characteristic, cIndex) => (
                    <li key={cIndex} className="text-slate-300 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h3 className="doc-section-title">
            Implementation Guidelines
          </h3>
          <div className="card">
            <p className="text-slate-300 mb-6 leading-relaxed">
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
