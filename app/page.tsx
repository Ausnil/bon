export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section - Full width with different background */}
      <section className="bg-gray-100 flex-grow">
        <div 
          className="container mx-auto px-4 py-20"
          data-aos="fade-in" // This will now work
        >
          <h1 className="text-3xl font-bold mb-4 animate-fade-in">Welcome to Our Website</h1>
          <p className="text-lg mb-8 animate-fade-in animate-delay-100">This is the homepage content.</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition animate-fade-in animate-delay-200">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section - With margins */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold mb-12 text-center animate-slide-up">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, i) => (
              <div 
                key={i} 
                className="bg-gray-50 p-6 rounded-lg shadow animate-fade-in" 
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-gray-600">Description of {feature.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full width different background */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-12 text-center animate-scale-in">What People Say</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow animate-fade-in">
              <p className="italic mb-4">"Great service and support!"</p>
              <p className="font-semibold">- Happy Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - With margins */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-6 animate-fade-in">Ready to Get Started?</h2>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition animate-fade-in animate-delay-100">
            Sign Up Now
          </button>
        </div>
      </section>

 
    </div>
  );
}