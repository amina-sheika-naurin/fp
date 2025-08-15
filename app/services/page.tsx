import { CheckCircle2, Wrench, Shield, Package, Clock, Users, Award, Target, Layers, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-10 min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/grp.jpg" 
            alt="Industrial construction project"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white/70 md:from-white md:via-white/90 md:to-white/5"></div>
        </div>
        <div className="relative container">
          <div className="max-w-md">
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-light">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-normal">Services</span>              
            </nav>
            
            <div className="mt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
                Comprehensive solutions for GRP/GRE/GRVE piping, civil construction, and industrial projects.
              </p>
              <Link
                href="/contact"
                className="inline-flex mt-5 items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Company Overview
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                AL-GHAIL ENGINEERING & TECHNOLOGY LLC
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                We are one of the leading companies in Oman for GRP, GRV & GRE project works and in-situ lamination. 
                Established in 2017, we bring over 35 years of combined experience in pipeline engineering and construction.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">1000+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">KM Pipeline</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Technicians</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">FPI</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section id="installation" className="py-16 lg:py-24 bg-gray-50 scroll-mt-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Installation Services
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                GRP / GRE / GRVE Pipe Installation
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                Engineered & constructed kilometres of pipelines across Oman with diameters from 50mm to 2800mm. 
                Our experience includes small to large diameter pipelines for high pressure and raw water applications.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Technical Specifications</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Diameter Range</span>
                    <span className="font-medium text-gray-900">50mm - 2800mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pressure Rating</span>
                    <span className="font-medium text-gray-900">Up to 18 BAR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature</span>
                    <span className="font-medium text-gray-900">Up to 110°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-medium text-gray-900">100%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-green-600">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Application Areas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fire water circulation systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cooling water distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Raw water transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Chemical process piping</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 border-l-4 border-purple-600">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Installation Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <span className="text-gray-700">Site assessment & planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                    <span className="text-gray-700">Material preparation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                    <span className="text-gray-700">Installation execution</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                    <span className="text-gray-700">Testing & commissioning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section id="maintenance" className="py-16 lg:py-24 scroll-mt-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Maintenance Services
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                Shutdown, Maintenance & Emergency Repairs
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                AGET has a strong engineering & construction team for maintenance and repair of fibre glass products. 
                Our team is capable of completing shutdown works at higher quality within specified time limits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8">
                <Shield className="w-12 h-12 text-blue-600 mb-6" />
                <h4 className="text-xl font-medium text-gray-900 mb-4">Emergency Response</h4>
                <p className="text-gray-600 mb-6">24/7 emergency response teams for critical repairs and maintenance.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Rapid response deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>On-site repair capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Minimal downtime solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8">
                <Wrench className="w-12 h-12 text-blue-600 mb-6" />
                <h4 className="text-xl font-medium text-gray-900 mb-4">Maintenance Programs</h4>
                <p className="text-gray-600 mb-6">Comprehensive maintenance programs to ensure optimal performance.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Scheduled maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Preventive inspections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>System upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8">
                <Clock className="w-12 h-12 text-blue-600 mb-6" />
                <h4 className="text-xl font-medium text-gray-900 mb-4">Shutdown Services</h4>
                <p className="text-gray-600 mb-6">Time-critical shutdown management and execution.</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Planned shutdown execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Valve replacement services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>System testing & validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Situ Lamination */}
      <section id="lamination" className="py-16 lg:py-24 bg-gray-50 scroll-mt-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Specialized Services
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                In-Situ Lamination
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                AGET has over time built expertise in in-situ lamination over concrete surfaces, manholes and drainage systems.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-8">Lamination Services</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Concrete Surface Lamination</h5>
                    <p className="text-gray-600">Protective coating systems for concrete infrastructure</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Manhole Rehabilitation</h5>
                    <p className="text-gray-600">Complete lining systems for municipal manholes</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Drainage System Lining</h5>
                    <p className="text-gray-600">Chemical resistant protection for drainage networks</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Tank & Vessel Lining</h5>
                    <p className="text-gray-600">Interior protective coatings for storage systems</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-8">Technical Advantages</h4>
                <div className="bg-white p-8 rounded-sm border border-gray-200">
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-medium text-gray-900 mb-2">Chemical Resistance</h5>
                      <p className="text-gray-600">Superior protection against aggressive chemicals and corrosive environments</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-gray-900 mb-2">Structural Integrity</h5>
                      <p className="text-gray-600">Reinforces and extends the life of existing concrete structures</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-gray-900 mb-2">Cost-Effective</h5>
                      <p className="text-gray-600">Lower lifecycle costs compared to complete structural replacement</p>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium text-gray-900 mb-2">Minimal Disruption</h5>
                      <p className="text-gray-600">In-situ application minimizes operational downtime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Trading */}
      <section id="supply" className="py-16 lg:py-24 scroll-mt-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Supply & Trading
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                Complete Material Solutions
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                AL GHAIL ENGINEERING & TECHNOLOGY LLC provides end-to-end pipeline construction materials. 
                We supply GRP/GRE/GRVE pipes and fittings from leading manufacturers across Oman.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-8">Product Range</h4>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-medium text-gray-900 mb-4">GRP/GRE/GRVE Pipes & Fittings</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Diameter: 50mm - 2800mm</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Various pressure ratings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Flanges and fittings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>ISO certified suppliers</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-sm">
                    <h5 className="text-lg font-medium text-gray-900 mb-4">Fiberglass Products</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Water storage tanks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Manholes and basins</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>GRP ladders</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Roof curbs & shadings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-light text-gray-900 mb-8">Service Offerings</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-6">
                    <Package className="w-10 h-10 text-green-600 mb-4" />
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Complete Procurement</h5>
                    <p className="text-gray-600">End-to-end material supply chain management with quality assurance</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <Users className="w-10 h-10 text-green-600 mb-4" />
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Technical Support</h5>
                    <p className="text-gray-600">Expert consultation for material selection and specifications</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <Target className="w-10 h-10 text-green-600 mb-4" />
                    <h5 className="text-lg font-medium text-gray-900 mb-2">Timely Delivery</h5>
                    <p className="text-gray-600">Efficient logistics and on-time delivery to project sites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section id="project-management" className="py-16 lg:py-24 bg-gray-900 text-white scroll-mt-16">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Project Management
              </h2>
              <h3 className="text-4xl font-light mb-6">
                Professional Project Execution
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl">
                We comprise a team with years of experience in piping engineering to execute projects 
                at reduced expense, higher morale, and quicker time to market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-xl font-medium mb-4">Risk Management</h4>
                <p className="text-gray-400">
                  Competent staff identify process improvements and work with clients to mitigate 
                  risks for competitive project delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-xl font-medium mb-4">Quality Assurance</h4>
                <p className="text-gray-400">
                  Stringent quality control measures at every project phase ensuring excellence 
                  in delivery and client satisfaction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-xl font-medium mb-4">Communication</h4>
                <p className="text-gray-400">
                  Effective communication with clients about critical issues and action plans 
                  for addressing project challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">
                Project Portfolio
              </h2>
              <h3 className="text-4xl font-light text-gray-900 mb-6">
                Major Projects
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl">
                Our major projects showcase our expertise and commitment to excellence in industrial infrastructure.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-sm border border-gray-200">
                <h4 className="text-2xl font-light text-gray-900 mb-4">Duqm Refinery Project</h4>
                <p className="text-blue-600 mb-6">SEZAD - Special Economic Zone</p>
                <p className="text-gray-600 mb-8">
                  Major milestone in GRE, GRP pipeline installation for both EPC1 and EPC2 phases. 
                  Successfully completed cooling water and fire water systems installation.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Cooling Water Lines</span>
                    <span className="font-medium">DN 1000-1800mm (PN-14 BAR)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Fire Water Lines</span>
                    <span className="font-medium">DN 100-500mm (PN-18 BAR)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">AOC/OWS Lines</span>
                    <span className="font-medium">DN 80-1000mm (PN-10 BAR)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-sm border border-gray-200">
                <h4 className="text-2xl font-light text-gray-900 mb-4">Oman Oil Duqm Terminal</h4>
                <p className="text-blue-600 mb-6">Oman Oil Company</p>
                <p className="text-gray-600 mb-8">
                  GRE pipeline laying and installation for the bunker terminal project. 
                  Comprehensive project management and execution.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High-pressure fuel transfer lines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Marine loading system integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Terminal interconnecting pipelines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Complete project management</span>
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