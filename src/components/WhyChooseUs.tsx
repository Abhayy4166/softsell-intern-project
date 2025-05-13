
import React, { useEffect, useRef } from 'react';
import { Shield, Award, FastForward, DollarSign } from 'lucide-react';

type BenefitProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Benefit = ({ benefit, index }: { benefit: BenefitProps; index: number }) => {
  const benefitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (benefitRef.current) {
      observer.observe(benefitRef.current);
    }
    
    return () => {
      if (benefitRef.current) {
        observer.unobserve(benefitRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={benefitRef}
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 opacity-0 translate-y-10"
    >
      <div className="mb-4 transform transition-transform hover:scale-110 hover:rotate-3 duration-300">{benefit.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: <FastForward className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
      title: 'Fast Process',
      description: 'Get valuations within 24 hours and payment within 48 hours of acceptance.'
    },
    {
      id: 2,
      icon: <Shield className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
      title: 'Secure & Compliant',
      description: 'Our process follows all legal requirements for license transfers and data security.'
    },
    {
      id: 3,
      icon: <DollarSign className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
      title: 'Best Value',
      description: 'Our network of buyers ensures you get the maximum market value for your licenses.'
    },
    {
      id: 4,
      icon: <Award className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
      title: 'Expert Support',
      description: 'Our team of license specialists handles the entire process for you, end-to-end.'
    }
  ];

  return (
    <section className="py-24 transition-colors">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've optimized every aspect of the software license resale process to deliver the best possible experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={benefit.id}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
