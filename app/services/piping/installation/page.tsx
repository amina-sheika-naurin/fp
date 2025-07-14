import { CheckCircle, Wrench, Target, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PipingInstallation() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="GRP pipe installation construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-light">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/services" className="text-gray-600 hover:text-gray-900 font-light">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/services/piping" className="text-gray-600 hover:text-gray-900 font-light">
                Piping
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-normal">Installation</span>
            </nav>
            
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                GRP / GRE / GRVE Pipe Installation
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl">
                Engineered & constructed kilometres of pipelines across Oman—diameters from 50 mm to 2,800 mm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Expert Pipeline Installation Services
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Our experience includes small diameter to large diameter pipelines for high pressure 
                as well as raw water pipelines for fire water and cooling water circulation.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-6">Our Major Strength</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                The major strength of AGET is our bonder/laminator team who have years of experience 
                in the field of fiberglass products with the ability to execute bonding/laminations 
                over diameters ranging from 50mm to 2800mm.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-normal text-gray-900 mb-2">Diameter Range</h4>
                  <p className="text-sm text-gray-600 font-light">50mm - 2800mm</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-normal text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-sm text-gray-600 font-light">FPI Certified Technicians</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-normal text-gray-900 mb-2">Quality Assured</h4>
                  <p className="text-sm text-gray-600 font-light">100% Success Rate</p>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-6">Applications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "High pressure pipeline systems",
                  "Raw water pipeline networks", 
                  "Fire water circulation systems",
                  "Cooling water distribution",
                  "Industrial process piping",
                  "Municipal water systems"
                ].map((application, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{application}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-gray-900 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-normal mb-6">Project Management Excellence</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                We comprise a team with years of experience in the field of piping engineering 
                to execute projects at reduced project expense, higher morale, and quicker time to market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 font-light">
                    Competent and experienced staff identify needed corporate process improvements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 font-light">
                    Effective communication with clients about critical issues and action plans
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 font-light">
                    Risk assessment and mitigation strategies for competitive project delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}