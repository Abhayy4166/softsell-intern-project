
import React from 'react';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import ThemeToggle from '@/components/ThemeToggle';
import AIChatWidget from '@/components/chat/AIChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="py-6 bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300" role="banner">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">SoftSell</div>
            <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#why-choose-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button type="button" className="md:hidden" aria-label="Toggle mobile menu" aria-expanded="false">
                {/* Mobile menu button */}
                <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>
        <section id="how-it-works" aria-labelledby="how-it-works-heading" className="scroll-mt-16">
          <HowItWorks />
        </section>
        <section id="why-choose-us" aria-labelledby="why-choose-us-heading" className="scroll-mt-16">
          <WhyChooseUs />
        </section>
        <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-16">
          <Testimonials />
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-16">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 transition-colors" role="contentinfo">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">SoftSell</h3>
              <p className="text-gray-400 dark:text-gray-300">
                Transforming idle software licenses into immediate revenue for businesses of all sizes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="not-italic">
                <ul className="space-y-2">
                  <li className="text-gray-400 dark:text-gray-300">
                    <a href="mailto:hello@softsell.com" className="hover:text-white transition-colors">hello@softsell.com</a>
                  </li>
                  <li className="text-gray-400 dark:text-gray-300">
                    <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                  </li>
                  <li className="text-gray-400 dark:text-gray-300">123 Market St, San Francisco, CA</li>
                </ul>
              </address>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  );
};

export default Index;
