// src/app/pest-control/termites/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Termite Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1617830083435-6a6e4c1b6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Professional termite inspection and eradication for homes and buildings in Nairobi. Prevent structural damage before it’s too late.",
  content: `
    <p>Termites cause silent, costly damage to wooden structures, flooring, and furniture. In Nairobi’s climate, infestations can go unnoticed until major harm is done. Sipedo Services offers early detection and complete termite control to protect your property.</p>
    
    <h3>Our Termite Control Includes:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Free inspection for signs of termite activity</li>
      <li>Soil treatment with non-repellent termiticides</li>
      <li>Baiting systems for long-term colony elimination</li>
      <li>Wood treatment for affected beams and furniture</li>
      <li>Annual monitoring and prevention plans</li>
    </ul>

    <p>We use advanced methods like Sentricon® and Termidor® — proven to eliminate entire colonies, not just surface workers. All treatments comply with Kenya’s environmental safety standards.</p>

    <p>Don’t wait for hollow walls or sagging floors. Early intervention saves thousands in repairs. Serving Nairobi, Kiambu, and Kajiado.</p>
  `,
};

export default function TermiteControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Protect Your Property from Termites</h2>
          <p className="text-lg mb-8">Free inspection and guaranteed treatment in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Schedule Inspection
          </Link>
        </div>
      </section>
    </>
  );
}