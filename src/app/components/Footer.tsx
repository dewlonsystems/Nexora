// src/app/components/Footer.tsx
'use client';

import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const cleaningServices = [
    { name: 'Sofa Cleaning', slug: 'sofa-cleaning' },
    { name: 'Office Cleaning', slug: 'office-cleaning' },
    { name: 'Carpet Cleaning', slug: 'carpet-cleaning' },
    { name: 'Mattress Cleaning', slug: 'mattress-cleaning' },
    { name: 'Car Interior', slug: 'car-interior' },
    { name: 'Post Construction', slug: 'post-construction' },
    { name: 'Laundry & Dry Cleaning', slug: 'laundry-dry-cleaning' },
    { name: 'Move In/Out Cleaning', slug: 'move-in-out-cleaning' },
  ];

  const pestControlServices = [
    'bedbugs', 'cockroaches', 'mosquitoes', 'termites', 'rats', 'snakes'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 font-sans border-t-[6px] border-[#008080]">
      
      {/* Top Banner: Newsletter & Trust Banner */}
      <div className="border-b border-gray-800 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Join Our Newsletter</h3>
              <p className="text-gray-400">Get exclusive cleaning tips, seasonal offers, and pest control alerts.</p>
            </div>
            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form className="flex items-center relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-[#8DB600] transition"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#8DB600] hover:bg-[#7a9e00] text-white px-6 py-3 rounded-r-lg transition flex items-center justify-center border border-[#8DB600]"
                  aria-label="Subscribe"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              {/* Optional: Use a white/light version of your logo here if you have one. For now, text fallback. */}
              <span className="text-3xl font-extrabold text-white tracking-tight">
                Sipedo<span className="text-[#8DB600]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nairobi's premier provider of professional cleaning and advanced pest control solutions. We restore comfort, health, and hygiene to your spaces.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-[#008080] shrink-0 mt-0.5" />
                <span>Nairobi County, Kenya<br/>Serving Nairobi & Environs</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-[#008080] shrink-0" />
                <a href="tel:+254725398764" className="hover:text-[#8DB600] transition">+254 725 398 764</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-[#008080] shrink-0" />
                <a href="mailto:info@sipedo.co.ke" className="hover:text-[#8DB600] transition">info@sipedo.co.ke</a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-[#008080] shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM<br/><span className="text-[#8DB600] font-medium">24/7 Emergency Pest Control</span></span>
              </div>
            </div>
          </div>

          {/* Column 2: Cleaning Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#008080]"></span>
              Cleaning Services
            </h4>
            <ul className="space-y-3">
              {cleaningServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/cleaning/${service.slug}`} 
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="text-gray-600 group-hover:text-[#8DB600] group-hover:translate-x-1 transition-all mr-2 shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="inline-flex items-center text-sm text-[#008080] font-semibold hover:text-[#8DB600] transition-colors mt-2">
                  View All Cleaning Services <ChevronRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pest Control */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A2B59F]"></span>
              Pest Control
            </h4>
            <ul className="space-y-3">
              {pestControlServices.map((pest) => (
                <li key={pest}>
                  <Link 
                    href={`/pest-control/${pest}`} 
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors capitalize"
                  >
                    <ChevronRight size={14} className="text-gray-600 group-hover:text-[#8DB600] group-hover:translate-x-1 transition-all mr-2 shrink-0" />
                    {pest} Control
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pest-control" className="inline-flex items-center text-sm text-[#008080] font-semibold hover:text-[#8DB600] transition-colors mt-2">
                  View All Pest Solutions <ChevronRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Social */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8DB600]"></span>
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {['Home', 'About Us', 'Our Process', 'Blog & Tips', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#008080] hover:text-white transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#008080] hover:text-white transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#008080] hover:text-white transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#008080] hover:text-white transition duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Sipedo Services. All rights reserved.</p>
              <p className="mt-1">
                Website Architecture & Engineering by{' '}
                <a 
                  href="https://dewlons.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A2B59F] font-semibold hover:text-[#8DB600] transition"
                >
                  Dewlon Systems
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="hover:text-[#A2B59F] transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#A2B59F] transition">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-[#A2B59F] transition hidden sm:block">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}