import { Wrench, Clock, Package } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

const services = [
  {
    icon: Wrench,
    title: "GRP / GRE / GRVE Pipe Installation",
    description: "Seamless installation for firewater, cooling, raw-water systems—diameters from 50 mm to 2,800 mm.",
    features: [
      "High pressure and raw water pipelines",
      "Fire water and cooling water circulation",
      "Diameter range: 50mm - 2800mm",
      "FPI certified bonders/laminators"
    ]
  },
  {
    icon: Clock,
    title: "Shutdown, Maintenance & Emergency Repairs",
    description: "In-situ lamination, bonding, valve replacement, onsite testing for zero‑downtime performance.",
    features: [
      "Emergency response teams",
      "Time-bounded completion",
      "Onsite piping repairs and modifications",
      "100% success rate in executed joints"
    ]
  },
  {
    icon: Package,
    title: "Trading & Supply",
    description: "End-to-end procurement: pipes, fittings, tanks, basins, ladders, manholes, trench covers.",
    features: [
      "GRP/GRE/GRVE pipes and fittings",
      "Tanks, ladders, basins, manholes",
      "ISO 9001:2008 certified manufacturers",
      "End-to-end pipeline construction"
    ]
  }
];

export default function PipingServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&q=80" 
            alt="Industrial piping system with large diameter pipes and valves"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Piping Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Professional GRP/GRE pipe installation, maintenance, and supply solutions for industrial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-sm p-8 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-normal text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Our Capabilities
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Engineered & constructed kilometres of pipelines across Oman with FPI certified teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fully Outsourced Routine Maintenance",
              "Fully Outsourced Asset Care", 
              "Emergency Response Teams",
              "Onsite Piping Repairs & Testing"
            ].map((capability, index) => (
              <div key={index} className="bg-white rounded-sm p-6 border border-gray-200 text-center">
                <p className="text-sm font-light text-gray-700">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}