// src/app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

const cleaningServices = [
  'sofa-cleaning',
  'office-cleaning',
  'carpet-cleaning',
  'mattress-cleaning',
  'car-interior',
  'post-construction',
  'laundry-dry-cleaning',
  'curtains-cleaning',
  'cabros-cleaning',
  'move-in-out-cleaning',
  'wooden-floor-polishing',
];

const pestControlServices = [
  'bedbugs',
  'cockroaches',
  'mosquitoes',
  'fleas',
  'termites',
  'rats',
  'snakes',
  'bats',
  'bees',
];

// Helper to format slugs into Title Case strings cleanly
const formatName = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cleaningOpen, setCleaningOpen] = useState(false);
  const [pestOpen, setPestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for a premium feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setCleaningOpen(false);
    setPestOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <Link href="/" onClick={closeMenu}>
            <img
              src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png"
              alt="Sipedo Services"
              className="h-8 w-auto"
            />
          </Link>
          <button 
            onClick={closeMenu} 
            className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-[#008080] hover:bg-[#008080]/10 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="py-3 px-4 font-bold text-gray-800 hover:bg-[#008080]/5 hover:text-[#008080] rounded-lg transition"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Mobile Cleaning Accordion */}
            <div className="rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center py-3 px-4 font-bold transition ${
                  cleaningOpen ? 'bg-[#008080]/5 text-[#008080]' : 'text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setCleaningOpen(!cleaningOpen)}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className={cleaningOpen ? 'text-[#008080]' : 'text-gray-400'} />
                  <span>Cleaning Services</span>
                </div>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${cleaningOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  cleaningOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2 px-4 bg-gray-50/50 space-y-1">
                  {cleaningServices.map((service) => (
                    <Link
                      key={service}
                      href={`/cleaning/${service}`}
                      className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-[#008080] hover:bg-white rounded-md border border-transparent hover:border-gray-100 transition"
                      onClick={closeMenu}
                    >
                      {formatName(service)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Pest Control Accordion */}
            <div className="rounded-lg overflow-hidden">
              <button
                className={`w-full flex justify-between items-center py-3 px-4 font-bold transition ${
                  pestOpen ? 'bg-[#008080]/5 text-[#008080]' : 'text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => setPestOpen(!pestOpen)}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className={pestOpen ? 'text-[#008080]' : 'text-gray-400'} />
                  <span>Pest Control</span>
                </div>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${pestOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  pestOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-2 px-4 bg-gray-50/50 space-y-1">
                  {pestControlServices.map((service) => (
                    <Link
                      key={service}
                      href={`/pest-control/${service}`}
                      className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-[#008080] hover:bg-white rounded-md border border-transparent hover:border-gray-100 transition"
                      onClick={closeMenu}
                    >
                      {formatName(service)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="py-3 px-4 font-bold text-gray-800 hover:bg-[#008080]/5 hover:text-[#008080] rounded-lg transition"
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="py-3 px-4 font-bold text-gray-800 hover:bg-[#008080]/5 hover:text-[#008080] rounded-lg transition"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
        
        {/* Mobile Sidebar Footer CTA */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link 
            href="/contact"
            onClick={closeMenu}
            className="w-full flex justify-center items-center gap-2 bg-[#8DB600] text-white font-bold py-3.5 rounded-lg shadow-md hover:bg-[#7a9e00] transition"
          >
            <PhoneCall size={18} />
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <img
                src="https://raw.githubusercontent.com/dewlonsystems/sipedopics/8ea9c6d15b62f2a8f1e16d600bdf8181654d1818/sipedoNew.png"
                alt="Sipedo Services"
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 text-gray-700 font-semibold hover:text-[#008080] rounded-md transition">
                Home
              </Link>

              {/* Cleaning Dropdown (Mega Menu Style) */}
              <div className="relative group px-2">
                <button className="flex items-center gap-1 px-2 py-2 text-gray-700 font-semibold hover:text-[#008080] transition">
                  Cleaning Services
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#008080] group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-x-4 gap-y-1 relative">
                    {/* Decorative arrow pointing up */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
                    
                    {cleaningServices.map((service) => (
                      <Link
                        key={service}
                        href={`/cleaning/${service}`}
                        className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-[#008080] hover:bg-[#008080]/5 rounded-lg transition"
                      >
                        {formatName(service)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pest Control Dropdown */}
              <div className="relative group px-2">
                <button className="flex items-center gap-1 px-2 py-2 text-gray-700 font-semibold hover:text-[#008080] transition">
                  Pest Control
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#008080] group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-x-4 gap-y-1 relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
                    
                    {pestControlServices.map((service) => (
                      <Link
                        key={service}
                        href={`/pest-control/${service}`}
                        className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-[#008080] hover:bg-[#008080]/5 rounded-lg transition"
                      >
                        {formatName(service)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/about" className="px-4 py-2 text-gray-700 font-semibold hover:text-[#008080] rounded-md transition">
                About Us
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="hidden lg:flex items-center gap-2 bg-[#008080] text-white font-bold px-6 py-2.5 rounded-lg hover:bg-[#006666] transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
              
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-[#008080] hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}