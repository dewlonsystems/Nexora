// src/app/terms/page.tsx
export default function TermsOfServicePage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        
        <p className="text-gray-700 mb-6">
          Last updated: January 17, 2026
        </p>

        <p className="text-gray-700 mb-6">
          These Terms of Service ("Terms") govern your use of Sipedo Services' website and services. By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Services Provided</h2>
        <p className="text-gray-700 mb-6">
          Sipedo Services offers professional cleaning and pest control services in Nairobi and surrounding areas. All services are subject to availability and site assessment.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Booking & Payment</h2>
        <p className="text-gray-700 mb-6">
          - Quotes are free and non-binding.<br/>
          - Payment is due upon completion of service unless otherwise agreed.<br/>
          - We accept cash, M-Pesa, and bank transfer.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Cancellations</h2>
        <p className="text-gray-700 mb-6">
          - Cancellations made less than 24 hours before scheduled service may incur a 50% fee.<br/>
          - No-shows will be charged 100% of the quoted amount.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-6">
          While we take every care, Sipedo Services is not liable for:
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Pre-existing damage not reported before service</li>
          <li>Items not pointed out for special handling</li>
          <li>Indirect or consequential losses</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Satisfaction Guarantee</h2>
        <p className="text-gray-700 mb-6">
          We guarantee 100% satisfaction. If you’re not happy, notify us within 24 hours for a re-clean or refund (at our discretion).
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Governing Law</h2>
        <p className="text-gray-700 mb-6">
          These Terms are governed by the laws of Kenya. Any disputes will be resolved in Nairobi courts.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contact</h2>
        <p className="text-gray-700">
          Questions? Reach us at: <strong>info@sipedo.co.ke</strong> or +254 725 398 764.
        </p>
      </div>
    </div>
  );
}