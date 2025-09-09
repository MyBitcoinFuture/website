import React from 'react';

const ContactNotification = ({ notification }) => {
  if (!notification) return null;

  const getNotificationStyle = (type) => {
    const baseStyle = {
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
      animation: 'slideIn 0.3s ease'
    };

    switch (type) {
      case 'success':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
        };
      case 'error':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
        };
      default:
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #f7931a 0%, #ff8c00 100%)'
        };
    }
  };

  return (
    <>
      <div style={getNotificationStyle(notification.type)}>
        {notification.message}
      </div>
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
    </>
  );
};

export default ContactNotification;