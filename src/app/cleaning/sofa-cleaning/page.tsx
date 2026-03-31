// src/app/cleaning/sofa-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Sofa Cleaning",
  category: "Cleaning Services",
  heroImage: "https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/sofa%202.jpg",
  description: "Deep cleaning for fabric and leather sofas in Nairobi using eco-friendly solutions that remove stains, odors, and allergens.",
  content: `
    <p>Your sofa is one of the most used pieces of furniture in your home — and it shows. At Sipedo Services, we specialize in professional sofa cleaning that restores freshness, removes stubborn stains, and eliminates hidden allergens.</p>
    
    <h3>Our Sofa Cleaning Process</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Pre-inspection to determine fabric type and stain severity</li>
      <li>Vacuuming to remove loose dirt and debris</li>
      <li>Application of eco-friendly, non-toxic cleaning solution</li>
      <li>Deep agitation and extraction using professional-grade equipment</li>
      <li>Optional anti-stain or deodorizing treatment</li>
      <li>Fast drying — usually within 2–4 hours</li>
    </ul>

    <p>We handle all types of upholstery: microfiber, cotton, leather, velvet, and more. Our team serves homes and offices across Nairobi, including Westlands, Karen, Lang’ata, and Thika.</p>

    <p>Looking for reliable sofa cleaning near me in Nairobi? Sipedo Services offers same-day appointments, transparent pricing, and a 100% satisfaction guarantee.</p>
  `,
};

export default function SofaCleaningPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Refresh Your Sofa?</h2>
          <p className="text-lg mb-8">Get a free quote within minutes. Serving all Nairobi areas.</p>
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