import { Award, Globe, Target } from "lucide-react";

export default function About() {
  const heritage = [
    {
      year: "1989",
      title: "Founded as Hattan Modern",
      description: "Established with a vision for engineering excellence in the Middle East region."
    },
    {
      year: "2005",
      title: "Expansion & AGET Partnership",
      description: "Strategic partnerships and expanded capabilities in GRP/GRE piping systems."
    },
    {
      year: "2015",
      title: "Fibroplast Formation",
      description: "Rebranded as Fibroplast with integrated civil construction capabilities."
    },
    {
      year: "2020",
      title: "Regional Leadership",
      description: "Established as a leading provider across Oman, UAE, and the GCC region."
    }
  ];

  const leadership = [
    {
      name: "Ali Al-Zadjali",
      position: "Managing Director",
      experience: "15+ years in industrial construction",
      specialization: "Strategic planning and business development"
    },
    {
      name: "John Patterson",
      position: "Technical Director",
      experience: "12+ years in GRP/GRE systems",
      specialization: "Engineering design and project management"
    },
    {
      name: "Fatima Al-Rashdi",
      position: "Operations Manager",
      experience: "10+ years in civil construction",
      specialization: "Quality assurance and safety management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              About Fibroplast
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              35+ years of engineering excellence, client-centric delivery, 
              and innovation in piping and civil construction across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
                Our Vision & Mission
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-normal mb-2 text-gray-900">Vision</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      To be the premier provider of integrated piping and civil construction 
                      solutions across the Middle East, setting industry standards for quality, 
                      safety, and innovation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-8 h-8 text-gray-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-normal mb-2 text-gray-900">Mission</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Engineering excellence through precision, safety, sustainability, and 
                      adaptability. We deliver client-centric solutions that maximize asset 
                      lifespan while minimizing environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-normal mb-6 text-gray-900">Our Ethos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span className="font-light text-gray-700">Precision in every project</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span className="font-light text-gray-700">Safety as our top priority</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span className="font-light text-gray-700">Sustainability in all operations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span className="font-light text-gray-700">Adaptability to client needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Heritage */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Company Heritage
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              From Hattan Modern to AGET, and now Fibroplast—a journey of 
              continuous growth and innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
              
              {heritage.map((milestone, index) => (
                <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className="w-16 h-12 bg-gray-900 rounded-sm flex items-center justify-center text-white font-light flex-shrink-0 text-sm">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-sm p-6 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-normal mb-2 text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Experienced professionals with decades of combined expertise 
              in engineering and construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-sm border border-gray-200 hover:shadow-sm transition-shadow">
                <div className="w-32 h-32 bg-gray-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-light text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-normal mb-2 text-gray-900">{leader.name}</h3>
                <p className="text-blue-600 font-light mb-3">{leader.position}</p>
                <p className="text-sm text-gray-600 mb-2 font-light">{leader.experience}</p>
                <p className="text-sm text-gray-500 font-light">{leader.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}