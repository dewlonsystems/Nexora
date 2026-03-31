// src/app/cleaning/move-in-out-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Move In/Out Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1581578021424-3f1d6020b775?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Thorough move-in or move-out cleaning for apartments and houses in Nairobi — ensuring you start fresh or leave spotless.",
  content: `
    <p>Moving is stressful enough — don’t let cleaning add to it. Sipedo Services offers comprehensive move-in/out cleaning that meets landlord standards and gives you peace of mind.</p>
    
    <h3>What’s Included</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Deep kitchen cleaning (oven, fridge, cabinets)</li>
      <li>Bathroom sanitization (tiles, shower, toilet)</li>
      <li>Floor scrubbing (tile, wood, carpet)</li>
      <li>Window and glass cleaning</li>
      <li>Light fixture and switch plate wiping</li>
      <li>Final inspection checklist provided</li>
    </ul>

    <p>We work with tenants, landlords, and property managers across Nairobi. Flexible scheduling — including weekends and evenings.</p>

    <p>Get your security deposit back or start your new home perfectly clean!</p>
  `,
};

export default function MoveInOutCleaningPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Move In Out Cleaning" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20 z-10" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Start or End Right</h2>
          <p className="text-lg mb-8">Landlord-approved move-in/out cleaning in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </>
  );
}