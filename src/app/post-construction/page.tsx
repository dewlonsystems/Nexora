// src/app/cleaning/post-construction/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Post-Construction Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Thorough cleanup after building or renovation — removing dust, debris, paint splatters, and more across Nairobi.",
  content: `
    <p>After construction or renovation, your space is left with fine dust, sawdust, paint splatters, and leftover debris — even in hidden corners. Sipedo Services provides comprehensive post-construction cleaning to make your property move-in ready.</p>
    
    <h3>Our Post-Construction Cleaning Covers:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Removal of drywall dust, sawdust, and cement residue</li>
      <li>Cleaning of windows, frames, and glass doors</li>
      <li>Wiping down cabinets, fixtures, and appliances</li>
      <li>Floor cleaning (tile, hardwood, concrete)</li>
      <li>Disposal of small waste and packaging materials</li>
      <li>Final inspection to ensure no detail is missed</li>
    </ul>

    <p>We work with homeowners, contractors, and property managers across Nairobi. Our team arrives fully equipped with industrial vacuums, HEPA filters, and specialized tools to handle even the toughest cleanup.</p>

    <p>Don’t let construction mess delay your occupancy. Book a same-week post-renovation clean today!</p>
  `,
};

export default function PostConstructionCleaningPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Make Your Space Move-In Ready</h2>
          <p className="text-lg mb-8">Professional post-construction cleaning in Nairobi.</p>
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