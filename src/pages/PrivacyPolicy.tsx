
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-2xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="mb-12">
                <p className="text-gray-600">
                  Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6">1. Introduction</h2>
              <p>
                Aertifact Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our authentication services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-4">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you register for our services, express interest in obtaining information about us or our products and services, participate in activities on the services, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Name and contact information</li>
                <li>Billing information and transaction details</li>
                <li>Account credentials</li>
                <li>Business information</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">2.2 Authentication Data</h3>
              <p>
                When using our authentication services, we collect data related to the items being authenticated, including but not limited to:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Physical characteristics of items</li>
                <li>Images and scans</li>
                <li>Serial numbers and identifiers</li>
                <li>Provenance and ownership history</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">2.3 Automatically Collected Information</h3>
              <p>
                When you visit our website or use our applications, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Time spent on pages</li>
                <li>Pages visited</li>
                <li>Referring website addresses</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Providing, operating, and maintaining our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Authenticating and verifying collectibles</li>
                <li>Creating and maintaining blockchain records of authentication</li>
                <li>Improving our services and user experience</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Sending you technical notices and support messages</li>
                <li>Marketing and promotional communications (with your consent)</li>
                <li>Protecting our rights and preventing fraud</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">4. Disclosure of Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Service providers who assist us in operating our business</li>
                <li>Business partners with your consent</li>
                <li>In response to legal process or government request</li>
                <li>To protect our rights, privacy, safety or property</li>
                <li>In connection with a business transaction such as a merger or acquisition</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Right to access your personal information</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to erasure of your information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">8. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-6">
                Aertifact Inc.<br />
                100 Innovation Way<br />
                New York, NY 10001<br />
                Email: privacy@aertifact.com<br />
                Phone: (813) 563-5787
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
