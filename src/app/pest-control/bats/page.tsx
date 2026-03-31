// src/app/pest-control/bats/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Bats Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1622288432343-4d1bb4a0a8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Humane bat exclusion and attic cleanup for homes in Nairobi — safe, legal, and effective.",
  content: `
    <p>Bats often roost in attics, roofs, and eaves — leaving behind guano that damages structures and poses health risks. Sipedo Services provides humane bat control that complies with Kenyan wildlife laws.</p>
    
    <h3>Our Bat Control Process</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Inspection to locate entry points and colony size</li>
      <li>Installation of one-way exclusion devices (no harm to bats)</li>
      <li>Sealing of all access points after bats leave</li>
      <li>Attic cleanup and decontamination</li>
      <li>Prevention plan to avoid re-entry</li>
    </ul>

    <p>We never use poisons or traps. Bats are protected — and beneficial for insect control — so we ensure ethical removal.</p>

    <p>Serving homes in Karen, Lang’ata, Runda, and other wooded Nairobi neighborhoods.</p>
  `,
};

export default function BatsControlPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Bats Control" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Bat Infestation?</h2>
          <p className="text-lg mb-8">Humane, legal bat removal in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Request Inspection
          </Link>
        </div>
      </section>
    </>
  );
}