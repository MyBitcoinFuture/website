import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants/content';

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 'var(--space-lg)' }}>
      <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
        <label htmlFor="name" className="text-white" style={{ fontWeight: '600', fontSize: '1rem' }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className={`form-input ${errors.name ? 'border-red-500' : ''}`}
          style={{ 
            borderColor: errors.name ? '#ef4444' : undefined,
            boxShadow: errors.name ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : undefined
          }}
        />
        {errors.name && (
          <div className="text-red-500" style={{ fontSize: '0.875rem', marginTop: 'var(--space-xs)' }}>
            {errors.name}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
        <label htmlFor="email" className="text-white" style={{ fontWeight: '600', fontSize: '1rem' }}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={`form-input ${errors.email ? 'border-red-500' : ''}`}
          style={{ 
            borderColor: errors.email ? '#ef4444' : undefined,
            boxShadow: errors.email ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : undefined
          }}
        />
        {errors.email && (
          <div className="text-red-500" style={{ fontSize: '0.875rem', marginTop: 'var(--space-xs)' }}>
            {errors.email}
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
        <label htmlFor="company" className="text-white" style={{ fontWeight: '600', fontSize: '1rem' }}>
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
        <label htmlFor="message" className="text-white" style={{ fontWeight: '600', fontSize: '1rem' }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={CONTACT_INFO.placeholder}
          required
          className="form-input form-textarea"
          style={{ 
            borderColor: errors.message ? '#ef4444' : undefined,
            boxShadow: errors.message ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : undefined
          }}
        />
        {errors.message && (
          <div className="text-red-500" style={{ fontSize: '0.875rem', marginTop: 'var(--space-xs)' }}>
            {errors.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary"
        style={{ 
          opacity: isSubmitting ? 0.7 : 1,
          padding: '16px 32px',
          fontSize: '1.125rem',
          fontWeight: '600',
          minHeight: '56px',
          justifySelf: 'center',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;