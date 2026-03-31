// src/app/cleaning/wooden-floor-polishing/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Wooden Floor Sanding & Polishing",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1617830083435-6a6e4c1b6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Restore your wooden floors to like-new condition with professional sanding, polishing, and sealing in Nairobi homes and offices.",
  content: `
    <p>Scratched, dull, or worn wooden floors can make even the nicest space feel outdated. Sipedo Services offers full wooden floor restoration — sanding, polishing, and sealing — to bring back their natural beauty.</p>
    
    <h3>Our Process</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li><strong>Assessment</strong> — inspect wood type, damage level, and finish</li>
      <li><strong>Dust-free sanding</strong> — using industrial HEPA vacuums</li>
      <li><strong>Stain application</strong> (optional) — to refresh color</li>
      <li><strong>Polishing & sealing</strong> — with durable, non-toxic sealant</li>
      <li><strong>Cleanup</strong> — no dust left behind</li>
    </ul>

    <p>We work on hardwood, parquet, and engineered wood floors in homes, offices, and commercial spaces across Karen, Westlands, Lavington, and more.</p>

    <p>Transform your floors without replacement — cost-effective and stunning results!</p>
  `,
};

export default function WoodenFloorPolishingPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Wooden Floor Polishing" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Restore Your Floors’ Shine</h2>
          <p className="text-lg mb-8">Professional sanding and polishing across Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}