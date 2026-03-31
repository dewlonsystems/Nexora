// src/app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        
        <p className="text-gray-700 mb-6">
          Last updated: January 17, 2026
        </p>

        <p className="text-gray-700 mb-6">
          At Sipedo Services ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for services.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect the following information:
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Contact details (name, phone number, email address)</li>
          <li>Service requirements and property details</li>
          <li>Device and usage data (IP address, browser type, pages visited)</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-6">
          We use your information to:
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Respond to your inquiries and provide quotes</li>
          <li>Schedule and deliver cleaning or pest control services</li>
          <li>Improve our website and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Data Sharing</h2>
        <p className="text-gray-700 mb-6">
          We do not sell or rent your personal information. We may share it only with:
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Our field technicians (for service delivery only)</li>
          <li>Legal authorities if required by law</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-6">
          You have the right to:
        </p>
        <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Contact us with privacy concerns</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-700">
          For questions about this policy, email us at: <strong>info@sipedo.co.ke</strong>
        </p>
      </div>
    </div>
  );
}