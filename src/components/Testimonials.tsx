
import React, { useEffect, useRef } from 'react';

type TestimonialProps = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
};

const TestimonialCard = ({ testimonial, index }: { testimonial: TestimonialProps, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft transition-all duration-500 opacity-0 translate-y-10 hover:shadow-soft-lg hover:scale-[1.02] dark:border dark:border-gray-700"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="absolute top-0 left-10 transform -translate-y-4">
        <div className="text-5xl text-blue-500 opacity-20" aria-hidden="true">"</div>
      </div>
      <blockquote>
        <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
        <footer className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 mr-4" aria-hidden="true"></div>
          <div>
            <cite className="font-medium not-italic">{testimonial.name}</cite>
            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth, and their valuation exceeded our expectations.",
      name: "Sarah Jensen",
      role: "IT Director",
      company: "Dataflow Solutions"
    },
    {
      id: 2,
      quote: "As a growing startup, cash flow is critical. SoftSell allowed us to quickly monetize excess licenses from our recent downsizing, with funds in our account within 48 hours.",
      name: "Michael Rodriguez",
      role: "CFO",
      company: "Nexus Technologies"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors reveal-section" aria-labelledby="testimonials-heading">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="testimonials-heading" className="mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join hundreds of businesses that have successfully recovered value from idle software assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
