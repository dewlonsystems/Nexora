// src/app/cleaning/office-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Office Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1581578021424-3f1d6020b775?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Professional daily, weekly, or one-time office cleaning services across Nairobi for businesses of all sizes.",
  content: `
    <p>A clean office boosts productivity, impresses clients, and supports employee health. Sipedo Services offers tailored office cleaning plans for startups, SMEs, and corporate offices throughout Nairobi.</p>
    
    <h3>Our Office Cleaning Includes:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Vacuuming and mopping of floors</li>
      <li>Dusting desks, shelves, and electronics</li>
      <li>Sanitizing restrooms and kitchen areas</li>
      <li>Emptying trash and replacing liners</li>
      <li>Window cleaning (interior)</li>
      <li>Optional: deep cleaning, carpet care, and disinfection</li>
    </ul>

    <p>We work after hours to avoid disruption and provide consistent, reliable service with the same trained team every time. All cleaning products are eco-friendly and safe for office environments.</p>

    <p>Serving Westlands, Upper Hill, CBD, Karen, Thika, and all Nairobi business districts. Flexible scheduling and transparent monthly billing available.</p>
  `,
};

export default function OfficeCleaningPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Keep Your Office Spotless</h2>
          <p className="text-lg mb-8">Reliable, professional cleaning for Nairobi businesses.</p>
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