'use client';
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [activeYear, setActiveYear] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heritage = [
    {
      year: "2017",
      title: "Operations as HATTAN MODERN",
      description: "Established operations in Oman specialized for fiberglass products, pipeline and tank lamination works. Beginning with foundational expertise in GRP manufacturing and installation services, the company positioned itself as a reliable partner for industrial infrastructure projects across the Sultanate. This marked the start of our journey in delivering high-quality fiberglass solutions to meet the growing demands of Oman's industrial development."
    },
    {
      year: "2019",
      title: "Licensed as Al-Ghail Engineering & Technology LLC",
      description: "Major projects with LIWA PLASTIC, Sohar GRE/GRP lines, expanding capabilities and market presence. The company achieved significant growth through strategic partnerships and expanded its technical capabilities to handle complex industrial projects. This period saw the establishment of specialized teams for pipeline engineering, lamination works, and comprehensive project management services, positioning the company as a leading contractor in the fiberglass industry."
    },
    {
      year: "2021",
      title: "Major Milestone - DUQM Projects",
      description: "Entry into DUQM REFINERY EPC-2 (Samsung/Petrofac) and OMAN OIL DUQM BUNKER projects, plus EPC-1 under TRD. This represented a transformational period for the company, undertaking some of the most complex and prestigious projects in Oman's industrial landscape. The successful execution of these mega-projects demonstrated our technical excellence and project management capabilities on an international scale, working alongside global engineering firms and establishing long-term partnerships with major oil and gas operators."
    },
    {
      year: "2022",
      title: "20km GRE/GRP Pipeline Achievement",
      description: "Completed 20 km of GRE/GRP pipeline work, establishing continued success and regional leadership. This milestone achievement showcased our advanced engineering capabilities and operational excellence in large-scale pipeline construction. The project involved complex technical challenges including high-pressure systems, diverse terrain conditions, and strict quality standards, all delivered on time and within budget. This success further solidified our reputation as the premier fiberglass pipeline contractor in the region."
    }
  ];

  const leadership = [
    {
      name: "Anas Abdul Latheef",
      position: "Managing Director",
      title: "Technology Advisor | Founder – Hash Include | CTO – Styllar",
      description: "Visionary leader with nearly two decades of leadership in AI, platform engineering, and industrial transformation. Drives FibroPlast's growth across the MENA region, bringing together high-performance materials engineering and advanced civil infrastructure.",
      expertise: "Innovation strategy, AI & platform engineering, industrial transformation"
    },
    {
      name: "Abdul Latheef",
      position: "Technical Director",
      title: "Pioneer in Composite Piping Industry | 40+ Years Experience",
      description: "A pioneer in the Middle East's composite piping industry with a career spanning over four decades. Beginning in 1978 at Vera UAE Limited, the region's first GRP manufacturer, he helped shape the industry through Future Pipe Industries until 2007. Co-founded Gulf Pipe Industries and since 2016 has been leading GRP/GRE projects in Oman. His legacy is defined by technical innovation and industry-firsts that helped shape the composite pipe manufacturing sector across the Middle East.",
      expertise: "GRP/GRE manufacturing, technical innovation, industry development"
    },
    {
      name: "Shiyas Ali",
      position: "Operations Manager",
      title: "Senior Civil Engineer | Project Strategist",
      description: "Over 10 years of on-ground civil engineering expertise—8 of them in Oman. Oversees civil site execution, resource optimization, safety compliance, and timely project delivery across Oman and the UAE.",
      expertise: "Civil engineering, project coordination, safety compliance"
    },
    {
      name: "Mohammed Abdullah Badar Hilal Al-Sawwafi",
      position: "Manager",
      title: "Project Manager | Business Development",
      description: "Experienced project manager with extensive expertise in fiberglass construction and industrial project management. Leads strategic business development initiatives and oversees project execution to ensure quality delivery and client satisfaction across the region.",
      expertise: "Project management, business development, client relations"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let newActiveYear = 0;
      timelineRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            newActiveYear = index;
          }
        }
      });
      
      setActiveYear(newActiveYear);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-10 min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            width={100}
            height={100}
            src="/site-1.jpg" 
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
              <span className="text-blue-600 font-normal">About</span>
            </nav>
            
            {/* Content */}
            <div className="mt-40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 ">
                About Fibroplast
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mb-8">
                35+ years of engineering excellence, client-centric delivery, 
                and innovation in piping and civil construction across the region.
              </p>
              <Link
                  href="/contact"
                  className="inline-flex mt-5 items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-sm font-light hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 leading-tight">
              Engineering Excellence Since 1987
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Leading provider of integrated piping and civil construction solutions across the Middle East, setting industry standards for quality, safety, and innovation.
            </p>
            <div className="w-16 h-0.5 bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-3xl font-light mb-6 text-gray-900">Vision & Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to engineering excellence through precision, safety, sustainability, and adaptability.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <div className="border-b border-gray-200 pb-8">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be the premier provider of integrated piping and civil construction solutions across the Middle East, setting industry standards for quality, safety, and innovation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-normal text-gray-900 mb-3">Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Engineering excellence through precision, safety, sustainability, and adaptability. We deliver client-centric solutions that maximize asset lifespan while minimizing environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Heritage */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">Company Heritage</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From Hattan Modern to AGET, and now Fibroplast—a journey of continuous growth and innovation.
                </p>
                
                {/* Timeline Years - Desktop Only */}
                <div className="hidden lg:block relative">
                {/* Continuous vertical line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-300"></div>
                
                {/* Active line segment */}
                <div 
                  className="absolute left-0 w-1 bg-blue-600 transition-all duration-500"
                  style={{
                    top: `${activeYear * 64}px`,
                    height: '50px'
                  }}
                ></div>
                
                <div className="space-y-8">
                  {heritage.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-4 relative z-10">
                      <div className="w-1 h-8"></div>
                      <div className={`text-2xl font-light transition-colors duration-300 ${
                        activeYear === index ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {milestone.year}
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-16">
                {heritage.map((milestone, index) => (
                  <div 
                    key={index} 
                    ref={el => { timelineRefs.current[index] = el; }}
                    className="min-h-[200px] pb-8"
                  >
                    <div className={`transition-all duration-500 ${
                      activeYear === index ? 'opacity-100 transform translate-y-0' : 'opacity-60 transform translate-y-4'
                    }`}>
                      {/* Mobile Year Display */}
                      <div className="lg:hidden mb-4">
                        <span className="text-xl font-light text-blue-600">
                          {milestone.year}
                        </span>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-light text-gray-900 mb-4">
                        {milestone.title}
                      </h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h3 className="text-3xl font-light mb-6 text-gray-900">Leadership Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experienced professionals with decades of combined expertise in engineering and construction.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {leadership.map((leader, index) => (
                  <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-3">
                        <div className="w-full h-full rounded-sm overflow-hidden mb-4">
                          <Image
                            src={`/${leader.name}.${
                              leader.name === 'Shiyas Ali' ? 'png' : 
                              leader.name === 'Abdul Latheef' ? 'jpg' : 'jpeg'
                            }`}
                            alt={leader.name}
                            className="w-full h-full object-cover"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-9">
                        <h4 className="text-xl font-normal text-gray-900 mb-1">{leader.name}</h4>
                        <p className="text-blue-600 font-light mb-2">{leader.position}</p>
                        <p className="text-sm text-gray-600 mb-4 font-light">{leader.title}</p>
                        <p className="text-gray-600 leading-relaxed mb-4">{leader.description}</p>
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">Expertise:</span> {leader.expertise}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}