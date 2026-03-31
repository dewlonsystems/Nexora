// src/app/pest-control/bedbugs/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Bedbug Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1584438784913-76ef476c6f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Fast, discreet, and effective bedbug extermination services in Nairobi. Same-day response available for infestations.",
  content: `
    <p>Bedbugs are one of the most distressing pests to deal with. They hide in mattresses, furniture, and cracks — and multiply quickly. At Sipedo Services, we offer professional bedbug control that eliminates infestations at the source.</p>
    
    <h3>Our Bedbug Treatment Process</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Thorough inspection to identify hiding spots and infestation level</li>
      <li>Heat treatment (up to 60°C) — the most effective method for complete eradication</li>
      <li>Targeted chemical treatment in cracks, baseboards, and furniture joints</li>
      <li>Follow-up visit to ensure 100% elimination</li>
      <li>Discreet service — no need to worry about neighbors or guests knowing</li>
    </ul>

    <p>We serve apartments, hotels, hostels, and homes across Nairobi. Our technicians are certified, insured, and use EPA-approved products safe for your family and pets.</p>

    <p>If you’re seeing bites, blood spots, or tiny brown bugs — don’t wait. Bedbugs spread fast. Contact Sipedo Services today for emergency bedbug control near you in Nairobi.</p>
  `,
};

export default function BedbugControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Emergency Bedbug Infestation?</h2>
          <p className="text-lg mb-8">We respond the same day. Serving all Nairobi counties.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Call for Immediate Help
          </Link>
        </div>
      </section>
    </>
  );
}