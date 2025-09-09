/**
 * Navigation Utilities
 * 
 * Simplified navigation handling to replace complex anchor logic
 */

export const scrollToElement = (elementId, offset = 0) => {
  const element = document.querySelector(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const handleAnchorNavigation = (anchor, navigate, location) => {
  if (location.pathname !== '/') {
    // Navigate to home first, then scroll
    navigate('/');
    setTimeout(() => scrollToElement(anchor), 100);
  } else {
    // Already on home page, just scroll
    scrollToElement(anchor);
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'Features', href: '#features', isAnchor: true },
  { name: 'Deployment', href: '#deployment', isAnchor: true },
  { name: 'Docs', href: '/docs', isAnchor: false },
  { name: 'Releases', href: '/releases', isAnchor: false },
  { name: 'Contact', href: '#contact', isAnchor: true },
];