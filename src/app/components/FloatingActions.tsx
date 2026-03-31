// src/app/components/FloatingActions.tsx
'use client';

import { useState } from 'react';
import { Mail, PhoneCall, Plus, X } from 'lucide-react';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Phone number without spaces for hrefs
  const phoneNumber = "254725398764";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      
      {/* Action Buttons Container */}
      <div 
        className={`flex flex-col items-end space-y-4 mb-4 transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
        }`}
      >
        {/* SMS Button */}
        <div className="relative group flex items-center">
          <span className="absolute right-16 px-3 py-1.5 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
            Send SMS
          </span>
          <a
            href={`sms:+${phoneNumber}`}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform hover:scale-110"
            aria-label="Send SMS"
            tabIndex={isOpen ? 0 : -1}
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Direct Call Button */}
        <div className="relative group flex items-center">
          <span className="absolute right-16 px-3 py-1.5 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
            Call Us Now
          </span>
          <a
            href={`tel:+${phoneNumber}`}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#8DB600] text-white shadow-lg hover:bg-[#7a9e00] transition-transform hover:scale-110"
            aria-label="Call Us"
            tabIndex={isOpen ? 0 : -1}
          >
            <PhoneCall size={20} />
          </a>
        </div>

        {/* WhatsApp Button (Official SVG) */}
        <div className="relative group flex items-center">
          <span className="absolute right-16 px-3 py-1.5 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
            Chat on WhatsApp
          </span>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-transform hover:scale-110"
            aria-label="Chat on WhatsApp"
            tabIndex={isOpen ? 0 : -1}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="currentColor"
              className="mt-0.5 ml-0.5" // Slight optical alignment
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#008080]/30 z-50 relative ${
          isOpen ? 'bg-gray-800 rotate-90 hover:bg-gray-700' : 'bg-[#008080] hover:bg-[#006666] hover:scale-105'
        }`}
        aria-label={isOpen ? "Close actions" : "Open actions"}
        aria-expanded={isOpen}
      >
        {/* Ping animation effect when closed to draw attention */}
        {!isOpen && (
          <span className="absolute w-full h-full rounded-full bg-[#008080] opacity-30 animate-ping -z-10"></span>
        )}
        
        {/* Icon toggle */}
        {isOpen ? <X size={28} /> : <Plus size={28} />}
      </button>

    </div>
  );
}