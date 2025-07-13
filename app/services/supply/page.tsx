export default function SupplyServices() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-32">
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Trading & Supply
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Complete procurement and supply solutions for industrial materials.
            </p>
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
              Detailed trading and supply documentation is under development. 
              For immediate supply inquiries, please contact us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}