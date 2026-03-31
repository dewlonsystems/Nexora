// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogData: Record<string, any> = {
  'signs-you-need-pest-control': {
    title: '5 Signs You Need Professional Pest Control in Nairobi',
    date: 'January 10, 2026',
    heroImage: 'https://images.unsplash.com/photo-1584438784913-76ef476c6f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>If you're in Nairobi and notice any of these warning signs, it’s time to call a professional pest control company near you. Ignoring early indicators can lead to costly damage, health risks, and full-blown infestations.</p>

      <h3>1. Droppings or Urine Stains</h3>
      <p>Small, dark pellets near baseboards, pantries, or behind appliances often indicate rodents. Cockroach droppings resemble coffee grounds and are commonly found in kitchen cabinets.</p>

      <h3>2. Unusual Noises at Night</h3>
      <p>Scratching, scurrying, or squeaking inside walls or ceilings? That’s a clear sign of rats or mice nesting in your home — especially in Westlands, Karen, or Lang’ata apartments.</p>

      <h3>3. Musty or Ammonia-Like Odors</h3>
      <p>Rodent urine emits a strong ammonia smell. A persistent odd odor in unused rooms could mean hidden activity behind walls or under floors.</p>

      <h3>4. Damaged Food Packaging or Wires</h3>
      <p>Rats chew through cardboard, plastic, and even electrical wiring — a serious fire hazard in Nairobi homes and offices.</p>

      <h3>5. Live Insects in Daylight</h3>
      <p>Cockroaches and bedbugs are nocturnal. If you see them during the day, the infestation is likely severe.</p>

      <p><strong>Need fast, reliable pest control in Nairobi?</strong> Sipedo Services offers same-day inspections and eco-friendly treatments across Nairobi, Kiambu, and Thika. Call now for a free quote!</p>
    `
  },
  'post-construction-cleaning-essential': {
    title: 'Why Post-Construction Cleaning Is Essential in Nairobi After Renovation',
    date: 'December 28, 2025',
    heroImage: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>After a renovation or new build in Nairobi, your space may look finished — but it’s far from move-in ready. Construction leaves behind fine silica dust, paint splatters, adhesive residue, and debris that standard cleaning can’t handle.</p>

      <h3>Health Risks of Skipping Post-Construction Cleaning</h3>
      <p>Drywall dust contains crystalline silica, which can irritate lungs and trigger asthma — especially in children and elderly residents. Paint fumes and chemical residues linger in vents, causing long-term indoor air quality issues.</p>

      <h3>What Standard Cleaning Misses</h3>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Dust inside light fixtures, ceiling fans, and AC vents</li>
        <li>Paint splatters on windows, door frames, and hardware</li>
        <li>Cement or grout haze on tiles and countertops</li>
        <li>Adhesive residue on floors and glass surfaces</li>
      </ul>

      <h3>Why Hire Professionals in Nairobi?</h3>
      <p>Sipedo Services uses HEPA-filter vacuums, industrial scrubbers, and eco-friendly degreasers to remove every trace of construction mess. We clean from ceiling to floor — including switches, outlets, and baseboards — so your home or office is truly ready for occupancy.</p>

      <p><strong>Serving all Nairobi areas:</strong> Westlands, Karen, Runda, Thika, Kiambu, and more. Book your post-renovation cleanup today!</p>
    `
  },
  'sofa-cleaning-tips': {
    title: '3 Sofa Cleaning Mistakes to Avoid in Nairobi Homes (And What to Do Instead)',
    date: 'December 15, 2025',
    heroImage: 'https://images.unsplash.com/photo-1600879995428-7e8a8c6b5a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>Many Nairobi homeowners try DIY sofa cleaning — only to damage their upholstery or worsen stains. Here are the top mistakes to avoid, and how professional sofa cleaning near you can save your furniture.</p>

      <h3>Mistake #1: Using Too Much Water</h3>
      <p>Over-wetting fabric leads to mold, mildew, and prolonged drying — especially in Nairobi’s humid climate. Always use low-moisture methods or steam extraction with proper extraction.</p>

      <h3>Mistake #2: Applying Harsh Chemicals</h3>
      <p>Bleach, vinegar, or dish soap can discolor fabric, weaken fibers, and leave toxic residues. Use pH-balanced, eco-friendly cleaners designed for upholstery.</p>

      <h3>Mistake #3: Ignoring Deep-Seated Allergens</h3>
      <p>Vacuuming only removes surface dirt. Dust mites, pet dander, and bacteria live deep in cushions — requiring professional hot water extraction to eliminate.</p>

      <h3>The Right Way: Professional Sofa Cleaning in Nairobi</h3>
      <p>Sipedo Services uses certified technicians, hospital-grade sanitizers, and fast-drying techniques to refresh your sofa in just 2–4 hours. Safe for kids, pets, and allergy sufferers.</p>

      <p><strong>Available in Westlands, Karen, Lang’ata, and all Nairobi suburbs.</strong> Get a free quote today!</p>
    `
  },
  'eco-friendly-pest-control': {
    title: 'Eco-Friendly Pest Control Methods Safe for Kids and Pets in Nairobi',
    date: 'November 30, 2025',
    heroImage: 'https://images.unsplash.com/photo-1622288432343-4d1bb4a0a8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>Worried about toxic chemicals around your children or pets? You’re not alone. Many Nairobi families are switching to eco-friendly pest control that’s effective, safe, and sustainable.</p>

      <h3>What Is Eco-Friendly Pest Control?</h3>
      <p>It uses non-toxic, biodegradable solutions and integrated pest management (IPM) to eliminate pests without harming your family, pets, or the environment.</p>

      <h3>Our Safe Methods Include:</h3>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li><strong>Heat treatment for bedbugs</strong> — no chemicals, 100% effective</li>
        <li><strong>Gel baits for cockroaches</strong> — targeted, no spraying in living areas</li>
        <li><strong>Essential oil repellents</strong> — natural deterrents for ants and spiders</li>
        <li><strong>Exclusion and sealing</strong> — prevent re-entry without poisons</li>
      </ul>

      <h3>Why Choose Sipedo Services?</h3>
      <p>We’re certified in green pest control and use products approved by Kenya’s Environmental Management Authority. Our treatments are odorless, child-safe, and pet-friendly.</p>

      <p><strong>Serving Nairobi, Kiambu, and Kajiado</strong> with same-week appointments. Request your eco-friendly pest inspection today!</p>
    `
  },
  'carpet-cleaning-benefits': {
    title: '5 Health Benefits of Professional Carpet Cleaning in Nairobi',
    date: 'November 12, 2025',
    heroImage: 'https://images.unsplash.com/photo-1611080626721-8ec568568fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>Carpet isn’t just cozy — it’s a magnet for dust, allergens, and bacteria. In Nairobi’s dusty environment, regular professional carpet cleaning is essential for health and hygiene.</p>

      <h3>1. Reduces Allergies and Asthma Triggers</h3>
      <p>Carpet traps pollen, dust mites, and pet dander. Deep cleaning removes up to 98% of these allergens.</p>

      <h3>2. Eliminates Harmful Bacteria</h3>
      <p>Studies show carpets harbor more bacteria than toilet seats. Steam cleaning kills E. coli, salmonella, and other pathogens.</p>

      <h3>3. Removes Stubborn Stains and Odors</h3>
      <p>From wine spills to pet accidents, professional treatment restores freshness without harsh chemicals.</p>

      <h3>4. Extends Carpet Lifespan</h3>
      <p>Grime acts like sandpaper, wearing down fibers. Regular cleaning preserves texture and color.</p>

      <h3>5. Improves Indoor Air Quality</h3>
      <p>Clean carpets mean fewer airborne particles — crucial for Nairobi homes near busy roads or construction sites.</p>

      <p><strong>Sipedo Services offers same-day carpet cleaning in Nairobi</strong> with fast 2–4 hour drying. Serving Westlands, Karen, Thika, and beyond!</p>
    `
  },
  'bedbug-treatment-nairobi': {
    title: 'How to Get Rid of Bedbugs in Nairobi: Fast, Discreet & Guaranteed',
    date: 'October 25, 2025',
    heroImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    content: `
      <p>Bedbugs are one of the most distressing pests to deal with in Nairobi. They multiply quickly, hide in mattresses and furniture, and cause itchy bites that disrupt sleep. The good news? Sipedo Services offers fast, discreet, and guaranteed bedbug extermination.</p>

      <h3>Signs of Bedbugs in Your Nairobi Home</h3>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li>Red, itchy bites in lines or clusters</li>
        <li>Small blood spots on sheets</li>
        <li>Tiny brown bugs (apple seed size) in seams</li>
        <li>Sweet, musty odor in bedrooms</li>
      </ul>

      <h3>Why DIY Doesn’t Work</h3>
      <p>Over-the-counter sprays only kill visible bugs — not eggs or hidden colonies. Bedbugs can survive months without feeding and spread to neighboring units.</p>

      <h3>Our Proven Bedbug Treatment in Nairobi</h3>
      <p>We use a combination of:</p>
      <ul class="list-disc pl-5 space-y-2 mt-3">
        <li><strong>Heat treatment (60°C+)</strong> — kills all life stages in one visit</li>
        <li><strong>Targeted residual sprays</strong> — for cracks and baseboards</li>
        <li><strong>Follow-up inspection</strong> — ensures 100% elimination</li>
      </ul>

      <p><strong>Discreet service for apartments, hotels, and hostels</strong> across Nairobi. No need to worry about neighbors knowing. Same-day response available!</p>

      <p>Don’t let bedbugs take over. Call Sipedo Services today for emergency bedbug control near you.</p>
    `
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${post.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 inline-block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg">{post.date}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg max-w-none text-gray-700 mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t pt-8">
            <Link 
              href="/blog" 
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Expert Help in Nairobi?</h2>
          <p className="text-xl mb-8">Sipedo Services offers fast, affordable, and guaranteed results.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Get a Free Quote Today
          </Link>
        </div>
      </section>
    </>
  );
}