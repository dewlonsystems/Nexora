// src/app/cleaning/curtains-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Curtains Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1600879995428-7e8a8c6b5a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Professional curtain cleaning in Nairobi using gentle, non-shrinking methods that restore freshness and remove dust, allergens, and odors.",
  content: `
    <p>Heavy curtains trap dust, pet dander, and cooking grease — becoming a major source of indoor allergens. At Sipedo Services, we offer professional curtain cleaning that preserves fabric integrity while removing deep-seated dirt.</p>
    
    <h3>Our Curtain Cleaning Process</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li><strong>On-site assessment</strong> — check fabric type, stains, and hardware</li>
      <li><strong>Removal & labeling</strong> — each panel is tagged for correct re-hanging</li>
      <li><strong>Gentle washing or dry cleaning</strong> — based on material (silk, velvet, cotton, etc.)</li>
      <li><strong>Steam sanitization</strong> — kills dust mites and bacteria</li>
      <li><strong>Professional re-hanging</strong> — restored to perfect draping</li>
    </ul>

    <p>We serve homes, hotels, and offices across Nairobi. Our team handles all types: blackout, sheer, thermal, and layered curtains.</p>

    <p>Don’t let dirty curtains ruin your clean space. Book a free quote today!</p>
  `,
};

export default function CurtainsCleaningPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Curtains Cleaning" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Refresh Your Window Treatments</h2>
          <p className="text-lg mb-8">Gentle, expert curtain cleaning across Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}