import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

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
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
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
            Have questions about MyBitcoinFuture? Need support with deployment? Want to discuss plugin development? We're here to help.
          </p>
          
          <form onSubmit={handleSubmit} style={{
            display: 'grid',
            gap: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="name" style={{
                color: '#f8fafc',
                fontWeight: '500'
              }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  background: '#0f172a',
                  border: `1px solid ${errors.name ? '#ef4444' : '#475569'}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
              {errors.name && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem'
                }}>
                  {errors.name}
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="email" style={{
                color: '#f8fafc',
                fontWeight: '500'
              }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  background: '#0f172a',
                  border: `1px solid ${errors.email ? '#ef4444' : '#475569'}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
              {errors.email && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem'
                }}>
                  {errors.email}
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="company" style={{
                color: '#f8fafc',
                fontWeight: '500'
              }}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                style={{
                  background: '#0f172a',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease'
                }}
              />
            </div>

            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label htmlFor="message" style={{
                color: '#f8fafc',
                fontWeight: '500'
              }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your inquiry, deployment questions, plugin development, or any other questions about MyBitcoinFuture..."
                required
                style={{
                  background: '#0f172a',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#f8fafc',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  resize: 'vertical',
                  minHeight: '120px'
                }}
              />
              {errors.message && (
                <div style={{
                  color: '#ef4444',
                  fontSize: '0.875rem',
                  marginTop: '0.25rem'
                }}>
                  {errors.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: 'linear-gradient(135deg, #f7931a 0%, #ff8c00 100%)',
                color: '#000000',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                justifySelf: 'center',
                width: 'fit-content',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          color: '#ffffff',
          fontWeight: '500',
          zIndex: 1000,
          maxWidth: '350px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          background: notification.type === 'success' 
            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
            : notification.type === 'error'
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            : 'linear-gradient(135deg, #f7931a 0%, #ff8c00 100%)',
          animation: 'slideIn 0.3s ease'
        }}>
          {notification.message}
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
