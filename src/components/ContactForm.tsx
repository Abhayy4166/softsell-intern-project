
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const { toast } = useToast();
  
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: 'enterprise',
    message: ''
  });
  
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [errors, setErrors] = useState<Partial<FormData>>({});
  
  const licenseTypes = [
    { value: 'enterprise', label: 'Enterprise License' },
    { value: 'volume', label: 'Volume License' },
    { value: 'subscription', label: 'Subscription License' },
    { value: 'perpetual', label: 'Perpetual License' },
    { value: 'other', label: 'Other' }
  ];
  
  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : '';
      case 'email':
        return !value.trim()
          ? 'Email is required'
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'company':
        return !value.trim() ? 'Company name is required' : '';
      case 'message':
        return !value.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  };
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    Object.entries(formData).forEach(([key, value]) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, value);
      if (error) {
        newErrors[fieldName] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name as keyof FormData]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormState('submitting');
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form submitted:', formData);
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormState('success');
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: 'enterprise',
          message: ''
        });
        setTouched({});
      } catch (error) {
        console.error('Submission error:', error);
        setFormState('error');
        toast({
          title: "Submission failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-24 dark:bg-gray-800/50 transition-colors">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="mb-4">Get Your Free License Valuation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Fill out the form and our team will provide a no-obligation valuation of your software licenses within 24 hours.
            </p>
            <div className="space-y-5">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="dark:text-gray-200">No obligation to sell</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="dark:text-gray-200">100% confidential</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 rounded-full p-1">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="dark:text-gray-200">Response within 24 hours</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-soft animate-fade-in delay-100 transition-all hover:shadow-soft-lg dark:border dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-floating">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 focus:border-blue-500 dark:focus:ring-blue-900 dark:focus:border-blue-700'
                  } dark:bg-gray-800`}
                />
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div className="form-floating">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 focus:border-blue-500 dark:focus:ring-blue-900 dark:focus:border-blue-700'
                  } dark:bg-gray-800`}
                />
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div className="form-floating">
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder=" "
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                    errors.company 
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 focus:border-blue-500 dark:focus:ring-blue-900 dark:focus:border-blue-700'
                  } dark:bg-gray-800`}
                />
                <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                {errors.company && touched.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>
              
              <div className="space-y-1">
                <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">License Type</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 dark:focus:ring-blue-900 dark:focus:border-blue-700 transition-all duration-200 dark:bg-gray-800"
                >
                  {licenseTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-floating">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all duration-200 ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 focus:border-blue-500 dark:focus:ring-blue-900 dark:focus:border-blue-700'
                  } dark:bg-gray-800`}
                />
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                {errors.message && touched.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full bg-gradient text-white font-medium py-3 rounded-lg btn-animate-primary"
              >
                {formState === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Get Free Valuation"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
