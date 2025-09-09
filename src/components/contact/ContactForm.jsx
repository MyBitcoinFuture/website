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
    <form onSubmit={handleSubmit} className="grid gap-lg text-left">
      <div className="grid gap-sm">
        <label htmlFor="name" className="text-white font-medium">
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
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">
            {errors.name}
          </div>
        )}
      </div>

      <div className="grid gap-sm">
        <label htmlFor="email" className="text-white font-medium">
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
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">
            {errors.email}
          </div>
        )}
      </div>

      <div className="grid gap-sm">
        <label htmlFor="company" className="text-white font-medium">
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

      <div className="grid gap-sm">
        <label htmlFor="message" className="text-white font-medium">
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
        />
        {errors.message && (
          <div className="text-red-500 text-sm mt-1">
            {errors.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary justify-self-center"
        style={{ opacity: isSubmitting ? 0.7 : 1 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;