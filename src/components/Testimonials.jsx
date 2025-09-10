import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../utils/scrollAnimations';

const Testimonials = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "MyBitcoinFuture has revolutionized how we manage our Bitcoin treasury. The xpub-only architecture gives us complete confidence in our security.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: "SC"
    },
    {
      quote: "Finally, a Bitcoin treasury solution that doesn't require us to trust third parties. The self-hosted deployment was exactly what we needed.",
      author: "Michael Rodriguez",
      role: "Treasury Manager, FinanceCo",
      avatar: "MR"
    },
    {
      quote: "The plugin ecosystem is incredible. We've customized our setup exactly to our needs while maintaining complete sovereignty.",
      author: "Dr. Emily Watson",
      role: "Head of Operations, CryptoFund",
      avatar: "EW"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Trusted by Bitcoin Professionals
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Organizations worldwide trust MyBitcoinFuture for their Bitcoin treasury management needs.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {isVisible && (
            <div className="testimonial-card">
              <blockquote className="text-xl text-slate-200 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="metric-value text-primary-400">500+</div>
            <div className="metric-label">Organizations</div>
          </div>
          <div className="text-center">
            <div className="metric-value text-green-400">$2B+</div>
            <div className="metric-label">Bitcoin Managed</div>
          </div>
          <div className="text-center">
            <div className="metric-value text-blue-400">99.9%</div>
            <div className="metric-label">Uptime</div>
          </div>
          <div className="text-center">
            <div className="metric-value text-yellow-400">24/7</div>
            <div className="metric-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
