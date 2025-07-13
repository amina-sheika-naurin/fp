"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Fibroplast delivered on time, under budget, with zero safety incidents. Their professionalism and expertise in GRP piping systems exceeded our expectations.",
    author: "Ahmed Al-Rashdi",
    position: "Project Manager",
    company: "Duqm Refinery",
    project: "DUQM Refinery EPC1"
  },
  {
    id: 2,
    quote: "The team's ability to mobilize quickly for emergency repairs saved us significant downtime. Their 24/7 support is truly exceptional.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "Sohar Power Company",
    project: "Sohar 2 IPP Shutdown"
  },
  {
    id: 3,
    quote: "Excellent coordination between their civil and piping teams. The integrated approach streamlined our entire project timeline.",
    author: "Mohammed Al-Balushi",
    position: "Engineering Lead",
    company: "Oman Oil Company",
    project: "Duqm Bunker Facility"
  }
];

const clients = [
  { name: "Oman Oil", logo: "/oman-oil-logo.png" },
  { name: "DUQM Refinery", logo: "/duqmrifeny-logo.png" },
  { name: "LIWA Plastics", logo: "/liwaplastics-logo.png" },
  { name: "Petrofac", logo: "/petrofac-logo.png" },
  { name: "Daewoo", logo: "/daewoo-logo.png" },
  { name: "Samsung", logo: "/samsung-logo.avif" }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 250);
  };

  // Auto-swipe functionality with progress
  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }

    const duration = 2000; // 2 seconds
    const intervalTime = 50; // Update every 50ms
    const step = 100 / (duration / intervalTime);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          nextTestimonial();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(progressInterval);
  }, [currentTestimonial, isPaused, isAnimating]);

  const handleManualNavigation = (action: () => void) => {
    setIsPaused(true);
    action();
    // Resume auto-swipe after 10 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Building lasting partnerships through excellence, reliability, and innovation.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto mb-24">
          <div 
            className="relative bg-gray-50 rounded-sm p-12 md:p-16 border border-gray-200"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="absolute top-8 left-8 w-8 h-8 text-gray-300" />
            
            <div className="relative overflow-hidden">
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isAnimating ? 'opacity-0 transform translate-x-8' : 'opacity-100 transform translate-x-0'
                }`}
              >
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-10 font-light">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-normal text-lg text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-gray-600 font-light">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-sm text-blue-600 mt-2 font-light">
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleManualNavigation(prevTestimonial)}
                      className="group p-4 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 transition-all duration-300"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </button>
                    <button
                      onClick={() => handleManualNavigation(nextTestimonial)}
                      className="group p-4 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 transition-all duration-300"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? 'bg-gray-900' : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-center mb-16 text-gray-900">
            Our Valued Clients
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-8 bg-white border border-gray-200 rounded-sm hover:border-gray-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-sm flex items-center justify-center mb-4 group-hover:bg-white transition-colors p-3">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={80}
                      height={80}
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm font-light text-gray-600">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}