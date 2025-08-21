import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumbs = ({ items = [] }) => {
  const breadcrumbItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Documentation', href: '/docs' },
    ...items
  ];

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const IconComponent = item.icon;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon 
                  style={{ width: '16px', height: '16px' }} 
                  className="text-gray-400 mx-2" 
                />
              )}
              
              {isLast ? (
                <span className="text-gray-300 font-medium">
                  {IconComponent && <IconComponent style={{ width: '16px', height: '16px' }} className="inline mr-1" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-orange-400 hover:text-orange-300 transition-colors flex items-center"
                >
                  {IconComponent && <IconComponent style={{ width: '16px', height: '16px' }} className="mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
