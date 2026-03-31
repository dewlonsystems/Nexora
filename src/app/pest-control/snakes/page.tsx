// src/app/pest-control/snakes/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Snakes Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Safe, humane snake removal and prevention for homes and businesses in Nairobi — especially in green areas like Karen, Lang’ata, and Runda.",
  content: `
    <p>Snakes are common in Nairobi’s leafy suburbs — and while most are non-venomous, their presence causes panic. Sipedo Services offers safe, humane snake capture and relocation by certified wildlife handlers.</p>
    
    <h3>Our Snake Control Service Includes:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>24/7 emergency response</li>
      <li>Humane capture using specialized tools</li>
      <li>Relocation to approved wildlife zones</li>
      <li>Entry point inspection and sealing advice</li>
      <li>Prevention tips for gardens and compounds</li>
    </ul>

    <p>We do NOT kill snakes — we relocate them responsibly. Serving Karen, Lang’ata, Runda, Kitisuru, and other high-risk areas.</p>

    <p><strong>Never attempt to handle a snake yourself.</strong> Call us immediately for safe removal.</p>
  `,
};

export default function SnakesControlPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={serviceData.heroImage} alt="Snakes Control" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl font-bold text-primary mb-6">Snake in Your Home?</h2>
          <p className="text-lg mb-8">Call now for immediate, humane removal.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Emergency Help
          </Link>
        </div>
      </section>
    </>
  );
}