import { Calendar, MapPin, Building, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "DUQM Refinery EPC1 & EPC2",
    client: "Samsung/Petrofac & TRD",
    location: "Duqm Special Economic Zone, Oman",
    year: "2021-2022",
    scope: "Complete GRP/GRE piping systems + bonding & lamination",
    description: "One of the major milestones in AL-GHAIL ENGINEERING & TECHNOLOGY's history. Successfully completed cooling water lines varying from DN 50mm to DN 1800mm, along with fire water, AOC, and OWS lines in GRE/GRP pipes at the Special Economic Zone of Duqm.",
    image: "/projectimage-1.jpeg",
    highlights: [
      "Cooling Water Line (PN-14 BAR) DN 1000mm to DN 1800mm",
      "Fire Water Line (PN-18 BAR) DN 100mm to DN 500mm",
      "AOC, OWS and Sanitation Line (PN 10 BAR) DN 80mm to 1000mm",
      "GRP pipe erection and fabrication",
      "Hydro testing including gravity and pressure tests",
      "Valve installation and commissioning",
      "Bonding and lamination of GRP and GRE pipes"
    ]
  },
  {
    title: "Oman Oil Duqm Bunker Terminal",
    client: "Oman Oil Company",
    location: "Duqm Port, Oman",
    year: "2021",
    scope: "GRE pipe laying and installation for bunker terminal",
    description: "Strategic participation in the Oman Oil Duqm Bunker Terminal project for laying and installation of GRE pipes, supporting the development of critical oil bunkering infrastructure at Duqm Port.",
    image: "/projectimage-2.jpeg",
    highlights: [
      "GRE pipe laying and installation",
      "Bunker terminal infrastructure support", 
      "End-to-end pipeline construction",
      "Excavation, laying, installation, and backfilling",
      "Hydro-testing and commissioning",
      "Strategic port facility development"
    ]
  },
  {
    title: "LIWA Plastics Manufacturing Facility",
    client: "LIWA Plastics",
    location: "Sohar Industrial Zone, Oman",
    year: "2019-2021",
    scope: "Industrial drainage systems and concrete foundations",
    description: "Comprehensive infrastructure development for LIWA Plastics manufacturing facility including foundational concrete works and complete drainage systems to support industrial manufacturing operations.",
    image: "/projectimage-3.jpeg",
    highlights: [
      "Industrial-grade concrete foundations",
      "Manufacturing facility drainage systems",
      "GRE/GRP pipeline installation",
      "Site preparation and earthworks",
      "Industrial wastewater management systems",
      "Long-term performance assurance"
    ]
  },
  {
    title: "Sohar 2 IPP Power Generation",
    client: "Sohar Power Company",
    location: "Sohar Industrial Port, Oman", 
    year: "2022",
    scope: "Power plant piping and civil infrastructure",
    description: "Critical piping installation and civil infrastructure works for the Sohar 2 Independent Power Plant, ensuring reliable power generation infrastructure with zero-downtime delivery requirements.",
    image: "/projectimage-4.jpeg",
    highlights: [
      "Power generation facility piping systems",
      "High-pressure pipeline installation",
      "Civil infrastructure coordination",
      "Zero downtime operational requirements",
      "Complex technical system integration",
      "Emergency backup system installation"
    ]
  },
  {
    title: "Majis Industrial Shutdown Services",
    client: "Majis Industrial Services",
    location: "Sohar Industrial Complex, Oman", 
    year: "2019",
    scope: "Emergency shutdown and maintenance operations",
    description: "Time-critical shutdown services and comprehensive maintenance works ensuring operational continuity for major industrial facility. Executed emergency repairs and in-situ lamination works within specified time limits.",
    image: "/projectimage-5.jpeg",
    highlights: [
      "Emergency shutdown execution and management",
      "In-situ lamination and repair works",
      "Maintenance of fiber glass products",
      "Time-critical project completion",
      "Operational continuity assurance",
      "High-quality emergency response services"
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-10 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={100}
            height={100}
            src="/grp.jpg" 
            alt="Large industrial construction project with cranes and building infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r  from-white via-white/50 to-white/70 md:from-white md:via-white/90 md:to-white/5"></div>
        </div>
        <div className="relative container">
          <div className="max-w-md ">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-light">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 font-normal">Projects</span>
            </nav>
            
            {/* Content */}
            <div className="mt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 ">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
                Showcasing our expertise across major industrial projects in the region with proven success.
              </p>
              <Link
                  href="/contact"
                  className="inline-flex mt-5 items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building className="w-4 h-4" />
                      <span className="font-light">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="font-light">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-light">{project.year}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-blue-600 font-light mb-4">
                      {project.scope}
                    </p>

                    <p className="text-gray-600 mb-8 font-light leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 border-l-4 border-blue-600">
                    <h4 className="text-base font-medium text-gray-900 mb-4">Key Highlights</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                          <span className="font-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Visual */}
                <div className={`relative h-96 overflow-hidden rounded-sm ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}