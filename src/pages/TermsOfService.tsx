
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="bg-gradient-blue text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our platform
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
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement made between you and Aertifact Inc. ("we," "us," or "our"), concerning your access to and use of our website and authentication services. By accessing our website or using our services, you agree to these Terms. If you disagree with any part of the Terms, you may not access the website or use our services.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">2. Description of Services</h2>
              <p>
                Aertifact provides blockchain-powered authentication and provenance tracking services for high-value collectibles. Our services include, but are not limited to:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Authentication of collectibles using RFID/NFC technology</li>
                <li>AI-powered physical characteristic analysis</li>
                <li>Blockchain-based provenance tracking</li>
                <li>API access for integration with third-party platforms</li>
                <li>Authentication certificates and documentation</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. You are solely responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account.
              </p>
              <p>
                You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss that you may incur as a result of someone else using your password or account, either with or without your knowledge.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">4. Authentication Services</h2>
              <h3 className="text-xl font-semibold mb-4">4.1 Submission of Items</h3>
              <p>
                When submitting items for authentication, you represent and warrant that you either own the item or have the legal right to submit it for authentication. You also warrant that all information provided about the item is accurate to the best of your knowledge.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">4.2 Authentication Results</h3>
              <p>
                While we employ advanced technology and expert analysis, we cannot guarantee with absolute certainty the authenticity of every item. Our authentication services provide a professional assessment based on available data and technology. The final authentication determination is provided on an "as is" basis.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">4.3 Blockchain Records</h3>
              <p>
                Information about authenticated items may be recorded on a blockchain. These records are designed to be permanent and immutable. You acknowledge that once information is recorded on the blockchain, it may not be possible to remove or alter it.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">5. Fees and Payment</h2>
              <p>
                We charge fees for our authentication services. All fees are as quoted on our website or as agreed upon in writing. Prices are subject to change. Payment terms are as specified at the time of purchase. You agree to provide current, complete, and accurate purchase and account information.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">6. Intellectual Property</h2>
              <p>
                The website, its original content, features, and functionality are owned by Aertifact Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Aertifact Inc.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">7. Limitation of Liability</h2>
              <p>
                In no event shall Aertifact Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Your access to or use of or inability to access or use the services</li>
                <li>Any authentication determination made through our services</li>
                <li>Any conduct or content of any third party on the services</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">8. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Aertifact Inc. and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of:
              </p>
              <ul className="list-disc ml-6 mb-6">
                <li>Your use and access of the services</li>
                <li>Your violation of any term of these Terms</li>
                <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                <li>Any claim that your use of the services has caused damage to a third party</li>
              </ul>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-display font-bold text-aertifact-blue mb-6 mt-12">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-6">
                Aertifact Inc.<br />
                100 Innovation Way<br />
                New York, NY 10001<br />
                Email: legal@aertifact.com<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
