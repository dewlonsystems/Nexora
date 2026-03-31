// src/app/pest-control/cockroaches/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Cockroach Control",
  category: "Pest Control",
  heroImage: "https://images.unsplash.com/photo-1622288432343-4d1bb4a0a8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Permanent cockroach extermination for homes and businesses in Nairobi. Safe, odorless, and highly effective treatments.",
  content: `
    <p>Cockroaches carry bacteria, trigger allergies, and are a sign of unsanitary conditions — even if your space is clean. At Sipedo Services, we provide long-lasting cockroach control that targets nests and prevents re-infestation.</p>
    
    <h3>How We Eliminate Cockroaches</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Inspection of kitchens, drains, cabinets, and hidden entry points</li>
      <li>Application of gel baits in strategic locations (no spraying in living areas)</li>
      <li>Residual barrier treatment around foundations and pipes</li>
      <li>Sealing of entry points where possible</li>
      <li>Follow-up in 7–10 days to ensure full eradication</li>
    </ul>

    <p>Our methods are safe for children, pets, and food preparation areas. We serve restaurants, hotels, apartments, and homes across Nairobi, Kiambu, and Thika.</p>

    <p>Don’t let cockroaches take over your space. Sipedo Services offers affordable, guaranteed cockroach control with same-week availability.</p>
  `,
};

export default function CockroachControlPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Say Goodbye to Cockroaches</h2>
          <p className="text-lg mb-8">Safe, effective, and lasting results for Nairobi homes and businesses.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get Pest-Free Today
          </Link>
        </div>
      </section>
    </>
  );
}