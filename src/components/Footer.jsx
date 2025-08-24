import VERSION from '../version.js';

const Footer = () => {
  return (
    <footer>
      <div className="container-max" style={{ padding: '3rem 0' }}>
        <div className="grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/mybitcoinfuture_logo.png" 
                alt="MyBitcoinFuture Logo" 
                style={{ height: '32px', width: 'auto' }}
              />
              <span className="text-white" style={{ fontSize: '1.25rem', fontWeight: '700' }}>MyBitcoinFuture</span>
            </div>
            <p className="text-gray mb-4" style={{ maxWidth: '32rem' }}>
              Bitcoin treasury management with complete data sovereignty. 
              Built for organizations that need Bitcoin infrastructure.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MyBitcoinFuture"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>Resources</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <a href="https://github.com/MyBitcoinFuture" className="nav-link">
                  Source Code
                </a>
              </li>
              <li>
                <a href="https://github.com/MyBitcoinFuture" className="nav-link">
                  Issues
                </a>
              </li>
              <li>
                <a href="https://github.com/MyBitcoinFuture" className="nav-link">
                  Discussions
                </a>
              </li>
              <li>
                <a href="https://github.com/MyBitcoinFuture" className="nav-link">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: '600' }}>Legal</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <a href="/privacy" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="nav-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="nav-link">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #334155', 
          marginTop: '2rem', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <div className="text-gray" style={{ fontSize: '0.875rem' }}>
            © 2025 My Bitcoin Future LLC. All rights reserved.
          </div>
          <div className="text-gray" style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            v{VERSION.version} • {VERSION.buildDate} • {VERSION.commitHash.substring(0, 8)} • {VERSION.environment}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
