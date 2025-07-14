import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MaintenanceServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1600&q=80" 
            alt="Industrial maintenance workers performing repairs on piping systems"
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
              <span className="text-gray-900 font-normal">Maintenance</span>
            </nav>
            
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                Maintenance & Repairs
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl">
                Professional maintenance and emergency repair services for piping systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Detailed maintenance services documentation is under development. 
              For immediate maintenance inquiries, please contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}