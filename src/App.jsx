import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import PluginEcosystem from './components/PluginEcosystem'
import BitcoinTreasuryConcepts from './components/BitcoinTreasuryConcepts'
import UseCases from './components/UseCases'
import FAQ from './components/FAQ'
import Deployment from './components/Deployment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Docs from './components/Docs'
import DocumentationViewer from './components/DocumentationViewer'
import GettingStarted from './components/GettingStarted'
import SystemOverview from './components/SystemOverview'
import ApiReference from './components/ApiReference'
import QuickStart from './components/QuickStart'
import UserGuides from './components/UserGuides'
import VersionIndicator from './components/VersionIndicator'
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
          <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
            <Header />
            <main id="main-content">
              <Hero />
              <BitcoinTreasuryConcepts />
              <Features />
              <PluginEcosystem />
              <ReleaseAnnouncements />
              <UseCases />
              <FAQ />
              <Deployment />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </div>
        } />
        <Route path="/docs" element={
          <>
            <Header />
            <main id="main-content">
              <Docs />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
        <Route path="/docs/:docSlug" element={<DocumentationViewer />} />
        <Route path="/getting-started" element={
          <>
            <Header />
            <main id="main-content">
              <GettingStarted />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
        <Route path="/releases" element={
          <>
            <Header />
            <main id="main-content">
              <Releases />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
        <Route path="/privacy" element={
          <>
            <Header />
            <main id="main-content">
              <Privacy />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
        <Route path="/terms" element={
          <>
            <Header />
            <main id="main-content">
              <Terms />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
        <Route path="/cookies" element={
          <>
            <Header />
            <main id="main-content">
              <Cookies />
            </main>
            <Footer />
            <BackToTop />
            <VersionIndicator />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
