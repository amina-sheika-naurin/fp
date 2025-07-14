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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setTimeout(() => {
            if (ref.current) {
              ref.current.classList.add(`animate-${animation}`);
            }
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className="opacity-0 ">
      {children}
    </div>
  );
}