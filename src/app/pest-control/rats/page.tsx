// src/app/pest-control/rats/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Rat & Rodent Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Humane and effective rat trapping, exclusion, and sanitation services for homes and businesses in Nairobi.",
  content: `
    <p>Rats and mice spread disease, chew wires, and contaminate food. If you hear scratching at night or see droppings, you likely have an infestation. Sipedo Services provides humane, long-term rodent control that removes and prevents re-entry.</p>
    
    <h3>Our Rodent Control Process:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Inspection for entry points (gaps, pipes, vents)</li>
      <li>Humane trapping and removal</li>
      <li>Sealing of access points with steel wool and cement</li>
      <li>Sanitation advice to eliminate food sources</li>
      <li>Optional: ongoing monitoring with bait stations</li>
    </ul>

    <p>We never use poisons that risk secondary poisoning of pets or wildlife. Our focus is on exclusion and prevention — the only permanent solution.</p>

    <p>Serving residential homes, restaurants, warehouses, and schools across Nairobi. Emergency response available for severe infestations.</p>
  `,
};

export default function RatControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Rodent-Free Guarantee</h2>
          <p className="text-lg mb-8">Safe, humane rat control for Nairobi homes and businesses.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get Immediate Help
          </Link>
        </div>
      </section>
    </>
  );
}