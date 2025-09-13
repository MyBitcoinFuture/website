import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants/content';
import ContactForm from './contact/ContactForm';
import ContactNotification from './contact/ContactNotification';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init({
        publicKey: "eThZpkLgAIZr4sEQL"
      });
      console.log('EmailJS initialized with latest version');
    }
  }, []);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleFormSubmit = async (formData) => {
    if (typeof window.emailjs === 'undefined') {
      console.error('EmailJS not loaded');
      showNotification('Email service is not available. Please try again later or contact us directly.', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await window.emailjs.send(
        'service_mybitcoinfuture',
        'template_contact_form',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: CONTACT_INFO.email
        }
      );
      
      console.log('Email sent successfully:', result);
      showNotification('Thank you! Your message has been sent successfully.', 'success');
    } catch (error) {
      console.error('Failed to send email:', error);
      showNotification('Failed to send message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 text-white">
      {/* Navigation Header */}
      <div className="bg-gray-900/50 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <div className="text-gray-500">|</div>
              <nav className="flex items-center space-x-2 text-sm">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <span className="text-gray-500">/</span>
                <span className="text-white">Contact</span>
              </nav>
            </div>
            <div className="text-sm text-gray-400">
              MyBitcoinFuture
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
            <a href="#contact-form" className="text-primary-500 hover:text-primary-400 text-sm font-medium">
              Use contact form below →
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
            <p className="text-gray-400 text-sm mb-4">Security vulnerabilities, sensitive security concerns</p>
            <a 
              href={`mailto:${CONTACT_INFO.securityEmail}`}
              className="text-primary-500 hover:text-primary-400 text-sm font-medium"
            >
              security@mybitcoinfuture.org →
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>
          <ContactForm 
            onSubmit={handleFormSubmit} 
            isSubmitting={isSubmitting}
          />
        </div>

        {/* Notification */}
        {notification && (
          <ContactNotification 
            message={notification.message} 
            type={notification.type} 
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ContactPage;
