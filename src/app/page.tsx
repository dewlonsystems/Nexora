// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Star,
  PhoneCall,
  CalendarCheck,
  Sparkles,
  MapPin,
  Home,
  Droplets
} from 'lucide-react';

// Auto-rotating testimonials hook
function useAutoRotateTestimonials(testimonials: any[], interval = 6000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  return { currentIndex };
}

export default function HomePage() {
  const testimonials = [
    {
      id: 1,
      name: "James M.",
      location: "Westlands, Nairobi",
      text: "Sipedo transformed our office after a messy renovation. Their post-construction cleaning was thorough and fast. Highly recommend!"
    },
    {
      id: 2,
      name: "Amina K.",
      location: "Karen, Nairobi",
      text: "Had a terrible bedbug infestation. Sipedo responded within hours and completely eradicated them. Professional and discreet service."
    },
    {
      id: 3,
      name: "David O.",
      location: "Thika",
      text: "Their sofa and carpet cleaning brought our living room back to life! Friendly team and fair pricing."
    }
  ];

  const { currentIndex } = useAutoRotateTestimonials(testimonials);

  const faqs = [
    {
      question: "Do you serve areas outside Nairobi?",
      answer: "Yes! We cover Nairobi County and surrounding areas including Kiambu, Kajiado, Machakos, and Thika."
    },
    {
      question: "How quickly can you respond to a pest emergency?",
      answer: "For urgent pest control issues like bedbugs or rodents, we offer same-day service in most parts of Nairobi."
    },
    {
      question: "Are your cleaning products safe for children and pets?",
      answer: "Absolutely. We use eco-friendly, non-toxic cleaning solutions that are safe for your family and pets."
    },
    {
      question: "Do you provide invoices and receipts?",
      answer: "Yes, we provide official receipts and can issue tax-compliant invoices upon request."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need Professional Pest Control",
      excerpt: "Don't ignore these early warning signs of a pest infestation in your home or business.",
      slug: "signs-you-need-pest-control"
    },
    {
      id: 2,
      title: "Why Post-Construction Cleaning Is Essential",
      excerpt: "Dust and debris after building can harm your health. Here is why professional cleanup matters.",
      slug: "post-construction-cleaning-essential"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/9632880bae8d65993d5d208701d881d14745307b/office-cleaning-services-in-Nairobi-.jpg"
            alt="Professional Cleaning in Nairobi"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Teal Blue Overlay */}
        <div className="absolute inset-0 bg-[#008080]/80 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#8DB600]/20 border border-[#8DB600] text-[#8DB600] font-semibold tracking-wide text-sm mb-6 uppercase">
            Nairobi's Premier Cleaning & Pest Experts
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Spotless Spaces. <br /> Zero Pests.
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Trusted by hundreds of homes and businesses across Nairobi for deep cleaning, sofa care, bedbug removal, and comprehensive property maintenance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8DB600] hover:bg-[#7a9e00] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1"
            >
              <CalendarCheck size={20} />
              Book a Service
            </Link>
            <Link 
              href="/services" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-4 px-8 rounded-lg transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* COMPANY STATS BAR */}
      <section className="bg-white border-b border-gray-200 relative z-30 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-lg shadow-xl py-8 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#008080]">5+</p>
            <p className="text-sm text-gray-500 font-medium uppercase mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#008080]">1,200+</p>
            <p className="text-sm text-gray-500 font-medium uppercase mt-1">Spaces Cleaned</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#008080]">100%</p>
            <p className="text-sm text-gray-500 font-medium uppercase mt-1">Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#008080]">24/7</p>
            <p className="text-sm text-gray-500 font-medium uppercase mt-1">Emergency Response</p>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION - EXPANDED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#A2B59F]/30 rounded-full z-0"></div>
            <img 
              src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/b14dc739328e0746a45ea4850b99000103b7e428/pexels-matilda-wormwood-4098786.jpg" 
              alt="Sipedo cleaning team at work" 
              className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px] md:h-[600px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block border-t-4 border-[#8DB600]">
              <div className="flex items-center gap-4">
                <div className="bg-[#008080]/10 p-3 rounded-full">
                  <ShieldCheck className="text-[#008080]" size={32} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Licensed & Insured</p>
                  <p className="text-sm text-gray-500">For your peace of mind</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-[#8DB600] font-bold tracking-wider uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Setting the Standard for Cleanliness in Kenya.</h3>
            
            <div className="space-y-4 text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              <p>
                Founded on the principle that a clean space is the foundation of a healthy life, Sipedo Services has rapidly grown from a passionate local team into Nairobi's most trusted facility maintenance partner. We understand that whether it is a bustling corporate headquarters in Westlands or a quiet family home in Karen, every environment requires a meticulous and tailored approach.
              </p>
              <p>
                Our comprehensive methodology goes far beyond surface-level aesthetics. We focus on deep sanitation, eradicating hidden allergens, and providing long-term, scientifically-backed pest management solutions. We don't just clean spaces; we restore them to their optimal state.
              </p>
              <p>
                What truly sets us apart is our people. We invest heavily in our workforce, ensuring every technician undergoes rigorous training in modern cleaning science, safe chemical handling, and exceptional customer service. When you hire Sipedo, you are hiring dedicated professionals who treat your property with the utmost respect and care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Certified & trained technicians",
                "Eco-friendly, pet-safe products",
                "State-of-the-art equipment",
                "100% Satisfaction Guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="text-[#8DB600] shrink-0" size={20} />
                  <span className="text-gray-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#008080] hover:bg-[#006666] text-white font-bold py-3 px-8 rounded-lg transition">
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (PROCESS) SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#8DB600] font-bold tracking-wider uppercase text-sm mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Simple Steps to a Spotless Space</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-[#008080] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <PhoneCall className="text-[#008080]" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">1. Contact Us</h4>
              <p className="text-gray-600 max-w-xs text-sm md:text-base">Reach out via phone or our website to discuss your cleaning or pest control needs.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#008080] rounded-full flex items-center justify-center mb-6 shadow-lg text-white">
                <Sparkles size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">2. We Do the Work</h4>
              <p className="text-gray-600 max-w-xs text-sm md:text-base">Our expert team arrives on time with top-tier equipment to execute the job flawlessly.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-[#A2B59F] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="text-[#A2B59F]" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">3. You Relax</h4>
              <p className="text-gray-600 max-w-xs text-sm md:text-base">Enjoy your pristine, pest-free environment with our 100% satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION - EXPANDED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#008080] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-[#A2B59F] font-bold tracking-wider uppercase text-sm mb-2">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Comprehensive Service Solutions</h3>
            </div>
            <Link 
              href="/services" 
              className="bg-[#8DB600] hover:bg-[#7a9e00] text-white font-semibold py-3 px-6 rounded-lg transition inline-flex items-center gap-2 shrink-0"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/5f3edb8ec24efe3c9d540a713b2ea335e8e63b91/pexels-tima-miroshnichenko-6195104.jpg" 
                  alt="Carpet cleaning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Carpet & Upholstery</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Deep cleaning for carpets, sofas, and mattresses using industrial steam extractors to remove tough stains and hidden allergens.
                </p>
                <Link href="/cleaning/carpet-cleaning" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg" 
                  alt="Office cleaning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Commercial Cleaning</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Daily, weekly, or one-time deep cleaning tailored for offices, retail spaces, and commercial buildings to boost productivity.
                </p>
                <Link href="/cleaning/office-cleaning" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/fumigation.jpg" 
                  alt="Pest control" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Pest Control Services</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Fast, highly effective, and discreet treatment for bedbugs, cockroaches, termites, rodents, and other nuisance pests.
                </p>
                <Link href="/pest-control" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%20wo.jpg" 
                  alt="Post-Construction Cleaning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Post-Construction</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Intensive cleanup to remove hazardous dust, debris, and paint splatters after building renovations or new construction.
                </p>
                <Link href="/cleaning/post-construction" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/7216d4d56abf902a2aae1cd81d6daebd4190eac7/our%205.jpg" 
                  alt="Residential Deep Cleaning" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Residential Deep Clean</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Thorough top-to-bottom cleaning for homes, perfect for spring cleaning, moving in, or moving out of a property.
                </p>
                <Link href="/cleaning/residential" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full group">
              <div className="relative h-48 sm:h-56 overflow-hidden shrink-0 bg-gray-200 flex items-center justify-center">
                 <img 
                  src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/526dac887b573e38a17b7c03620eff41ca1d330c/mattress.jpg" 
                  alt="Sanitization Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3">Sanitization & Disinfection</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  Hospital-grade electrostatic spraying to eliminate viruses, bacteria, and germs, keeping your family and staff safe.
                </p>
                <Link href="/cleaning/sanitization" className="text-[#008080] font-bold hover:text-[#8DB600] transition flex items-center gap-1 mt-auto">
                  Read Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#8DB600] font-bold tracking-wider uppercase text-sm mb-2">The Sipedo Difference</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Nairobi Trusts Us</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Leaf className="text-[#A2B59F] mb-4" size={48} />
              <h4 className="text-lg font-bold mb-2">Eco-Friendly</h4>
              <p className="text-gray-600 text-sm">We use safe, non-toxic products that protect your family and the environment.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Clock className="text-[#008080] mb-4" size={48} />
              <h4 className="text-lg font-bold mb-2">Punctual Service</h4>
              <p className="text-gray-600 text-sm">Your time is valuable. Our teams arrive precisely when scheduled.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <ShieldCheck className="text-[#8DB600] mb-4" size={48} />
              <h4 className="text-lg font-bold mb-2">Vetted Staff</h4>
              <p className="text-gray-600 text-sm">Every employee undergoes strict background checks and extensive training.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Star className="text-[#A2B59F] mb-4" size={48} />
              <h4 className="text-lg font-bold mb-2">Guaranteed Quality</h4>
              <p className="text-gray-600 text-sm">Not satisfied? Let us know within 24 hours and we will re-clean for free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS - REDESIGNED */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#8DB600] font-bold tracking-wider uppercase text-sm mb-2">Coverage Map</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Areas We Serve</h3>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We provide fast, reliable dispatch to neighborhoods across Nairobi and neighboring counties. Don't see your area? Contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Home className="text-[#008080]" size={28} />
                <h4 className="text-xl font-bold text-gray-900">Nairobi Core</h4>
              </div>
              <ul className="space-y-4">
                {['Kilimani', 'Kileleshwa', 'Lavington', 'Westlands', 'Karen'].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <MapPin size={18} className="text-[#8DB600]" />
                    <span className="font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-[#008080]" size={28} />
                <h4 className="text-xl font-bold text-gray-900">Nairobi Environs</h4>
              </div>
              <ul className="space-y-4">
                {['Rongai', 'Eastleigh', 'South B', 'South C', 'Langata'].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <MapPin size={18} className="text-[#8DB600]" />
                    <span className="font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-[#008080]/5 p-8 rounded-xl border border-[#008080]/20">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="text-[#008080]" size={28} />
                <h4 className="text-xl font-bold text-gray-900">Neighboring Counties</h4>
              </div>
              <ul className="space-y-4">
                {['Kiambu', 'Thika', 'Katani', 'Athi River', 'Kitengela', 'Kajiado'].map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <MapPin size={18} className="text-[#008080]" />
                    <span className="font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#A2B59F]/20">
        <div className="max-w-4xl mx-auto text-center">
          <Star className="text-[#8DB600] mx-auto mb-6" size={48} fill="#8DB600" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">What Our Clients Say</h2>
          
          <div className="bg-white p-8 md:p-14 rounded-2xl shadow-xl relative mx-4 md:mx-0">
            <p className="text-lg md:text-2xl italic text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg text-[#008080]">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].location}
              </p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  className={`h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#008080] w-8' : 'bg-gray-300 w-3'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS & BLOG SPLIT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full text-left font-bold text-gray-800 p-5 hover:bg-gray-50 transition"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#008080] shrink-0 ml-4">
                      {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="p-5 pt-0 text-gray-600 bg-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BLOG */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Cleaning Insights</h2>
              <Link href="/blog" className="text-[#008080] font-medium hover:underline hidden sm:block">
                View All
              </Link>
            </div>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#008080] transition">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-[#8DB600] font-bold text-sm uppercase flex items-center gap-1">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 sm:hidden">
               <Link href="/blog" className="text-[#008080] font-medium hover:underline">
                View All Articles →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#008080] text-white text-center overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-[#8DB600]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Ready to Experience Spotless Cleanliness?</h2>
          <p className="text-lg md:text-xl mb-10 text-gray-100 font-light px-4">
            Don't let dirt or pests disrupt your life. Get a free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-white text-[#008080] font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Get Your Free Quote
            </Link>
            <a 
              href="tel:+254700000000"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition"
            >
              <PhoneCall size={20} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}