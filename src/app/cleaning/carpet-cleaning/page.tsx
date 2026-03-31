// src/app/cleaning/carpet-cleaning/page.tsx
import Link from 'next/link';

// 🔧 REPLACE THIS BLOCK FOR EACH SERVICE
const serviceData = {
  title: "Carpet Cleaning",
  category: "Cleaning Services",
  heroImage: "https://images.unsplash.com/photo-1611080626721-8ec568568fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  description: "Professional carpet cleaning in Nairobi that removes deep-seated dirt, allergens, and odors using eco-friendly steam and dry cleaning methods.",
  content: `
    <p>At Sipedo Services, our carpet cleaning goes beyond surface-level vacuuming. We use advanced hot water extraction (steam cleaning) and low-moisture techniques to restore your carpets to their best condition—without leaving them soggy or taking days to dry.</p>
    
    <h3>Why Choose Our Carpet Cleaning?</h3>
    <ul class="list-disc pl-5 space-y-2 mt-4">
      <li>Removes up to 98% of embedded dirt, dust mites, and bacteria</li>
      <li>Safe for children, pets, and allergy sufferers</li>
      <li>Drying time as fast as 2–4 hours</li>
      <li>Effective on stains from wine, coffee, pet accidents, and more</li>
      <li>Serving all Nairobi areas including Westlands, Karen, Lang’ata, and Thika</li>
    </ul>

    <p>Whether you have wool, synthetic, or delicate oriental rugs, our certified technicians tailor the cleaning method to your carpet type. We also offer anti-stain and deodorizing treatments upon request.</p>

    <p>Looking for reliable carpet cleaning near me in Nairobi? Sipedo Services offers same-day and next-day appointments with transparent pricing and 100% satisfaction guarantee.</p>
  `,
  keywords: "carpet cleaning Nairobi, professional carpet cleaners near me, steam cleaning services Nairobi, affordable carpet cleaning Kenya"
};

export default function IndividualServicePage() {
  return (
    <>
      {/* Hero Section */}
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

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: serviceData.content }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Book {serviceData.title}?</h2>
          <p className="text-lg mb-8">
            Get a free quote within minutes. Serving Nairobi and surrounding counties.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* SEO Meta (for search engines) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": serviceData.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sipedo Services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              }
            },
            "areaServed": "Nairobi, Kiambu, Kajiado, Machakos"
          })
        }}
      />
    </>
  );
}