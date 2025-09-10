import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { handleAnchorNavigation, NAVIGATION_ITEMS } from '../utils/navigation'

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
    handleAnchorNavigation(anchor, navigate, location)
    setIsMenuOpen(false)
  }

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container-max">
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity no-underline" aria-label="MyBitcoinFuture Home">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur-sm"></div>
              <img 
                src="/mybitcoinfuture_logo.png" 
                alt="MyBitcoinFuture Logo" 
                style={{ 
                  height: '40px', 
                  width: 'auto',
                  filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.3))'
                }}
              />
            </div>
            <span className="text-xl font-bold text-white" style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>MyBitcoinFuture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item) => (
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
              style={{
                padding: '12px 24px',
                fontSize: '0.875rem',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              aria-label="View MyBitcoinFuture on GitHub (opens in new tab)"
            >
              <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
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
                {NAVIGATION_ITEMS.map((item) => (
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
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary"
                  style={{
                    padding: '12px 16px',
                    fontSize: '16px',
                    minHeight: '44px',
                    marginTop: '8px',
                    textAlign: 'center',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
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
