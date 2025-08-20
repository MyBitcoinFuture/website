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

  const handleAnchorClick = (anchor) => {
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
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity no-underline">
            <img 
              src="/mybitcoinfuture_logo.png" 
              alt="MyBitcoinFuture Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
            <span className="text-xl font-bold text-white">MyBitcoinFuture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.name}
                  onClick={() => handleAnchorClick(item.href)}
                  className="nav-link bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
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
            >
              View on GitHub
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ padding: '8px' }}
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
          <div className="mobile-menu" style={{ padding: '16px 0', borderTop: '1px solid #1e40af' }}>
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                item.isAnchor ? (
                  <button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href)}
                    className="nav-link bg-transparent border-none cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
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
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
