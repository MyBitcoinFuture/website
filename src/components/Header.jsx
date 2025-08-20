import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const handleAnchorClick = (anchor, e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll to anchor
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // If already on home page, just scroll to anchor
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const navigation = [
    { name: 'Features', href: '#features', isAnchor: true },
    { name: 'Deployment', href: '#deployment', isAnchor: true },
    { name: 'Docs', href: '/docs', isAnchor: false },
    { name: 'Contact', href: '#contact', isAnchor: true },
  ]

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container-max">
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity no-underline" aria-label="MyBitcoinFuture Home">
            <img 
              src="/mybitcoinfuture_logo.png" 
              alt="MyBitcoinFuture Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
            <span className="text-xl font-bold text-white">MyBitcoinFuture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(item.href, e)}
                  className="nav-link"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://github.com/MyBitcoinFuture/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="View MyBitcoinFuture on GitHub (opens in new tab)"
            >
              View on GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            style={{ 
              padding: '8px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              style={{ width: '24px', height: '24px', color: 'white' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            style={{ 
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(30, 41, 59, 0.98)',
              backdropFilter: 'blur(16px)',
              borderTop: '1px solid rgba(71, 85, 105, 0.3)',
              zIndex: 1000,
              padding: '16px 0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="container-max">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  item.isAnchor ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleAnchorClick(item.href, e)}
                      className="nav-link"
                      style={{
                        padding: '12px 16px',
                        fontSize: '16px',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        padding: '12px 16px',
                        fontSize: '16px',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <a
                  href="https://github.com/MyBitcoinFuture/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    marginTop: '8px',
                    textAlign: 'center',
                    padding: '12px 16px',
                    fontSize: '16px',
                    minHeight: '44px'
                  }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
