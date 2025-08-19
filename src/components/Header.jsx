import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Deployment', href: '#deployment' },
    { name: 'Docs', href: '/docs' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container-max">
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity no-underline">
            <img 
              src="/mybitcoinfuture_logo.png" 
              alt="MyBitcoinFuture Logo" 
              style={{ height: '32px', width: 'auto' }}
            />
            <span className="text-xl font-bold text-white">MyBitcoinFuture</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/MyBitcoinFuture"
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
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/MyBitcoinFuture"
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
