// src/app/cleaning/page.tsx
import Link from 'next/link';

const cleaningServices = [
  {
    id: 'sofa-cleaning',
    title: 'Sofa Cleaning',
    description: 'Deep cleaning for fabric and leather sofas using eco-friendly solutions that remove stains, odors, and allergens.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/sofa%202.jpg'
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    description: 'Daily, weekly, or one-time professional cleaning for offices of all sizes across Nairobi.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg'
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    description: 'Steam and dry cleaning methods to restore carpets to like-new condition, removing dirt, bacteria, and odors.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/66ad0ef79a97bc0f97ac73ac06d452279ec54f43/IMG-20260117-WA0009.jpg'
  },
  {
    id: 'mattress-cleaning',
    title: 'Mattress Cleaning',
    description: 'Hygienic deep cleaning to eliminate dust mites, sweat, and allergens from your mattress for better sleep health.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/mattress.jpg'
  },
  {
    id: 'car-interior',
    title: 'Car Interior Cleaning',
    description: 'Professional detailing of car seats, mats, dashboards, and upholstery to restore freshness and cleanliness.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/ba09a39492141a1e46a816572ec101baca91fb0d/Car-Interior-Cleaning-in-Pune.jpg'
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    description: 'Thorough cleanup after building or renovation — removing dust, debris, paint splatters, and more.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/5f3edb8ec24efe3c9d540a713b2ea335e8e63b91/pexels-tima-miroshnichenko-6195104.jpg'
  },
  {
    id: 'laundry-dry-cleaning',
    title: 'Laundry & Dry Cleaning',
    description: 'Convenient pickup and delivery of laundry and dry cleaning services for homes and businesses in Nairobi.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/75ebdc334f6f5683d3df4c16e0eaede76fa09a17/images.jpg'
  },
  // ✅ NEW SERVICES ADDED BELOW
  {
    id: 'curtains-cleaning',
    title: 'Curtains Cleaning',
    description: 'Professional curtain cleaning that preserves fabric integrity while removing deep-seated dirt and allergens.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/66ad0ef79a97bc0f97ac73ac06d452279ec54f43/Curtains-And-Blinds-Cleaning-Services-In-Nairobi.jpg'
  },
  {
    id: 'cabros-cleaning',
    title: 'Cabros Cleaning',
    description: 'Deep cleaning for car upholstery ("cabros") — removing stains, odors, and bacteria from seats and interiors.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/66ad0ef79a97bc0f97ac73ac06d452279ec54f43/cabro-pressure-washing.jpeg'
  },
  {
    id: 'move-in-out-cleaning',
    title: 'Move In/Out Cleaning',
    description: 'Comprehensive cleaning for apartments and houses — ensuring you start fresh or leave spotless.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/66ad0ef79a97bc0f97ac73ac06d452279ec54f43/move-in-and-move-out-cleaning-checklist.jpg'
  },
  {
    id: 'wooden-floor-polishing',
    title: 'Wooden Floor Sanding & Polishing',
    description: 'Restore your wooden floors to like-new condition with professional sanding, polishing, and sealing.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/66ad0ef79a97bc0f97ac73ac06d452279ec54f43/wooden.jpg'
  }
];

export default function CleaningServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg"
            alt="Professional Cleaning Services in Nairobi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional, reliable, and affordable cleaning solutions for homes and businesses in Nairobi.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            At Sipedo Services, we understand that a clean space is a healthy, productive and welcoming space. 
            That’s why we offer a full range of cleaning services tailored to your needs — from routine office maintenance 
            to deep post-renovation cleanup. All our technicians are trained, insured, and use eco-friendly products 
            safe for your family, pets, and environment.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaningServices.map((service) => (
              <div key={service.id} className="bg-gray-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={`/cleaning/${service.id}`} 
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    See More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Cleaning Services in Nairobi?</h2>
          <p className="text-xl mb-8">
            Get a free, no-obligation quote within minutes. Serving all Nairobi counties and beyond.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
