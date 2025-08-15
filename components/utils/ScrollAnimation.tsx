"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fadeInUp" | "slideInFromLeft" | "slideInFromRight" | "scaleIn";
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({ 
  children, 
  animation = "fadeInUp", 
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current; // ✅ Store a stable reference
  
    if (!element) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add(`animate-${animation}`);
          }, delay);
        }
      },
      { threshold }
    );
  
    observer.observe(element);
  
    return () => {
      observer.unobserve(element); // ✅ Use stored element
    };
  }, [animation, delay, threshold]);
  

  return (
    <div ref={ref} className="opacity-0 ">
      {children}
    </div>
  );
}