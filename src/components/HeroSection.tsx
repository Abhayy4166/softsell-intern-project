
import React from 'react';
import { Button } from '../components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute inset-0 pattern-dots opacity-70 -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          <h1 className="font-bold animate-fade-in">
            Transform Unused Software Licenses <br className="hidden md:inline" />
            Into <span className="text-gradient">Immediate Revenue</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl animate-fade-in delay-100">
            SoftSell helps businesses recover value from idle software licenses.
            Our marketplace connects sellers with verified buyers for a secure, profitable resale process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-200">
            <Button className="bg-gradient text-white font-medium px-8 py-6 rounded-lg shadow-soft-lg hover:shadow-soft-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Sell My Licenses
            </Button>
            <Button variant="outline" className="font-medium px-8 py-6 rounded-lg border-2 hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 dark:border-gray-700 dark:hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
