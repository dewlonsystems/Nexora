// src/app/contact/page.tsx
'use client';

import { useActionState, useState } from 'react';
import { submitContactForm, FormState } from '@/app/actions';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Send,
  ShieldCheck
} from 'lucide-react';

// Form feedback component with premium styling
function SuccessMessage({ state }: { state: FormState | null }) {
  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-8 flex items-start gap-3 shadow-sm animate-fade-in">
        <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="font-bold">Request Received!</h4>
          <p className="text-sm mt-1">Thank you for choosing Sipedo. One of our experts will call you within 1 hour.</p>
        </div>
      </div>
    );
  }
  if (state?.message) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 flex items-start gap-3 shadow-sm animate-fade-in">
        <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="font-bold">Something went wrong</h4>
          <p className="text-sm mt-1">{state.message}</p>
        </div>
      </div>
    );
  }
  return null;
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Handle reCAPTCHA success
  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Premium Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://raw.githubusercontent.com/dewlonsystems/sipedopics/decb30fd253387f759f2b629bd5b6196afacf7e6/office%20cleaning.jpg')" }}
        />
        {/* Teal overlay for brand consistency */}
        <div className="absolute inset-0 bg-[#008080]/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto -mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Let's Get Your Space Clean & Safe.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            Request a free quote, book a service, or ask us anything. We pride ourselves on rapid responses and exceptional results.
          </p>
        </div>
      </section>

      {/* Overlapping Content Section */}
      <section className="relative z-30 px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Panel: Contact Info (Teal Background) */}
          <div className="w-full lg:w-2/5 bg-[#008080] text-white p-10 md:p-12 relative overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Get in Touch</h3>
              <p className="text-[#A2B59F] mb-10 leading-relaxed">
                Fill out the form and our team will get back to you within 1 hour during standard business hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone size={20} className="text-[#8DB600]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold mb-1">Call Us Directly</p>
                    <a href="tel:+254725398764" className="text-lg font-medium hover:text-[#8DB600] transition">+254 725 398 764</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Mail size={20} className="text-[#8DB600]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold mb-1">Email Address</p>
                    <a href="mailto:info@sipedo.co.ke" className="text-lg font-medium hover:text-[#8DB600] transition">info@sipedo.co.ke</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Clock size={20} className="text-[#8DB600]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold mb-1">Working Hours</p>
                    <p className="text-lg font-medium">Mon–Sat: 7:00 AM – 6:00 PM</p>
                    <p className="text-[#8DB600] text-sm mt-1 font-semibold flex items-center gap-1">
                      <ShieldCheck size={14} /> 24/7 Emergency Pest Control
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin size={20} className="text-[#8DB600]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-semibold mb-1">Service Coverage</p>
                    <p className="text-base text-gray-200 leading-relaxed">
                      Kilimani, Kileleshwa, Lavington, Rongai, Eastleigh, South B/C, Katani, Athi River, Kitengela & Nairobi Environs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="w-full lg:w-3/5 p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <SuccessMessage state={state} />

            <form action={formAction} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:bg-white transition-all outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:bg-white transition-all outline-none"
                    placeholder="+254 7XX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">Neighborhood / Area</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:bg-white transition-all outline-none"
                    placeholder="e.g., Kilimani, Kitengela..."
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Needed <span className="text-red-500">*</span></label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:bg-white transition-all outline-none appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service...</option>
                    <optgroup label="Cleaning Services">
                      <option value="sofa cleaning">Sofa Cleaning</option>
                      <option value="carpet cleaning">Carpet Cleaning</option>
                      <option value="office cleaning">Commercial/Office Cleaning</option>
                      <option value="mattress cleaning">Mattress Deep Clean</option>
                      <option value="car interior">Car Interior Detailing</option>
                      <option value="post construction">Post-Construction Cleanup</option>
                      <option value="laundry">Laundry & Dry Cleaning</option>
                    </optgroup>
                    <optgroup label="Pest Control">
                      <option value="bedbugs">Bedbug Eradication</option>
                      <option value="cockroaches">Cockroach Control</option>
                      <option value="mosquitoes">Mosquito Treatment</option>
                      <option value="fleas">Flea & Tick Control</option>
                      <option value="termites">Termite Elimination</option>
                      <option value="rats">Rodent/Rat Control</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">How can we help you?</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:bg-white transition-all outline-none resize-y"
                  placeholder="Describe your cleaning or pest control needs..."
                ></textarea>
              </div>

              {/* Bot Protection: Google reCAPTCHA v2 */}
              <div className="flex flex-col items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                <span className="text-sm font-semibold text-gray-700 mb-3">Security Check</span>
                <ReCAPTCHA
                  sitekey="6Lc4u58sAAAAAFLZ5fxGl1R6YcbtGzy8V9rkHeTZ" // <-- REPLACE THIS WITH YOUR REAL SITE KEY
                  onChange={onCaptchaChange}
                />
                {/* Hidden input to pass the token to your Server Action */}
                <input type="hidden" name="g-recaptcha-response" value={captchaToken || ''} />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={!captchaToken}
                className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform ${
                  captchaToken 
                    ? 'bg-[#8DB600] hover:bg-[#7a9e00] text-white hover:-translate-y-0.5 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send size={20} />
                {captchaToken ? 'Request Free Quote' : 'Please complete the Captcha'}
              </button>

              <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-[#008080]" />
                Your information is securely encrypted and will not be shared.
              </p>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}