import { Building, Truck, Layers, Settings } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

const services = [
  {
    icon: Building,
    title: "Foundations & Concrete Works",
    description: "Robust building bases, slabs, manholes, chambers, drainage structures.",
    features: [
      "Industrial-grade concrete foundations",
      "Structural slabs and bases",
      "Manholes and chambers construction",
      "Specialized drainage structures"
    ]
  },
  {
    icon: Truck,
    title: "Excavation & Earthworks",
    description: "Precision site prep, backfilling, trenching, grading.",
    features: [
      "Precision site preparation",
      "Professional backfilling services",
      "Trenching and grading",
      "Earthwork optimization"
    ]
  },
  {
    icon: Layers,
    title: "Infrastructure Services",
    description: "Drainage systems, sewerage lines, manhole construction, road access prep.",
    features: [
      "Comprehensive drainage systems",
      "Sewerage line installation",
      "Manhole construction",
      "Road access preparation"
    ]
  },
  {
    icon: Settings,
    title: "Integrated Civil-Piping Support",
    description: "Full cross-functional coordination to streamline large-scale industrial projects.",
    features: [
      "Cross-functional project coordination",
      "Integrated civil and piping solutions",
      "Large-scale project management",
      "Streamlined industrial operations"
    ]
  }
];

export default function CivilServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80" 
            alt="Industrial construction site with concrete foundations and heavy machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Civil Construction
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Infrastructure and construction services for industrial facilities with integrated civil-piping coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-8">
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

      {/* In-Situ Lamination */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              In-Situ Lamination Expertise
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Built expertise in in-situ lamination over concrete surfaces, manholes and drainage systems.
            </p>
          </div>
          
          <div className="bg-white rounded-sm p-8 border border-gray-200 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-normal text-gray-900 mb-4">
                Specialized Applications
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Concrete Surface Lamination",
                  "Manhole Lamination", 
                  "Drainage System Protection"
                ].map((application, index) => (
                  <div key={index} className="text-center">
                    <p className="text-sm font-light text-gray-700">{application}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}