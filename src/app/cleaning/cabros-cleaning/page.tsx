// src/app/cleaning/cabros-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Cabros Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1553928980-2e043e5e9d0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Deep cleaning for car upholstery (cabros) in Nairobi — removing stains, odors, and bacteria from seats, mats, and interiors.",
  content: `
    <p>"Cabros" — a Nairobi term for car upholstery — endures daily wear from dust, food spills, and weather. Sipedo Services offers professional cabros cleaning that restores comfort and hygiene to your vehicle.</p>
    
    <h3>What We Clean</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Fabric and leather seats</li>
      <li>Headrests and armrests</li>
      <li>Door panels and carpets</li>
      <li>Roof lining (headliner)</li>
      <li>Stain and odor treatment</li>
    </ul>

    <p>We use steam extraction and eco-friendly cleaners that won’t damage stitching or cause shrinkage. Safe for kids, pets, and sensitive skin.</p>

    <p>Serving private cars, boda-bodas, taxis, and corporate fleets across Nairobi, Thika, and Kiambu.</p>
  `,
};

export default function CabrosCleaningPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Cabros Cleaning" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Revive Your Car Interior</h2>
          <p className="text-lg mb-8">Professional cabros cleaning with pickup in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Book Today
          </Link>
        </div>
      </section>
    </>
  );
}