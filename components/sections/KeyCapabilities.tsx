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
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Key Capabilities
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Industry-leading expertise and resources that set us apart 
            in delivering exceptional results for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 space-y-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-light text-blue-700 bg-blue-50 px-3 py-1 rounded-sm">
                      {capability.highlight}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-normal text-gray-900">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-base">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-sm p-12 md:p-16 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Advanced In-Situ Lamination & Concrete Restoration
          </h3>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            Our specialized teams utilize cutting-edge techniques for on-site repairs and restoration, 
            minimizing downtime and maximizing asset lifespan across critical infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            <div className="space-y-2">
              <AnimatedCounter value={98} suffix="%" />
              <div className="text-base font-light opacity-80">First-Time Success Rate</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter value={50} suffix="%" />
              <div className="text-base font-light opacity-80">Average Cost Savings</div>
            </div>
            <div className="space-y-2">
              <AnimatedCounter value={80} suffix="%" />
              <div className="text-base font-light opacity-80">Reduced Downtime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}