import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Capabilities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-10 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/grp-2.webp" 
            alt="Large industrial construction project with cranes and building infrastructure"
            className="w-full h-full object-cover"
            width={100}
            height={100}
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
              <span className="text-blue-600 font-normal">Capabilities</span>
            </nav>
            
            {/* Content */}
            <div className="mt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 ">
                Our Capabilities
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
                Technical expertise, certifications, and capabilities that set us apart in the industry.
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

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 leading-tight">
              Industrial Engineering Excellence
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              35+ years of proven expertise in GRP, GRE & GRV pipeline systems across Oman&apos;s major industrial projects.
            </p>
            <div className="w-16 h-0.5 bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-3xl font-light mb-6 text-gray-900">Core Capabilities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive engineering solutions from initial design through commissioning and ongoing maintenance.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {[
                  {
                    title: "Pipeline Engineering & Installation",
                    description: "End-to-end pipeline solutions from 50mm to 2800mm diameter with pressure ratings up to PN 18 BAR."
                  },
                  {
                    title: "Emergency Response & Maintenance", 
                    description: "24/7 shutdown services and emergency repairs with rapid mobilization and time-critical delivery."
                  },
                  {
                    title: "Project Management Excellence",
                    description: "FPI & CPI certified teams with 35+ years experience delivering reduced costs and superior quality."
                  },
                  {
                    title: "Trading & Supply Solutions",
                    description: "Complete supply chain for fiberglass products from leading global manufacturers."
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <h4 className="text-xl font-normal text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-light mb-6 text-gray-900">Technical Specifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive range of fiberglass pipe systems engineered for diverse industrial applications.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { type: "GRP", temp: "60°C", desc: "Glass Reinforced Polyester for storm water and cooling systems" },
                  { type: "GRV", temp: "90°C", desc: "Glass Reinforced Vinyl Ester for chemical resistant applications" },
                  { type: "GRE", temp: "110°C", desc: "Glass Reinforced Epoxy for high temperature applications" }
                ].map((pipe, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-light text-blue-600 mb-2">{pipe.type}</div>
                    <div className="text-lg text-gray-900 mb-2">Up to {pipe.temp}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{pipe.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-6 text-gray-900">By the Numbers</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { metric: "50-2800mm", label: "Diameter Range" },
              { metric: "PN 10-18", label: "Pressure Rating (BAR)" },
              { metric: "110°C", label: "Maximum Temperature" },
              { metric: "35+", label: "Years Experience" }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-5xl font-light text-blue-600 mb-4">{item.metric}</div>
                <p className="text-gray-600 uppercase tracking-wide text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-light mb-8 text-gray-900">Ready to start your project?</h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Let&apos;s discuss how our engineering expertise can deliver value for your industrial infrastructure needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-blue-600 text-lg font-normal hover:gap-4 transition-all group"
            >
              Contact our team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}