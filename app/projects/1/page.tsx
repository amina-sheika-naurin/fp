export default function Project1() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565694912745-99b8b7c3fc81?w=1600&q=80" 
            alt="Oil refinery facility with industrial towers and processing equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              DUQM Refinery EPC1 & EPC2
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Comprehensive installation of GRP piping systems and civil infrastructure for one of the Middle East&apos;s largest refinery projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}