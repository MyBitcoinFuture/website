import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Features from './components/Features'
import PluginEcosystem from './components/PluginEcosystem'
import BitcoinTreasuryConcepts from './components/BitcoinTreasuryConcepts'
import UseCases from './components/UseCases'
import FAQ from './components/FAQ'
import Deployment from './components/Deployment'
import Contact from './components/Contact'
import ContactPage from './components/ContactPage'
import Docs from './components/Docs'
import DocumentationViewer from './components/DocumentationViewer'
import SystemOverview from './components/SystemOverview'
import ApiReference from './components/ApiReference'
import QuickStart from './components/QuickStart'
import UserGuides from './components/UserGuides'
import Releases from './components/Releases'
import ReleaseAnnouncements from './components/ReleaseAnnouncements'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Cookies from './components/Cookies'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle SPA routing redirect from 404.html
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '6px',
          background: 'var(--color-orange)',
          color: 'var(--color-white)',
          padding: '8px 16px',
          textDecoration: 'none',
          borderRadius: '4px',
          zIndex: 1000,
          transition: 'top 0.3s'
        }}
        onFocus={(e) => {
          e.target.style.top = '6px'
        }}
        onBlur={(e) => {
          e.target.style.top = '-40px'
        }}
      >
        Skip to main content
      </a>
      
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <BitcoinTreasuryConcepts />
            <Features />
            <PluginEcosystem />
            <Deployment />
            <FAQ />
            <Contact />
          </Layout>
        } />
        <Route path="/docs" element={
          <Layout>
            <Docs />
          </Layout>
        } />
        <Route path="/docs/:docSlug" element={<DocumentationViewer />} />
        <Route path="/releases" element={
          <Layout>
            <Releases />
          </Layout>
        } />
        <Route path="/privacy" element={
          <Layout>
            <Privacy />
          </Layout>
        } />
        <Route path="/terms" element={
          <Layout>
            <Terms />
          </Layout>
        } />
        <Route path="/cookies" element={
          <Layout>
            <Cookies />
          </Layout>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      {/* Back to Top Button */}
      <BackToTop />
    </>
  )
}

export default App
