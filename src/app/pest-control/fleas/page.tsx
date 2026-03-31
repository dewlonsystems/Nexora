// src/app/pest-control/fleas/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Flea Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Complete flea extermination for homes and pets in Nairobi. Safe, fast, and guaranteed to stop bites and infestations.",
  content: `
    <p>Fleas multiply rapidly and cause relentless itching for both pets and humans. At Sipedo Services, we offer comprehensive flea control that treats your home, carpets, and pet areas to break the infestation cycle.</p>
    
    <h3>Our Flea Treatment Process:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Inspection of pet bedding, carpets, and furniture</li>
      <li>Application of insect growth regulators (IGRs) to stop eggs from hatching</li>
      <li>Residual spray treatment on floors and baseboards</li>
      <li>Coordination with your vet for pet-safe solutions</li>
      <li>Follow-up visit after 10–14 days to ensure full elimination</li>
    </ul>

    <p>Our products are safe for dogs, cats, and children when used as directed. We serve homes in Karen, Lang’ata, Runda, and all pet-friendly neighborhoods in Nairobi.</p>

    <p>If your pet is scratching or you see tiny black specks (flea dirt), act fast. Fleas can lay 50 eggs per day!</p>
  `,
};

export default function FleaControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Stop Flea Bites Today</h2>
          <p className="text-lg mb-8">Pet-safe flea extermination across Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Call for Help
          </Link>
        </div>
      </section>
    </>
  );
}