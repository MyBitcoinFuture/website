import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import VersionIndicator from './VersionIndicator';

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen text-white bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 ${className}`}>
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <VersionIndicator />
    </div>
  );
};

export default Layout;
