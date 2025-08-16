import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Deployment from './components/Deployment'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Deployment />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
