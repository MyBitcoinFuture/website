import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants/content';
import ContactForm from './contact/ContactForm';
import ContactNotification from './contact/ContactNotification';

const Contact = () => {
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
      const response = await window.emailjs.send('service_qm94mqh', 'template_dxg2zrm', {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not specified',
        message: formData.message
      });

      console.log('SUCCESS!', response.status, response.text);
      showNotification('Thank you! Your message has been sent. We\'ll be in touch within 24 hours.', 'success');
    } catch (error) {
      console.log('FAILED...', error);
      showNotification('Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 animate-fade-in-up" style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Contact Us
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
        
        <div className="max-w-2xl mx-auto">
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>

      <ContactNotification notification={notification} />
    </section>
  );
};

export default Contact;
