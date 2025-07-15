"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

const services = [
  {
    title: "Piping Solutions",
    description: "Comprehensive solutions for industrial piping systems, tailored to your project needs.",
    href: "/services/piping",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Main pipeline */}
        <rect x="6" y="20" width="36" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" rx="2" />
        <rect x="6" y="26" width="36" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" rx="2" />
        {/* Connecting joints */}
        <circle cx="12" cy="22" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="36" cy="28" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Flow indicators */}
        <path d="M16 22l4-2 4 2M28 28l4-2 4 2" stroke="currentColor" strokeWidth="0.7" fill="none" />
      </svg>
    )
  },
  {
    title: "GRP Pipe Installation",
    description: "Expert installation of GRP/GRE/GRVE pipes from 50mm to 2800mm diameter for industrial systems.",
    href: "/services/piping/installation",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Installation tools */}
        <path d="M8 12l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
        {/* Pipe sections being installed */}
        <rect x="16" y="20" width="24" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" rx="2" />
        <rect x="16" y="26" width="24" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" rx="2" />
        {/* Installation points */}
        <circle cx="18" cy="22" r="1.5" fill="currentColor" />
        <circle cx="38" cy="28" r="1.5" fill="currentColor" />
        {/* Worker tool indicator */}
        <path d="M10 36l4-4 4 4" stroke="currentColor" strokeWidth="0.7" fill="none" />
      </svg>
    )
  },
  {
    title: "Shutdown & Maintenance",
    description: "Emergency repairs, in-situ lamination, and maintenance services ensuring zero-downtime performance.",
    href: "/services/piping/maintenance",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Wrench tool */}
        <path d="M14 18l-4-4a3 3 0 0 1 4-4l4 4" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 18l16 16" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
        {/* Pipeline being repaired */}
        <rect x="20" y="28" width="20" height="3" fill="none" stroke="currentColor" strokeWidth="0.7" rx="1.5" />
        {/* Repair indicator */}
        <circle cx="32" cy="29.5" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2,2" />
        {/* Emergency indicator */}
        <path d="M36 16l2-4 2 4-2 1z" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Trading & Supply",
    description: "End-to-end procurement of pipes, fittings, tanks, and specialized fiberglass products.",
    href: "/services/piping/supply",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Warehouse/storage */}
        <rect x="8" y="16" width="32" height="20" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <path d="M8 16l16-8 16 8" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="round" />
        {/* Supply boxes */}
        <rect x="12" y="24" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="21" y="24" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="30" y="24" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Delivery truck */}
        <rect x="14" y="38" width="12" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" rx="1" />
        <circle cx="18" cy="42" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="22" cy="42" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
      </svg>
    )
  },
  {
    title: "Civil Construction",
    description: "Comprehensive solutions for industrial and civil construction projects, ensuring quality and efficiency.",
    href: "/services/civil",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Building structure */}
        <rect x="12" y="12" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Windows */}
        <rect x="16" y="18" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="22" y="18" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="28" y="18" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="16" y="26" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="28" y="26" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Construction crane */}
        <line x1="38" y1="8" x2="38" y2="24" stroke="currentColor" strokeWidth="0.7" />
        <line x1="32" y1="12" x2="44" y2="12" stroke="currentColor" strokeWidth="0.7" />
        <path d="M38 24l-2 2 2 2 2-2z" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Foundations & Concrete",
    description: "Robust concrete foundations, structural slabs, and specialized construction works.",
    href: "/services/civil/foundations",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Foundation layers */}
        <rect x="8" y="32" width="32" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="12" y="26" width="24" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="16" y="20" width="16" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <rect x="20" y="14" width="8" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Ground line */}
        <line x1="4" y1="38" x2="44" y2="38" stroke="currentColor" strokeWidth="0.7" />
        {/* Reinforcement bars */}
        <line x1="10" y1="30" x2="10" y2="34" stroke="currentColor" strokeWidth="0.7" />
        <line x1="24" y1="18" x2="24" y2="34" stroke="currentColor" strokeWidth="0.7" />
        <line x1="38" y1="30" x2="38" y2="34" stroke="currentColor" strokeWidth="0.7" />
        {/* Concrete texture dots */}
        <circle cx="14" cy="35" r="0.5" fill="currentColor" />
        <circle cx="22" cy="29" r="0.5" fill="currentColor" />
        <circle cx="30" cy="35" r="0.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Excavation & Earthworks",
    description: "Precision site preparation, trenching, backfilling, and earthwork optimization.",
    href: "/services/civil/excavation",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Excavator */}
        <rect x="8" y="32" width="12" height="6" fill="none" stroke="currentColor" strokeWidth="0.7" rx="2" />
        <circle cx="12" cy="38" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="16" cy="38" r="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Excavator arm */}
        <path d="M20 32l8-8 8 4" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" />
        {/* Bucket */}
        <path d="M34 26l4-2 2 4-4 2z" fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinejoin="round" />
        {/* Excavated earth */}
        <path d="M24 36c0-4 4-8 12-6s8 8 4 10c-4 2-16-4-16-4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Ground particles */}
        <circle cx="30" cy="34" r="0.5" fill="currentColor" />
        <circle cx="34" cy="36" r="0.5" fill="currentColor" />
        <circle cx="28" cy="38" r="0.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Infrastructure Services",
    description: "Drainage systems, sewerage lines, and comprehensive infrastructure development.",
    href: "/services/civil/infrastructure",
    icon: (
      <svg viewBox="0 0 48 48" className="w-20 h-20">
        {/* Main infrastructure grid */}
        <line x1="12" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="0.7" />
        <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" strokeWidth="0.7" />
        {/* Junction points */}
        <circle cx="24" cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="12" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="36" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="24" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="24" cy="36" r="2" fill="none" stroke="currentColor" strokeWidth="0.7" />
        {/* Drainage lines */}
        <path d="M16 28l-4 4M32 28l4 4M24 16l-4-4M24 32l4 4" stroke="currentColor" strokeWidth="0.7" />
        {/* Water flow indicators */}
        <path d="M18 22l2-1 2 1M26 22l2-1 2 1" stroke="currentColor" strokeWidth="0.7" fill="none" />
      </svg>
    )
  }
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  featured?: boolean;
}

