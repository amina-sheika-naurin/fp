import { CheckCircle, Droplets, Construction, Network } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

export default function CivilInfrastructure() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Infrastructure development and construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <ScrollAnimation animation="fadeInUp">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
                Drainage systems, sewerage lines, manhole construction, road access prep.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeInUp">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                  Complete Infrastructure Solutions
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Comprehensive infrastructure services including drainage systems, sewerage lines, 
                  and manhole construction for industrial and commercial projects.
                </p>
              </div>
            </ScrollAnimation>

            {/* Core Infrastructure Services */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Droplets className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Drainage Systems</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Comprehensive drainage solutions for effective water management and flood prevention
                  </p>
                </div>

                <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Network className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Sewerage Lines</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Professional sewerage line installation and maintenance for industrial facilities
                  </p>
                </div>

                <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Construction className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Access Preparation</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Road access preparation and site development for seamless project execution
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Specialized Infrastructure Services */}
            <ScrollAnimation animation="fadeInUp" delay={400}>
              <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
                <h3 className="text-2xl font-normal text-gray-900 mb-6">Specialized Services</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-4">Manhole Construction</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      Complete manhole systems construction with proper access points and utility connections 
                      for infrastructure networks.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Precast and cast-in-place manholes",
                        "Utility access systems",
                        "Proper depth and sizing",
                        "Safety compliance standards"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-4">Drainage Pipe Networks</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      Professional installation of drainage pipe networks ensuring effective water 
                      management and long-term performance.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Storm water drainage systems",
                        "Industrial wastewater lines",
                        "Surface water management",
                        "Underground pipe networks"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Project Success Stories */}
            <ScrollAnimation animation="fadeInUp" delay={600}>
              <div className="mb-16">
                <h3 className="text-2xl font-normal text-gray-900 mb-8">Infrastructure Excellence</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-normal text-gray-900 mb-4">DUQM Refinery Infrastructure</h4>
                    <p className="text-gray-600 font-light mb-4">
                      Comprehensive infrastructure development for the DUQM Refinery project, 
                      including drainage systems and sewerage line installation.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Large-scale drainage network installation",
                        "Industrial sewerage systems",
                        "Road access preparation"
                      ].map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-normal text-gray-900 mb-4">LIWA Plastics Infrastructure</h4>
                    <p className="text-gray-600 font-light mb-4">
                      Successful completion of comprehensive drainage systems for LIWA Plastics 
                      manufacturing facility ensuring proper water management.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Manufacturing facility drainage",
                        "Industrial wastewater management",
                        "Site access optimization"
                      ].map((capability, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Technical Excellence */}
            <ScrollAnimation animation="fadeInUp" delay={800}>
              <div className="bg-gray-900 rounded-sm p-8 text-white">
                <h3 className="text-2xl font-normal mb-6">Technical Excellence</h3>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  Our infrastructure services are designed to meet the highest industry standards, 
                  ensuring reliable, long-lasting solutions for complex industrial environments.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-normal text-white">Design & Planning</h4>
                    <div className="space-y-3">
                      {[
                        "Comprehensive site analysis",
                        "Advanced engineering design",
                        "Environmental compliance"
                      ].map((standard, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 font-light">{standard}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-normal text-white">Implementation</h4>
                    <div className="space-y-3">
                      {[
                        "Quality construction practices",
                        "Timely project delivery",
                        "Long-term performance assurance"
                      ].map((implementation, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 font-light">{implementation}</span>
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