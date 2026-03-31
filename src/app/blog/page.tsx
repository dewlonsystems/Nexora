// src/app/blog/page.tsx
import Link from 'next/link';

const blogPosts = [
  {
    id: 'signs-you-need-pest-control',
    title: '5 Signs You Need Professional Pest Control in Nairobi',
    excerpt: 'Early warning signs of rodent and insect infestations — and what to do next.',
    date: 'January 10, 2026',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/fumi.jpg'
  },
  {
    id: 'post-construction-cleaning-essential',
    title: 'Why Post-Construction Cleaning Is Essential in Nairobi After Renovation',
    excerpt: 'Health risks of construction dust and why professional cleanup is non-negotiable.',
    date: 'December 28, 2025',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/5f3edb8ec24efe3c9d540a713b2ea335e8e63b91/pexels-tima-miroshnichenko-6195104.jpg'
  },
  {
    id: 'sofa-cleaning-tips',
    title: '3 Sofa Cleaning Mistakes to Avoid in Nairobi Homes',
    excerpt: 'Common DIY errors that damage upholstery — and the safe alternative.',
    date: 'December 15, 2025',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/sofa%202.jpg'
  },
  {
    id: 'eco-friendly-pest-control',
    title: 'Eco-Friendly Pest Control Methods Safe for Kids and Pets in Nairobi',
    excerpt: 'Non-toxic, effective solutions for cockroaches, bedbugs, and more.',
    date: 'November 30, 2025',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/fumigation.jpg'
  },
  {
    id: 'carpet-cleaning-benefits',
    title: '5 Health Benefits of Professional Carpet Cleaning in Nairobi',
    excerpt: 'How deep cleaning improves air quality, reduces allergies, and extends carpet life.',
    date: 'November 12, 2025',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/5fb4adcb1325783bf75c5dca18af625225a6e292/IMG-20260117-WA0009.jpg'
  },
  {
    id: 'bedbug-treatment-nairobi',
    title: 'How to Get Rid of Bedbugs in Nairobi: Fast, Discreet & Guaranteed',
    excerpt: 'Emergency bedbug extermination with heat treatment and follow-up guarantee.',
    date: 'October 25, 2025',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/bed-bugs-control-services.jpg'
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning & Pest Control Tips for Nairobi</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert advice to keep your home clean, healthy, and pest-free in Kenya.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h2 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-primary-dark transition">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Need Help Right Away?</h2>
          <p className="text-lg mb-8">Don’t wait for pests or dirt to take over. Get expert help today.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}