import Link from "next/link";
import { Calendar, MapPin, Building } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "DUQM Refinery EPC1 & EPC2",
    client: "Duqm Refinery",
    location: "Duqm, Oman",
    year: "2021-2023",
    scope: "GRP piping + civil infrastructure",
    description: "Comprehensive installation of GRP piping systems and civil infrastructure for one of the Middle East's largest refinery projects.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
    featured: true
  },
  {
    id: 2,
    title: "Sohar 2 IPP & Majis Sohar Shutdown",
    client: "Sohar Power Company",
    location: "Sohar, Oman",
    year: "2022",
    scope: "Integrated shutdown and civil works",
    description: "Critical shutdown services and civil works for major power generation facility ensuring zero downtime.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Oman Oil Duqm Bunker",
    client: "Oman Oil Company",
    location: "Duqm, Oman",
    year: "2023",
    scope: "End-to-end piping installation + site prep",
    description: "Complete piping installation and site preparation for strategic oil bunkering facility.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "LIWA Plastics, Sohar",
    client: "LIWA Plastics",
    location: "Sohar, Oman",
    year: "2023",
    scope: "Foundational concrete and drainage systems",
    description: "Industrial-grade concrete foundations and comprehensive drainage systems for manufacturing facility.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop&crop=center"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Showcasing our expertise across major industrial projects in the region, 
            delivering excellence in every endeavor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-gray-50 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${project.featured ? 'h-96' : 'h-64'} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                {project.featured && (
                  <div className="absolute top-6 left-6 bg-white text-gray-900 px-4 py-2 rounded-sm text-sm font-light">
                    Featured Project
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap gap-6 mb-6 text-sm">
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

                <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-blue-600 font-light mb-4 text-base">
                  {project.scope}
                </p>

                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-light hover:gap-3 transition-all text-base"
                >
                  View Project Details
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-colors"
          >
            View All Projects
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}