function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="group relative bg-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-500 p-4 block h-full min-h-[200px] overflow-hidden"
    >
      <div className="relative flex flex-col justify-between h-full">
        {/* Title - Big and centered */}
        <div className="relative">
          {/* Title - Visible by default, hidden on hover */}
          <h3 className="text-xl font-light text-gray-900 group-hover:text-white group-hover:opacity-0 transition-all duration-500 leading-tight">
            {title}
          </h3>
          
          {/* Description - Hidden by default, visible on hover in same position */}
          <p className="absolute inset-0 text-base text-white font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        </div>
        
        {/* Bottom row: Icon and Arrow parallel */}
        <div className="flex items-end justify-between mt-6">
          <div className="w-20 h-20 text-blue-600 group-hover:text-white transition-colors duration-500">
            <div className="w-full h-full flex items-center justify-center">
              {icon}
            </div>
          </div>
        
          <ArrowRight className="w-6 h-6 mb-4 text-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
}

export default function WhatWeOffer() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Build, install, maintain */}
          <div>
            <div className="lg:sticky lg:top-32">
              <ScrollAnimation animation="fadeInUp">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                  Build, install, maintain
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                  Build smart, install fast, maintain big and stay in control of your industrial infrastructure with proven expertise.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          {/* Right Column - Why Fibroplast? */}
          <div>
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h2 className="text-5xl lg:text-6xl font-light text-blue-600 mb-8">
                Why Fibroplast?
              </h2>
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                See what the industry analysts have to say and start your hands-on journey.
              </p>
            </ScrollAnimation>
            
            <div className="space-y-4">
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <Link href="/about" className="flex items-center gap-3 text-blue-600 hover:gap-4 transition-all">
                  <span className="font-light">Read why clients named Fibroplast a Leader in Pipeline Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInUp" delay={500}>
                <Link href="/capabilities" className="flex items-center gap-3 text-blue-600 hover:gap-4 transition-all">
                  <span className="font-light">Discover why industry ranked Fibroplast a Leader in Civil Construction</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInUp" delay={600}>
                <Link href="/projects" className="flex items-center gap-3 text-blue-600 hover:gap-4 transition-all">
                  <span className="font-light">Get 35+ years of engineering excellence</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fadeInUp" delay={700}>
                <Link href="/contact" className="flex items-center gap-3 text-blue-600 hover:gap-4 transition-all">
                  <span className="font-light">See why we top the performance chart in quality understanding</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Services Grid - Exact IBM Watson Technology Pattern */}
        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-200">
            {services.map((service, index) => {
              const isLastInRow = (index + 1) % 4 === 0;
              const isLastRow = index >= 4;
              
              return (
                <div 
                  key={index} 
                  className={`relative ${
                    !isLastInRow ? 'border-r border-gray-200' : ''
                  } ${
                    !isLastRow ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <ServiceCard {...service} />
                </div>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}