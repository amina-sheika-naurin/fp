import { Calendar, MapPin, Building } from "lucide-react";

const projects = [
  {
    title: "DUQM Refinery EPC1 & EPC2",
    client: "Samsung/Petrofac & TRD",
    location: "Duqm, Oman",
    year: "2021-2022",
    scope: "GRP piping + civil infrastructure",
    description: "Major milestone entry into Duqm Refinery with cooling water line (DN 1000mm to DN 1800mm), fire water line (DN 100mm to DN 500mm), and AOC/OWS lines.",
    highlights: [
      "Cooling water line PN-14 BAR",
      "Fire water line PN-18 BAR", 
      "20 km of GRE/GRP pipeline work",
      "Lamination and bonding works"
    ]
  },
  {
    title: "Oman Oil Duqm Bunker",
    client: "Oman Oil Company",
    location: "Duqm Port, Oman",
    year: "2021",
    scope: "End-to-end piping installation + site prep",
    description: "Complete sewage line installation inside Duqm Port for strategic oil bunkering facility.",
    highlights: [
      "Sewage line installation",
      "Site preparation works",
      "End-to-end pipeline construction",
      "Strategic port facility"
    ]
  },
  {
    title: "LIWA Plastics, Sohar",
    client: "LIWA Plastics",
    location: "Sohar, Oman",
    year: "2019-2021",
    scope: "Foundational concrete and drainage systems",
    description: "Successful completion of GRE/GRP lines with foundational concrete and comprehensive drainage systems.",
    highlights: [
      "GRE/GRP line installation",
      "Foundational concrete works",
      "Drainage system construction",
      "Industrial facility support"
    ]
  },
  {
    title: "Sohar 2 IPP & Majis Sohar Shutdown",
    client: "Sohar Power Company",
    location: "Sohar, Oman", 
    year: "2019-2022",
    scope: "Integrated shutdown and civil works",
    description: "Critical shutdown services and integrated civil works for major power generation facility.",
    highlights: [
      "Emergency shutdown services",
      "Integrated civil works",
      "Power generation facility",
      "Time-critical completion"
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Showcasing our expertise across major industrial projects in the region with proven success.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-sm p-8 border border-gray-200 hover:shadow-sm transition-shadow">
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Building className="w-4 h-4" />
                    <span className="font-light">{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="font-light">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="font-light">{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-blue-600 font-light mb-4 text-base">
                  {project.scope}
                </p>

                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-normal text-gray-900 mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Project Success
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Delivering high-value projects on time without compromising quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { stat: "100%", label: "Success Rate in Executed Joints" },
              { stat: "20+ km", label: "GRE/GRP Pipeline Completed" },
              { stat: "35+ Years", label: "Combined Team Experience" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white rounded-sm p-8 border border-gray-200">
                <div className="text-3xl font-light text-gray-900 mb-2">{item.stat}</div>
                <p className="text-sm font-light text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}