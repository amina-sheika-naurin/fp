"use client";

import { 
  Award, 
  Clock, 
  Shield, 
  Zap,
  Users,
  Globe
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

// Counter component with animation
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(stepValue * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl font-light">
      {count}{suffix}
    </div>
  );
};

const capabilities = [
  {
    icon: Award,
    title: "FPI-Certified Teams",
    description: "Expert teams with over 35 years of combined experience in GRP/GRE piping systems.",
    highlight: "35+ Years"
  },
  {
    icon: Shield,
    title: "ISO-Certified Standards",
    description: "Quality, safety, and environmental systems certified to international standards.",
    highlight: "ISO 9001, 14001, 45001"
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "24/7 capability for emergency shutdowns and reactive repairs across the region.",
    highlight: "24/7 Support"
  },
  {
    icon: Clock,
    title: "Rapid Mobilization",
    description: "Quick deployment of resources and equipment from strategic locations.",
    highlight: "< 48 Hours"
  },
  {
    icon: Users,
    title: "Integrated Teams",
    description: "Cross-functional expertise combining civil and piping disciplines seamlessly.",
    highlight: "500+ Professionals"
  },
  {
    icon: Globe,
    title: "Regional Presence",
    description: "Strategic bases in Sohar, Duqm, and Dubai for optimal project coverage.",
    highlight: "3 Locations"
  }
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 max-w-4xl">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
              Industry-leading expertise and resources that set us apart 
              in delivering exceptional results for every project.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isEven = index % 2 === 0;
            
            return (
              <ScrollAnimation key={index} animation="fadeInUp" delay={100 + index * 50}>
                <div className="group">
                  <div className={`grid lg:grid-cols-2 gap-12 items-start ${isEven ? '' : 'lg:grid-cols-2'}`}>
                    {/* Content section */}
                    <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1.5">
                          {capability.highlight}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                        {capability.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>

                    {/* Meaningful image for each capability */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="h-60 bg-gray-100 border border-gray-200 overflow-hidden relative">
                        {index === 0 && (
                          <img 
                            src="/projectimage-2.jpeg" 
                            alt="FPI-certified piping installation teams"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 1 && (
                          <img 
                            src="/cap-2.jpg" 
                            alt="ISO certified industrial piping quality standards"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 && (
                          <img 
                            src="/cap-3.jpg" 
                            alt="24/7 emergency pipeline repair response"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 3 && (
                          <img 
                            src="/cap-4.png" 
                            alt="Construction equipment rapid mobilization"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 4 && (
                          <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Integrated piping and civil construction teams"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 5 && (
                          <img 
                            src="/cap-5.webp" 
                            alt="Regional industrial facilities in Middle East"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {/* Overlay for better visual integration */}
                        <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Separator line */}
                  {index < capabilities.length - 1 && (
                    <div className="mt-12"></div>
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Additional highlight */}
        <ScrollAnimation animation="fadeInUp" delay={400}>
          <div className="mt-24  bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                    Advanced In-Situ Lamination & Concrete Restoration
                  </h3>
                </div>
                <div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our specialized teams utilize cutting-edge techniques for on-site repairs and restoration, 
                    minimizing downtime and maximizing asset lifespan across critical infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                  <div className="text-7xl lg:text-8xl font-light mb-4" style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    <AnimatedCounter value={99} suffix="%" />
                  </div>
                  <p className="text-gray-900 font-normal">
                    Pipeline Integrity Rate
                  </p>
                </div>
                
                <div>
                  <div className="text-7xl lg:text-8xl font-light mb-4" style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    <AnimatedCounter value={35} suffix="+" />
                  </div>
                  <p className="text-gray-900 font-normal">
                    Years of Experience
                  </p>
                </div>
                
                <div>
                  <div className="text-7xl lg:text-8xl font-light mb-4" style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    <AnimatedCounter value={24} suffix="/7" />
                  </div>
                  <p className="text-gray-900 font-normal">
                    Emergency Response
                  </p>
                </div>

                <div>
                  <div className="text-7xl lg:text-8xl font-light mb-4" style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <p className="text-gray-900 font-normal">
                    Safety Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}