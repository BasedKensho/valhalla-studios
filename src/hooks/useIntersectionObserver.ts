import { useEffect, useRef, useState, useCallback } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '-50px 0px',
  once = true
}: IntersectionOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const isElementIntersecting = entry.isIntersecting;
    
    if (once && isElementIntersecting && !hasIntersected) {
      setHasIntersected(true);
      setIsIntersecting(true);
      
      // Cleanup observer if we only want to trigger once
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    } else if (!once) {
      setIsIntersecting(isElementIntersecting);
    }
  }, [once, hasIntersected]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (once && hasIntersected)) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer with options
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, once, hasIntersected, handleIntersection]);

  return { ref: elementRef, isIntersecting: once ? hasIntersected : isIntersecting };
};