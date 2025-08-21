import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  target, 
  rel, 
  onClick, 
  className = '',
  style = {},
  ...props 
}) => {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    minHeight: '48px'
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      color: '#ffffff',
      border: '1px solid #f97316',
      boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.2)'
    },
    secondary: {
      background: 'rgba(249, 115, 22, 0.1)',
      color: '#f97316',
      border: '2px solid rgba(249, 115, 22, 0.3)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }
  };

  const hoverStyles = {
    primary: {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
    },
    secondary: {
      background: 'rgba(249, 115, 22, 0.15)',
      borderColor: 'rgba(249, 115, 22, 0.5)',
      color: '#fb923c',
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15)'
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...style
  };

  const handleMouseEnter = (e) => {
    const hoverStyle = hoverStyles[variant];
    Object.assign(e.target.style, hoverStyle);
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = variantStyles[variant].boxShadow;
    if (variant === 'secondary') {
      e.target.style.background = variantStyles[variant].background;
      e.target.style.borderColor = variantStyles[variant].border;
      e.target.style.color = variantStyles[variant].color;
    }
  };

  const buttonProps = {
    style: combinedStyles,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className,
    onClick,
    ...props
  };

  // Internal link
  if (to) {
    return <Link to={to} {...buttonProps}>{children}</Link>;
  }

  // External link
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        {...buttonProps}
      >
        {children}
      </a>
    );
  }

  // Regular button
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
