import { CheckCircle, Clock, Shield, Wrench } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

export default function PipingMaintenance() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Industrial maintenance and repair work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Shutdown, Maintenance & Emergency Repairs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              In-situ lamination, bonding, valve replacement, onsite testing for zero-downtime performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Expert Shutdown & Maintenance Services
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  AGET has a strong engineering & construction team for maintenance and repair of 
                  fibre glass products. Our team is capable of completing shutdown works at higher 
                  quality within specified time limits.
                </p>
              </div>
            </ScrollAnimation>

            {/* Core Services */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">In-Situ Lamination</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Over time, AGET has built expertise in in-situ lamination over concrete surfaces, 
                  manholes and drainage systems.
                </p>
                <ul className="space-y-2">
                  {[
                    "Concrete surface lamination",
                    "Manhole systems",
                    "Drainage system repairs",
                    "On-site curing & testing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Emergency Shutdown</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Time-critical shutdown services ensuring operational continuity and minimal 
                  downtime for industrial facilities.
                </p>
                <ul className="space-y-2">
                  {[
                    "24/7 emergency response",
                    "Rapid mobilization",
                    "Critical repairs & bonding",
                    "Quality within time limits"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </ScrollAnimation>

            {/* Maintenance Capabilities */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
                <h3 className="text-2xl font-normal text-gray-900 mb-6">Maintenance Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Repair & Lamination",
                    description: "Expert repair of fiberglass products with precision lamination techniques"
                  },
                  {
                    icon: Wrench,
                    title: "Bonding Works",
                    description: "Professional bonding services for pipeline joints and connections"
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    description: "100% quality testing and validation for all maintenance work"
                  }
                ].map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-normal text-gray-900 mb-2 whitespace-nowrap">{capability.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{capability.description}</p>
                    </div>
                  );
                })}
              </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="bg-gray-900 rounded-sm p-8 text-white">
                <h3 className="text-2xl font-normal mb-6">Proven Success</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Our maintenance expertise was demonstrated in the Majis Sohar Shutdown project, 
                where we executed time-critical shutdown services ensuring operational continuity 
                for the industrial facility.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Key Achievements</h4>
                  <div className="space-y-3">
                    {[
                      "Zero downtime during critical operations",
                      "Emergency response within specified time",
                      "Quality maintenance ensuring continuity"
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Technical Excellence</h4>
                  <div className="space-y-3">
                    {[
                      "FPI certified technicians",
                      "Advanced lamination techniques",
                      "Comprehensive quality testing"
                    ].map((excellence, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{excellence}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}