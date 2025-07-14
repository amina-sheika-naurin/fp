export default function Project2() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gray-50 py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80" 
            alt="Power generation facility with industrial equipment and infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="relative container">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              Sohar 2 IPP & Majis Sohar Shutdown
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Critical shutdown services and civil works for major power generation facility ensuring zero downtime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}