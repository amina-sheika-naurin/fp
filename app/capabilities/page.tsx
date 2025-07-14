import { Award, Shield, Clock, Globe, Users, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "FPI-Certified Teams",
    description: "Expert teams with over 35 years of combined experience in GRP/GRE piping systems.",
    details: [
      "FPI certified engineers and bonders/laminators",
      "Years of hands-on site experience with major clients",
      "Technology experts in managing industrial scale projects",
      "100% success rate in executed joints"
    ]
  },
  {
    icon: Shield,
    title: "ISO-Certified Standards",
    description: "Quality, safety, and environmental systems certified to international standards.",
    details: [
      "ISO 9001:2008 certified manufacturers",
      "Quality management systems",
      "Environmental compliance standards",
      "Safety management protocols"
    ]
  },
  {
    icon: Clock,
    title: "Emergency Response Capacity",
    description: "Proven ability for emergency shutdowns and reactive repairs with rapid mobilization.",
    details: [
      "24/7 emergency response teams",
      "Time-bounded completion capabilities",
      "Managing work under pressure",
      "Quick shutdown work completion"
    ]
  },
  {
    icon: Zap,
    title: "Advanced Technical Methods",
    description: "Advanced in-situ lamination and concrete restoration methods for complex applications.",
    details: [
      "In-situ lamination expertise",
      "Concrete surface restoration",
      "Manhole and drainage system lamination",
      "Advanced bonding techniques"
    ]
  },
  {
    icon: Globe,
    title: "Large-Scale Logistics",
    description: "Strategic positioning across Sohar, Duqm, Dubai bases for regional project delivery.",
    details: [
      "Sohar main office and operations",
      "Duqm project base",
      "Dubai regional office",
      "Regional logistics coordination"
    ]
  },
  {
    icon: Award,
    title: "Industrial-Grade Expertise",
    description: "Trusted by top-tier clients and major EPC projects with proven track record.",
    details: [
      "Major EPC project experience",
      "Top-tier client relationships",
      "Industrial-scale project management",
      "Proven delivery excellence"
    ]
  }
];

export default function Capabilities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Our Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Technical expertise, certifications, and capabilities that set us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-sm p-8 border border-gray-200 hover:shadow-sm transition-shadow">
                  <div className="w-16 h-16 bg-gray-900 rounded-sm flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-normal text-gray-900 mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {capability.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Why Choose Fibroplast?
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              We seek opportunities in every challenge and strive to develop solutions that add value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industrial-grade Expertise",
                description: "Trusted by top-tier clients and major EPC projects"
              },
              {
                title: "Single-source Solution", 
                description: "Civil and piping disciplines under one roof"
              },
              {
                title: "Rapid Mobilization",
                description: "Proven emergency-response and shutdown delivery"
              },
              {
                title: "Certified Quality & Safety",
                description: "ISO + FPI + environmental compliance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-sm p-6 border border-gray-200 text-center hover:shadow-sm transition-shadow">
                <h3 className="text-base font-normal text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm font-light text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              Our Team is Our Strength
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Experience is the key to complete projects in quick time. Our technicians have years of experience in manufacturing, installation and construction fields.
            </p>
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
              <p className="text-base font-light text-gray-700 italic">
                &ldquo;Our team comprises of technology experts with 35+ years experience in the field of managing projects of various industrial scales. We thrive in the industry by delivering high-value projects on time without compromising quality.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}