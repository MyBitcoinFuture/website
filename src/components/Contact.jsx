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
    <section id="contact" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '4rem 0',
      color: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#f7931a'
          }}>
            Contact Us
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            {CONTACT_INFO.description}
          </p>
          
          <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <ContactNotification notification={notification} />
    </section>
  );
};

export default Contact;
