const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="container-max" style={{ padding: '4rem 0' }}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <div className="text-gray-300 text-lg">
              <p><strong>Effective Date:</strong> June 10, 2025</p>
              <p><strong>Last Updated:</strong> June 10, 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and improving our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Essential Cookies</strong>: Required for the website to function properly</li>
                <li><strong>Performance Cookies</strong>: Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies</strong>: Remember your preferences and settings</li>
                <li><strong>Security Cookies</strong>: Help protect against fraud and ensure website security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Essential Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies are necessary for the website to function and cannot be disabled:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Authentication and session management</li>
                <li>Security features and fraud prevention</li>
                <li>Basic website functionality</li>
                <li>Load balancing and performance optimization</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Analytics Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies help us understand how visitors use our website:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Page views and navigation patterns</li>
                <li>Time spent on different sections</li>
                <li>Error tracking and performance monitoring</li>
                <li>User experience improvements</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Preference Cookies</h3>
              <p className="text-gray-300 mb-4">These cookies remember your choices and preferences:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Language and region settings</li>
                <li>Theme and display preferences</li>
                <li>Notification settings</li>
                <li>Customized content preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">We may use third-party services that set their own cookies:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Analytics Services</strong>: Google Analytics, Plausible Analytics</li>
                <li><strong>Content Delivery Networks</strong>: Cloudflare, AWS CloudFront</li>
                <li><strong>Security Services</strong>: reCAPTCHA, security monitoring tools</li>
                <li><strong>Social Media</strong>: GitHub integration, social sharing buttons</li>
              </ul>
              <p className="text-gray-300 mt-4">These third-party cookies are subject to their respective privacy policies.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Cookie Duration</h2>
              <p className="text-gray-300 mb-4">Cookies have different lifespans:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Session Cookies</strong>: Deleted when you close your browser</li>
                <li><strong>Persistent Cookies</strong>: Remain on your device for a set period</li>
                <li><strong>Analytics Cookies</strong>: Typically expire after 2 years</li>
                <li><strong>Preference Cookies</strong>: Usually expire after 1 year</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Managing Your Cookie Preferences</h2>
              <p className="text-gray-300 mb-4">You have several options for managing cookies:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Browser Settings</h3>
              <p className="text-gray-300 mb-4">Most browsers allow you to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white">Cookie Consent</h3>
              <p className="text-gray-300 mb-4">When you first visit our website, you can:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Change your settings at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Impact of Disabling Cookies</h2>
              <p className="text-gray-300 mb-4">If you disable cookies, some features may not work properly:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>You may need to log in repeatedly</li>
                <li>Some website features may not function correctly</li>
                <li>Your preferences may not be saved</li>
                <li>We may not be able to provide personalized content</li>
                <li>Security features may be limited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">Contact Information</h2>
              <div className="bg-gray-800 border-l-4 border-orange-400 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">For questions about our use of cookies:</p>
                <p className="text-gray-300 mb-2"><strong>Email</strong>: info@mybitcoinfuture.com</p>
                <p className="text-gray-300 mb-2"><strong>Mail</strong>: MY BITCOIN FUTURE LLC</p>
                <p className="text-gray-300 mb-2 ml-4">4445 Corporation Ln. STE 264</p>
                <p className="text-gray-300 mb-2 ml-4">Virginia Beach, VA 23462</p>
                <p className="text-gray-300 ml-4">USA</p>
              </div>
            </section>

            <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
              <p><strong>Effective Date</strong>: This Cookie Policy is effective as of June 10, 2025 and was last updated on June 10, 2025.</p>
              <p className="mt-2">By using our website, you consent to our use of cookies as described in this policy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookies 