// src/app/cleaning/mattress-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Mattress Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Hygienic deep cleaning to eliminate dust mites, sweat, and allergens from your mattress for better sleep health in Nairobi.",
  content: `
    <p>Your mattress can harbor up to 10 million dust mites, dead skin cells, sweat, and bacteria — even if it looks clean. At Sipedo Services, we offer professional mattress cleaning that sanitizes and refreshes your sleeping surface without damaging it.</p>
    
    <h3>Benefits of Mattress Cleaning:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Reduces allergies and asthma triggers</li>
      <li>Eliminates odors from sweat, pets, or spills</li>
      <li>Removes stains and discoloration</li>
      <li>Extends the life of your mattress</li>
      <li>Uses UV light and HEPA vacuuming for deep sanitation</li>
    </ul>

    <p>We clean all types: memory foam, spring, latex, and hybrid mattresses. Our process is water-minimal, so your mattress dries in under 2 hours. Safe for babies, elderly, and allergy sufferers.</p>

    <p>Serving homes across Nairobi — including apartments in Kilimani, Runda, and Lang’ata. Book a one-time clean or add it to your regular home cleaning plan.</p>
  `,
};

export default function MattressCleaningPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Breathe Easier Tonight</h2>
          <p className="text-lg mb-8">Professional mattress cleaning in Nairobi — fast and safe.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Book Your Clean
          </Link>
        </div>
      </section>
    </>
  );
}