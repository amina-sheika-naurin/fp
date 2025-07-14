import { CheckCircle, Building, Layers, Shield } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

export default function CivilFoundations() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Foundations & Concrete Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Robust building bases, slabs, manholes, chambers, drainage structures.
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
                  Expert Foundation & Concrete Solutions
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Providing comprehensive civil construction services with focus on foundational 
                  concrete works and drainage systems for industrial and commercial projects.
                </p>
              </div>
            </ScrollAnimation>

            {/* Core Services */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Foundation Works</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Robust concrete foundations ensuring structural integrity and longevity
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Structural Slabs</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  High-quality concrete slabs designed for industrial and commercial applications
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Drainage Systems</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Comprehensive drainage solutions including manholes and chambers
                </p>
              </div>
              </div>
            </ScrollAnimation>

            {/* Specialized Services */}
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-6">Specialized Services</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Concrete Shuttering & Enclosures</h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Professional concrete shuttering services for precise forming and high-quality finishes.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Precision forming systems",
                      "Quality concrete finishes",
                      "Structural enclosures",
                      "Custom shuttering solutions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Manhole Systems</h4>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Complete manhole construction and drainage pipe installation for infrastructure projects.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Precast and cast-in-place manholes",
                      "Drainage pipe connections",
                      "Access chamber construction",
                      "Utility access systems"
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

            {/* Project Highlights */}
            <div className="mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-8">Foundation Excellence</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">LIWA Plastics Foundation</h4>
                  <p className="text-gray-600 font-light mb-4">
                    Successfully completed foundational concrete works for LIWA Plastics manufacturing 
                    facility in Sohar, ensuring robust structural support.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Industrial-grade concrete foundations",
                      "Comprehensive drainage integration",
                      "Structural integrity assurance"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Technical Capabilities</h4>
                  <p className="text-gray-600 font-light mb-4">
                    Our civil engineering team delivers precision in every foundation project 
                    with advanced construction techniques.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Soil analysis and foundation design",
                      "Reinforced concrete construction",
                      "Quality control and testing"
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

            {/* Commitment to Quality */}
            <div className="bg-gray-900 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-normal mb-6">Quality & Durability</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Every foundation we build is designed to last, using the highest quality materials 
                and construction techniques to ensure structural integrity for decades to come.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Construction Standards</h4>
                  <div className="space-y-3">
                    {[
                      "High-grade concrete mixtures",
                      "Proper reinforcement placement",
                      "Quality control at every stage"
                    ].map((standard, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Project Management</h4>
                  <div className="space-y-3">
                    {[
                      "Experienced construction teams",
                      "Timely project completion",
                      "Safety compliance standards"
                    ].map((management, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{management}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}