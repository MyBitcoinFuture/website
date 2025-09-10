import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Features from './components/Features'
import PluginEcosystem from './components/PluginEcosystem'
import BitcoinTreasuryConcepts from './components/BitcoinTreasuryConcepts'
import UseCases from './components/UseCases'
import FAQ from './components/FAQ'
import Deployment from './components/Deployment'
import Contact from './components/Contact'
import Docs from './components/Docs'
import DocumentationViewer from './components/DocumentationViewer'
import GettingStarted from './components/GettingStarted'
import SystemOverview from './components/SystemOverview'
import ApiReference from './components/ApiReference'
import QuickStart from './components/QuickStart'
import UserGuides from './components/UserGuides'
import Releases from './components/Releases'
import ReleaseAnnouncements from './components/ReleaseAnnouncements'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Cookies from './components/Cookies'

function App() {
  return (
    <>
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
            <ReleaseAnnouncements />
            <UseCases />
            <FAQ />
            <Deployment />
            <Contact />
          </Layout>
        } />
        <Route path="/docs" element={
          <Layout>
            <Docs />
          </Layout>
        } />
        <Route path="/docs/:docSlug" element={<DocumentationViewer />} />
        <Route path="/getting-started" element={
          <Layout>
            <GettingStarted />
          </Layout>
        } />
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
      </Routes>
    </>
  )
}

export default App
