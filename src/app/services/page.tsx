// src/app/services/page.tsx
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional cleaning and pest control services tailored for homes and businesses in Nairobi.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            At Sipedo Services, we offer two core service lines designed to keep your space clean, healthy, and pest-free. 
            Whether you need deep cleaning after renovation or urgent bedbug removal, our certified team delivers fast, 
            reliable, and affordable solutions across Nairobi and surrounding counties.
          </p>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cleaning Services Card */}
            <Link href="/cleaning" className="block group">
              <div className="bg-gray-bg rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg" 
                    alt="Professional cleaning services in Nairobi" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-3">Cleaning Services</h2>
                  <p className="text-gray-700 mb-4">
                    From sofa and carpet cleaning to post-construction cleanup and laundry, we handle every cleaning need with care and precision.
                  </p>
                  <span className="inline-block text-primary font-medium group-hover:underline">
                    Explore Cleaning Services →
                  </span>
                </div>
              </div>
            </Link>

            {/* Pest Control Card */}
            <Link href="/pest-control" className="block group">
              <div className="bg-gray-bg rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/fumigation.jpg" 
                    alt="Pest control services near me in Nairobi" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-3">Pest Control</h2>
                  <p className="text-gray-700 mb-4">
                    Effective treatment for bedbugs, cockroaches, termites, rats, and more — using safe, eco-friendly methods.
                  </p>
                  <span className="inline-block text-primary font-medium group-hover:underline">
                    Explore Pest Control →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for a trusted cleaning services company in Nairobi?</h2>
          <p className="mb-6">
            Sipedo Services is your go-to provider for professional, reliable, and affordable cleaning and pest control “near me”. 
            We serve residential and commercial clients across Westlands, Karen, Thika, Kiambu, and all of Nairobi County.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Get a Free Quote Today
          </Link>
        </div>
      </section>
    </>
  );
}