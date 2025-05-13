
/**
 * Utility to handle scroll-based animations
 * This adds a "revealed" class to elements with the "reveal-section" class
 * when they enter the viewport
 */
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-section');
  
  const revealCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  };
  
  // Create the observer with appropriate options
  const observer = new IntersectionObserver(revealCallback, {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // negative margin means trigger before element is fully in view
  });
  
  // Observe all elements with the reveal-section class
  revealElements.forEach((element) => {
    observer.observe(element);
  });
  
  return () => {
    // Cleanup function
    revealElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};

/**
 * Apply a subtle parallax effect to elements with the "parallax" class
 */
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top + scrollY;
      const elementHeight = element.clientHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = (elementTop + elementHeight/2) - (scrollY + viewportHeight/2);
      
      // Apply transform based on distance (adjust factor for subtlety)
      const parallaxFactor = 0.05;
      const transform = distanceFromCenter * parallaxFactor;
      
      // Apply the transform
      (element as HTMLElement).style.transform = `translateY(${transform}px)`;
    });
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial call to position elements
  handleScroll();
  
  return () => {
    // Cleanup function
    window.removeEventListener('scroll', handleScroll);
  };
};
