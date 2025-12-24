"use client";

import Link from "next/link";
import { Calendar, MapPin, Building } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Jindal Desalination Plant - RO System",
    client: "Jindal Shadeed Iron & Steel LLC",
    location: "Sohar Port, Oman",
    year: "2025",
    scope: "2x300 m³/hr RO Desalination Plant - Complete GRP Pipeline Installation",
    description: "Latest major desalination infrastructure project featuring comprehensive GRP pipeline installation for a dual-capacity reverse osmosis plant with complex multi-level piping systems and precision support structures.",
    image: "/jindal-ro-plant-2.jpg",
    featured: true
  },
  {
    id: 2,
    title: "DUQM Refinery EPC1 & EPC2",
    client: "Duqm Refinery",
    location: "Duqm, Oman",
    year: "2021-2023",
    scope: "GRP piping + civil infrastructure",
    description: "Comprehensive installation of GRP piping systems and civil infrastructure for one of the Middle East's largest refinery projects.",
    image: "/pro-1.webp",
    featured: false
  },
  {
    id: 3,
    title: "Sohar 2 IPP Project",
    client: "Sohar Power Company",
    location: "Sohar, Oman",
    year: "2022",
    scope: "Power generation facility piping",
    description: "Critical piping installation and civil works for major power generation facility ensuring zero downtime.",
    image: "/pro-2.jpg",
  },
  {
    id: 4,
    title: "Majis Sohar Shutdown",
    client: "Majis Industrial Services",
    location: "Sohar, Oman",
    year: "2019",
    scope: "Emergency shutdown services",
    description: "Time-critical shutdown services and maintenance works ensuring operational continuity.",
    image: "/pro-3.jpg",
  },
  {
    id: 5,
    title: "Oman Oil Duqm Bunker",
    client: "Oman Oil Company",
    location: "Duqm, Oman",
    year: "2021",
    scope: "End-to-end piping installation + site prep",
    description: "Complete piping installation and site preparation for strategic oil bunkering facility.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "LIWA Plastics, Sohar",
    client: "LIWA Plastics",
    location: "Sohar, Oman",
    year: "2019-2021",
    scope: "Foundational concrete and drainage systems",
    description: "Industrial-grade concrete foundations and comprehensive drainage systems for manufacturing facility.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop&crop=center"
  }
];

export default function FeaturedProjects() {
  // Show only first 3 projects
  const displayedProjects = projects.slice(0, 3);
  
  return (
    <section className="section bg-white">
      <div className="container">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Showcasing our expertise across major industrial projects in the region, 
              delivering excellence in every endeavor.
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          {/* Featured Project - Full Width */}
          {displayedProjects.filter(project => project.featured).map((project) => (
            <ScrollAnimation key={project.id} animation="fadeInUp" delay={200}>
              <div className="group relative bg-gray-50 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 transform hover:-translate-y-1">
                {/* Project Image */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    // width={100}
                    // height={100}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-6 left-6 bg-white text-gray-900 px-4 py-2 rounded-sm text-sm font-light">
                    Featured Project
                  </div>
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
                </div>
              </div>
            </ScrollAnimation>
          ))}

          {/* Other Projects - 2 Column Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {displayedProjects.filter(project => !project.featured).map((project, index) => (
              <ScrollAnimation key={project.id} animation="fadeInUp" delay={400 + index * 100}>
                <div className="group relative bg-gray-50 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 transform hover:-translate-y-1">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      // width={100}
                      // height={100}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
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
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-colors hover:scale-105 transform"
            >
              View All Projects
              <span className="text-lg">→</span>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}