import React from 'react';

const Section = ({ children, className = "", padding = "default" }) => {
  const paddingClasses = {
    sm: "py-8",
    default: "py-16",
    lg: "py-24",
    none: "py-0"
  };

  return (
    <section className={`${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
