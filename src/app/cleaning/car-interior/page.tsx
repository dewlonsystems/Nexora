// src/app/cleaning/car-interior/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Car Interior Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1553928980-2e043e5e9d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Professional car detailing for seats, mats, dashboards, and upholstery to restore freshness and cleanliness in Nairobi.",
  content: `
    <p>Your car’s interior endures daily wear — dirt, food crumbs, pet hair, and spills. Sipedo Services offers premium car interior cleaning that goes beyond surface wiping to deliver a truly refreshed cabin.</p>
    
    <h3>What We Clean:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Vacuuming of seats, carpets, and trunk</li>
      <li>Steam cleaning of fabric seats and floor mats</li>
      <li>Leather conditioning for dashboards and seats</li>
      <li>Odor removal and air vent sanitization</li>
      <li>Stain treatment for coffee, mud, or food spills</li>
    </ul>

    <p>We come to your home or office in Nairobi for convenient service. Our eco-friendly products are safe for children, pets, and sensitive materials. Perfect before resale, after long trips, or just for personal comfort.</p>

    <p>Serving all Nairobi areas — including parking lots in Westlands, Karen, and Thika Town.</p>
  `,
};

export default function CarInteriorCleaningPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${serviceData.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 inline-block">
            {serviceData.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">{serviceData.description}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: serviceData.content }}
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Refresh Your Ride</h2>
          <p className="text-lg mb-8">Mobile car interior cleaning across Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Schedule Today
          </Link>
        </div>
      </section>
    </>
  );
}