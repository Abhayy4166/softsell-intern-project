
import React, { useEffect, useRef } from 'react';
import { Upload, DollarSign, CheckCircle } from 'lucide-react';

type StepProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

const Step = ({ step, index }: { step: StepProps; index: number }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={stepRef}
      className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-soft transition-all duration-500 opacity-0 translate-y-10 hover:shadow-soft-lg hover:scale-[1.02] dark:border dark:border-gray-700"
    >
      <div className="flex justify-center items-center h-20 w-20 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-6 animate-float">
        {step.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
      
      {index < 2 && (
        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 rotate-[-30deg] z-10">
          <div className="w-8 h-0.5 bg-blue-300 dark:bg-blue-700"></div>
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Upload className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
      title: 'Upload License',
      description: 'Submit your software license details through our secure portal for evaluation.'
    },
    {
      id: 2,
      icon: <DollarSign className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
      title: 'Get Valuation',
      description: 'Receive a competitive market valuation based on demand and license specifics.'
    },
    {
      id: 3,
      icon: <CheckCircle className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment within 48 hours via your preferred method.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Turn your unused software licenses into cash with our simple three-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Step 
              key={step.id}
              step={{...step, index}}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
