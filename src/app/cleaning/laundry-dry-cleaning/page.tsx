// src/app/cleaning/laundry-dry-cleaning/page.tsx
import Link from 'next/link';

const serviceData = {
  title: "Laundry & Dry Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Convenient pickup and delivery laundry and dry cleaning services for homes and businesses in Nairobi.",
  content: `
    <p>Save time and effort with Sipedo’s professional laundry and dry cleaning service. We handle everything from everyday clothes to delicate fabrics — with free pickup and delivery across Nairobi.</p>
    
    <h3>Our Laundry Services Include:</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Wash & fold for casual clothing</li>
      <li>Pressing and ironing</li>
      <li>Dry cleaning for suits, dresses, and delicate items</li>
      <li>Stain treatment and odor removal</li>
      <li>Same-day or next-day turnaround</li>
      <li>Free pickup and delivery (minimum order applies)</li>
    </ul>

    <p>We use gentle, eco-friendly detergents and professional-grade equipment to protect your garments. Ideal for busy professionals, families, Airbnb hosts, and hotels.</p>

    <p>Serving Nairobi, Kiambu, and Thika with scheduled or on-demand service. Order online or via phone — no app needed!</p>
  `,
};

export default function LaundryDryCleaningPage() {
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
          <h2 className="text-3xl font-bold text-primary mb-6">Fresh Clothes, Delivered</h2>
          <p className="text-lg mb-8">Laundry and dry cleaning with free pickup in Nairobi.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Place Your Order
          </Link>
        </div>
      </section>
    </>
  );
}