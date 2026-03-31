// src/app/pest-control/page.tsx
import Link from 'next/link';

// Define pest control services
const pestControlServices = [
  {
    id: 'bedbugs',
    title: 'Bedbug Control',
    description: 'Fast, discreet, and effective bedbug extermination with heat treatment and follow-up guarantee.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/bed-bugs-control-services.jpg'
  },
  {
    id: 'cockroaches',
    title: 'Cockroach Control',
    description: 'Permanent elimination of cockroaches using gel baits and residual barriers — safe for kitchens.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/cockroach.jpeg'
  },
  {
    id: 'mosquitoes',
    title: 'Mosquito Control',
    description: 'Outdoor fogging and larvicide treatment to prevent malaria, dengue, and Zika in Nairobi homes.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/mosq.jpg'
  },
  {
    id: 'fleas',
    title: 'Flea Control',
    description: 'Complete flea eradication for homes and pets using growth inhibitors and eco-friendly sprays.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/flea-control.jpg'
  },
  {
    id: 'termites',
    title: 'Termite Control',
    description: 'Professional inspection and colony elimination using baiting systems and soil treatment.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/INSECTEK-WEB-SERVICES-TERMITES-1024x1022.jpg'
  },
  {
    id: 'rats',
    title: 'Rat & Rodent Control',
    description: 'Humane trapping, exclusion, and sanitation to eliminate rats and mice from your property.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/rat-control-solution.jpg'
  },
  // ✅ NEW SERVICES ADDED BELOW
  {
    id: 'snakes',
    title: 'Snakes Control',
    description: 'Safe, humane snake removal and prevention for homes in Nairobi — especially in green areas like Karen and Lang’ata.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/3f0ce696bf961fc18ff0da52d1100b97736ff5d2/snake%20control.jpg'
  },
  {
    id: 'bats',
    title: 'Bats Control',
    description: 'Humane bat exclusion and attic cleanup — legal, safe, and effective for Nairobi homes.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/3f0ce696bf961fc18ff0da52d1100b97736ff5d2/Bat-in-my-house-1080x675.jpg'
  },
  {
    id: 'bees',
    title: 'Bees Control',
    description: 'Eco-friendly bee hive removal and relocation — preserving pollinators while protecting your family.',
    image: 'https://raw.githubusercontent.com/dewlonsystems/sipedopics/3f0ce696bf961fc18ff0da52d1100b97736ff5d2/bees.jpg'
  }
];

export default function PestControlPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/f20bc8da53e60cfe1cf6f3fe4eab6cd2edab6300/fumigation.jpg"
            alt="Professional pest control services in Nairobi"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pest Control Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Effective, eco-friendly pest control for homes and businesses across Nairobi.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            Pests don’t just cause discomfort — they pose serious health and structural risks. 
            At Sipedo Services, we offer targeted, humane, and guaranteed pest control solutions 
            for bedbugs, cockroaches, termites, rats, and more. All treatments are safe for children, 
            pets, and the environment.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pestControlServices.map((service) => (
              <div key={service.id} className="bg-gray-bg rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <Link 
                    href={`/pest-control/${service.id}`} 
                    className="text-primary font-medium hover:underline inline-flex items-center"
                  >
                    See More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Emergency Pest Infestation?</h2>
          <p className="text-xl mb-8">
            We offer same-day response for bedbugs, rats, and cockroach emergencies in Nairobi.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Call for Immediate Help
          </Link>
        </div>
      </section>
    </>
  );
}