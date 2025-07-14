import { CheckCircle, Package, Truck, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PipingSupply() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Industrial supply warehouse with pipes and equipment"
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
              <span className="text-gray-900 font-normal">Supply</span>
            </nav>
            
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                Trading & Supply
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl">
                End-to-end procurement: pipes, fittings, tanks, basins, ladders, manholes, trench covers.
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
                Comprehensive Trading & Supply Solutions
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                AL GHAIL ENGINEERING & TECHNOLOGY LLC deals with supply and installation of 
                GRP/GRE/GRVE Pipes and Fittings. The pipes and fittings are supplied from 
                leading pipe vendors all over the world.
              </p>
            </div>

            {/* Service Overview */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Product Supply</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Comprehensive range of fiberglass products from leading global vendors
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Timely Delivery</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Right quality materials delivered at the right time, cost effectively
                </p>
              </div>

              <div className="text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">Quality Assured</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  High quality materials meeting specified design requirements
                </p>
              </div>
            </div>

            {/* Pipes & Fittings */}
            <div className="mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-8">Pipes & Fittings</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">GRP Pipes & Fittings</h4>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    Glass Reinforced Polyester Pipes suitable for medium temperature up to 60°C
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Storm water systems",
                      "Cooling water/Drainage",
                      "Potable water at ambient temperature"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">GRV Pipes & Fittings</h4>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    Glass Reinforced Vinyl Ester Pipes suitable for medium temperature up to 90°C
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Sewerage/Fire Fighting",
                      "Petrochemical industry",
                      "Potable water (Chlorination)",
                      "Chemical resistant applications"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-sm p-6 border border-gray-200">
                  <h4 className="text-lg font-normal text-gray-900 mb-4">GRE Pipes & Fittings</h4>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    Glass Reinforced Epoxy Pipes suitable for medium temperature up to 110°C
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Oily Sewer/Brackish water",
                      "Crude Discharge/Fire Fighting",
                      "Any fluid up to 110°C"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Listing */}
            <div className="bg-gray-50 rounded-sm p-8 border border-gray-200 mb-16">
              <h3 className="text-2xl font-normal text-gray-900 mb-8">Complete Product Range</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-normal text-gray-900 mb-4">Storage & Containment</h4>
                  <ul className="space-y-2">
                    {[
                      "Water Storage Tanks in various shapes and capacities",
                      "Sectional Panel Tanks",
                      "Septic Tanks and Sewage Holding Tanks",
                      "Fuel and Chemical Tanks"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-normal text-gray-900 mb-4">Infrastructure Components</h4>
                  <ul className="space-y-2">
                    {[
                      "Manhole Systems and Drainage Pipes",
                      "GRP Ladder and Ducting's",
                      "Concrete Shuttering and Enclosures",
                      "Arch Pyramid Cladding and Roofing's"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-normal text-gray-900 mb-4">Utility Products</h4>
                  <ul className="space-y-2">
                    {[
                      "Shower Trays, Bath Tubs & Wash Basins",
                      "Modular Buildings and Security Cabins",
                      "GRP Profile Sheets and Roof Curbs",
                      "MEDC, RAECO, Mazoon Transformer Cabins"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-normal text-gray-900 mb-4">Specialized Solutions</h4>
                  <ul className="space-y-2">
                    {[
                      "GRP Lamination & In situ linings",
                      "Planter Boxes and Domes",
                      "Play Equipment's and Fisherman Shed",
                      "Fascia's and Custom Solutions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 font-light">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-gray-900 rounded-sm p-8 text-white">
              <h3 className="text-2xl font-normal mb-6">Our Commitment</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                We deliver materials with high quality meeting specified design requirements. 
                Our team comprises years of experience in fiberglass products to analyze customer 
                requirements effectively and deliver the right quality at the right time cost effectively.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Quality Standards</h4>
                  <div className="space-y-3">
                    {[
                      "Products from leading global vendors",
                      "Highest manufacturing standards",
                      "State-of-the-art technology"
                    ].map((standard, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-normal text-white">Service Excellence</h4>
                  <div className="space-y-3">
                    {[
                      "Experienced technical analysis",
                      "Timely delivery assurance",
                      "Cost-effective solutions"
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-light">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}