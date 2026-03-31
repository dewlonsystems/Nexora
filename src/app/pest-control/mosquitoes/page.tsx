// src/app/pest-control/mosquitoes/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Mosquito Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1617830083435-6a6e4c1b6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Effective mosquito fogging and larvicide treatment for homes, gardens, and events in Nairobi to prevent malaria and dengue.",
  content: `
    <p>Mosquitoes aren’t just annoying — they’re dangerous. In Nairobi, they carry risks of malaria, dengue, and Zika. Sipedo Services offers targeted mosquito control to protect your family, guests, and outdoor spaces.</p>
    
    <h3>Our Mosquito Control Solutions:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Outdoor fogging for gardens, patios, and compounds</li>
      <li>Larvicide treatment for stagnant water (tanks, gutters, ponds)</li>
      <li>Event-specific mosquito control for weddings and parties</li>
      <li>Eco-friendly, WHO-approved chemicals</li>
      <li>Preventive maintenance plans during rainy season</li>
    </ul>

    <p>We treat residential homes, schools, restaurants, and event venues across Nairobi. Our treatments are safe for pets, plants, and children when applied correctly by our certified team.</p>

    <p>Don’t wait for the first bite. Proactive mosquito control keeps your space comfortable and safe year-round.</p>
  `,
};

export default function MosquitoControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Enjoy Your Outdoors Again</h2>
          <p className="text-lg mb-8">Safe, effective mosquito control in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Request Treatment
          </Link>
        </div>
      </section>
    </>
  );
}