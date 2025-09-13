import React from 'react';
import { CONTACT_INFO } from '../constants/content';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up" style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Get Support & Connect
          </h2>
          <p className="text-gray animate-fade-in-up" style={{ 
            animationDelay: '0.2s',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {CONTACT_INFO.description}
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-primary-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">General Questions</h3>
            <p className="text-gray-400 text-sm mb-4">Deployment help, plugin development, business inquiries</p>
            <a href="/contact" className="text-primary-500 hover:text-primary-400 text-sm font-medium">
              Use contact form →
            </a>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-primary-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Technical Issues</h3>
            <p className="text-gray-400 text-sm mb-4">Bug reports, feature requests, development questions</p>
            <a 
              href="https://github.com/MyBitcoinFuture/dashboard/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-400 text-sm font-medium"
            >
              GitHub Issues →
            </a>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center">
            <div className="text-primary-500 mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Security Issues</h3>
            <p className="text-gray-400 text-sm mb-4">Security vulnerabilities, sensitive matters</p>
            <a href="mailto:security@mybitcoinfuture.org" className="text-primary-500 hover:text-primary-400 text-sm font-medium">
              security@mybitcoinfuture.org →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;