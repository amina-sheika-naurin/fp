import Link from "next/link";

const pipingServices = [
  {
    graphic: "installation",
    title: "GRP / GRE / GRVE Pipe Installation",
    description: "Seamless installation for firewater, cooling, raw-water systems—diameters from 50 mm to 2,800 mm.",
    href: "/services/piping/installation"
  },
  {
    graphic: "maintenance",
    title: "Shutdown, Maintenance & Emergency Repairs",
    description: "In-situ lamination, bonding, valve replacement, onsite testing for zero-downtime performance.",
    href: "/services/piping/maintenance"
  },
  {
    graphic: "supply",
    title: "Trading & Supply",
    description: "End-to-end procurement: pipes, fittings, tanks, basins, ladders, manholes, trench covers.",
    href: "/services/piping/supply"
  }
];

const civilServices = [
  {
    graphic: "foundations",
    title: "Foundations & Concrete Works",
    description: "Robust building bases, slabs, manholes, chambers, drainage structures.",
    href: "/services/civil/foundations"
  },
  {
    graphic: "excavation",
    title: "Excavation & Earthworks",
    description: "Precision site prep, backfilling, trenching, grading.",
    href: "/services/civil/excavation"
  },
  {
    graphic: "infrastructure",
    title: "Infrastructure Services",
    description: "Drainage systems, sewerage lines, manhole construction, road access prep.",
    href: "/services/civil/infrastructure"
  },
  {
    graphic: "integrated",
    title: "Integrated Civil-Piping Support",
    description: "Full cross-functional coordination to streamline large-scale industrial projects.",
    href: "/services/civil/integrated"
  }
];

interface ServiceCardProps {
  graphic: string;
  title: string;
  description: string;
  href: string;
}

const ServiceGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case "installation":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect x="10" y="35" width="80" height="15" fill="url(#pipeGrad)" rx="7.5" />
          <rect x="10" y="50" width="80" height="15" fill="url(#pipeGrad)" rx="7.5" />
          <circle cx="25" cy="50" r="12" fill="#3b82f6" opacity="0.3" />
          <circle cx="75" cy="50" r="12" fill="#3b82f6" opacity="0.3" />
          <path d="M25 30 L25 70 M75 30 L75 70" stroke="#1d4ed8" strokeWidth="2" opacity="0.5" />
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="40" width="60" height="20" fill="#e5e7eb" rx="3" />
          <rect x="20" y="40" width="30" height="20" fill="#3b82f6" opacity="0.3" rx="3" />
          <circle cx="65" cy="50" r="15" fill="none" stroke="#1d4ed8" strokeWidth="2" opacity="0.4" />
          <path d="M58 50 L65 57 L72 43" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "supply":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="15" y="60" width="30" height="25" fill="#3b82f6" opacity="0.2" rx="2" />
          <rect x="35" y="45" width="30" height="40" fill="#1d4ed8" opacity="0.25" rx="2" />
          <rect x="55" y="55" width="30" height="30" fill="#3b82f6" opacity="0.2" rx="2" />
          <path d="M30 40 L50 25 L70 40" stroke="#1d4ed8" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      );
    case "foundations":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="20" y="60" width="60" height="25" fill="#6b7280" opacity="0.3" rx="2" />
          <rect x="25" y="45" width="50" height="15" fill="#6b7280" opacity="0.4" rx="2" />
          <rect x="30" y="30" width="40" height="15" fill="#6b7280" opacity="0.5" rx="2" />
          <line x1="10" y1="85" x2="90" y2="85" stroke="#374151" strokeWidth="2" />
        </svg>
      );
    case "excavation":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20 70 Q50 50, 80 70" fill="#fbbf24" opacity="0.3" />
          <path d="M20 70 L80 70 L80 85 L20 85 Z" fill="#92400e" opacity="0.3" />
          <path d="M35 50 L40 45 L45 50 L40 70" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="65" cy="60" r="3" fill="#92400e" />
          <circle cx="55" cy="65" r="2" fill="#92400e" />
        </svg>
      );
    case "infrastructure":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <line x1="20" y1="50" x2="80" y2="50" stroke="#6b7280" strokeWidth="4" />
          <line x1="50" y1="20" x2="50" y2="80" stroke="#6b7280" strokeWidth="4" />
          <circle cx="50" cy="50" r="8" fill="#3b82f6" opacity="0.5" />
          <circle cx="20" cy="50" r="5" fill="#3b82f6" opacity="0.4" />
          <circle cx="80" cy="50" r="5" fill="#3b82f6" opacity="0.4" />
          <circle cx="50" cy="20" r="5" fill="#3b82f6" opacity="0.4" />
          <circle cx="50" cy="80" r="5" fill="#3b82f6" opacity="0.4" />
        </svg>
      );
    case "integrated":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="15" y="25" width="30" height="20" fill="#3b82f6" opacity="0.3" rx="2" />
          <rect x="55" y="25" width="30" height="20" fill="#6b7280" opacity="0.3" rx="2" />
          <rect x="35" y="55" width="30" height="20" fill="#10b981" opacity="0.3" rx="2" />
          <line x1="30" y1="45" x2="50" y2="55" stroke="#374151" strokeWidth="2" />
          <line x1="70" y1="45" x2="50" y2="55" stroke="#374151" strokeWidth="2" />
          <circle cx="50" cy="65" r="3" fill="#1d4ed8" />
        </svg>
      );
    default:
      return null;
  }
};

function ServiceCard({ graphic, title, description, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="group relative bg-gray-50 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-gray-200 hover:border-gray-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative space-y-4">
        <div className="w-20 h-20 mb-4">
          <ServiceGraphic type={graphic} />
        </div>
        <h3 className="text-lg font-normal text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed font-light">
          {description}
        </p>
        <div className="text-blue-600 text-sm font-normal group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          <span>Learn more</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function WhatWeOffer() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Comprehensive solutions for piping and civil construction, 
            backed by decades of expertise and cutting-edge technology.
          </p>
        </div>

        {/* Piping Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10">
            Piping Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Civil Construction */}
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-10">
            Civil Construction
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {civilServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}