import { CheckCircle, Truck, Layers, Target } from "lucide-react";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

export default function CivilExcavation() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Excavation & Earthworks
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Precision site prep, backfilling, trenching, grading.
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
                  Professional Excavation & Earthwork Services
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Comprehensive earthwork solutions including excavation, laying, and backfilling 
                  as part of our end-to-end pipeline construction services.
                </p>
              </div>
            </ScrollAnimation>

            {/* Core Services */}
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-4">Precision Excavation</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Accurate excavation for pipeline trenches and foundation preparation
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Pipeline Laying</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Expert laying and positioning of pipelines with precise alignment
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Backfilling & Compaction</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Professional backfilling with proper compaction for long-term stability
                </p>
              </div>
              </div>
            </ScrollAnimation>

            {/* End-to-End Pipeline Construction */}
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-6">End-to-End Pipeline Construction</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                AL GHAIL ENGINEERING & TECHNOLOGY LLC provides comprehensive pipeline works 
                including end-to-end pipeline construction covering all phases from initial 
                site preparation to final commissioning.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Construction Phases</h4>
                  <ul className="space-y-3">
                    {[
                      "Site survey and preparation",
                      "Precision excavation and trenching",
                      "Pipeline laying and alignment",
                      "Installation and joint assembly",
                      "Hydro-testing and commissioning",
                      "Professional backfilling and restoration"
                    ].map((phase, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-sm flex items-center justify-center text-xs font-normal mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-600 font-light">{phase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Technical Capabilities</h4>
                  <ul className="space-y-2">
                    {[
                      "Heavy machinery operation",
                      "Soil condition assessment",
                      "Pipeline protection systems",
                      "Quality control and testing",
                      "Environmental compliance",
                      "Safety protocol adherence"
                    ].map((capability, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Excellence */}
            <div className="mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-8">Project Excellence</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">DUQM Refinery Earthworks</h4>
                  <p className="text-gray-600 font-light mb-4">
                    Executed comprehensive excavation and backfilling works for the major 
                    DUQM Refinery project, handling complex pipeline installation requirements.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Large-scale excavation operations",
                      "Multi-diameter pipeline laying",
                      "Professional site restoration"
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">Quality Assurance</h4>
                  <p className="text-gray-600 font-light mb-4">
                    Every excavation project follows strict quality protocols ensuring 
                    proper depth, grade, and soil conditions for optimal pipeline performance.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Accurate depth and grade control",
                      "Soil condition monitoring",
                      "Comprehensive safety measures"
                    ].map((quality, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {quality}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Standards */}
            <div className="bg-gray-900 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-normal mb-6">Professional Standards</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Our excavation and earthwork services adhere to the highest industry standards, 
                ensuring safe, efficient, and environmentally responsible construction practices.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Safety & Compliance</h4>
                  <div className="space-y-3">
                    {[
                      "Strict safety protocol adherence",
                      "Environmental impact mitigation",
                      "Regulatory compliance assurance"
                    ].map((standard, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Technical Excellence</h4>
                  <div className="space-y-3">
                    {[
                      "Advanced equipment operation",
                      "Precision execution standards",
                      "Quality control at every stage"
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
          </div>
        </div>
      </section>
    </div>
  );
}