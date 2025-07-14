export default function Project5() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600&q=80" 
            alt="Heavy industrial construction equipment working on large-scale facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              LIWA Plastics, Sohar
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Industrial-grade concrete foundations and comprehensive drainage systems for manufacturing facility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}