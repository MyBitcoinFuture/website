import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Deployment from './components/Deployment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Docs from './components/Docs'
import GettingStarted from './components/GettingStarted'
import VersionIndicator from './components/VersionIndicator'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
          <Header />
          <main>
            <Hero />
            <Features />
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
          <Docs />
          <VersionIndicator />
        </>
      } />
      <Route path="/getting-started" element={
        <>
          <GettingStarted />
          <VersionIndicator />
        </>
      } />
    </Routes>
  )
}

export default App
