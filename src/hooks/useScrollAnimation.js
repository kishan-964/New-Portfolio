import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is coming into view
            entry.target.classList.add('scroll-animate-in');
            entry.target.classList.remove('scroll-animate-out');
          } else {
            // Element is leaving view
            entry.target.classList.add('scroll-animate-out');
            entry.target.classList.remove('scroll-animate-in');
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before fully visible
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return ref;
}

// Hook for staggered scroll animations for multiple children
export function useScrollAnimationStagger(staggerDelay = 0.1, threshold = 0.15) {
  const ref = useRef(null);
  const staggerMs = Math.round(staggerDelay * 1000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children animations with uniform timing
            const children = entry.target.querySelectorAll('[data-scroll-item]');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('scroll-animate-in');
                child.classList.remove('scroll-animate-out');
              }, index * staggerMs);
            });
          } else {
            // Animate out synchronously
            const children = entry.target.querySelectorAll('[data-scroll-item]');
            children.forEach((child) => {
              child.classList.add('scroll-animate-out');
              child.classList.remove('scroll-animate-in');
            });
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, staggerMs]);

  return ref;
}
