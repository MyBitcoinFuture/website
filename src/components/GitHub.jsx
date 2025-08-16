const GitHub = () => {
  const stats = [
    { label: "Stars", value: "Coming Soon", icon: "⭐" },
    { label: "Forks", value: "Coming Soon", icon: "🔀" },
    { label: "Contributors", value: "Coming Soon", icon: "👥" },
    { label: "Issues", value: "Coming Soon", icon: "🐛" }
  ]

  const contributionAreas = [
    {
      title: "Core Development",
      description: "Help build the core treasury management platform and API.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Plugin Development",
      description: "Create plugins to extend functionality and build the ecosystem.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Documentation",
      description: "Help create comprehensive guides, tutorials, and API documentation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Testing & QA",
      description: "Help ensure quality through testing, bug reports, and feature requests.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="github" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            MyBitcoinFuture is open source and community-driven. Contribute to the future 
            of Bitcoin treasury management and help build the ecosystem.
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-800/30 rounded-lg p-6 border border-primary-700 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-primary-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contribution Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contributionAreas.map((area, index) => (
            <div
              key={index}
              className="bg-primary-800/30 rounded-lg p-6 border border-primary-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {area.title}
                </h3>
              </div>
              <p className="text-primary-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-800/30 rounded-lg p-8 border border-primary-700">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Started Today
            </h3>
            <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
              Whether you're a developer, designer, or Bitcoin enthusiast, there's a place 
              for you in the MyBitcoinFuture community. Help us build the future of 
              Bitcoin treasury management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/MyBitcoinFuture"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/MyBitcoinFuture"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Star the Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHub
