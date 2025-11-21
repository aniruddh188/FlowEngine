import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: November 21, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Introscale ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@introscale.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Name and Contact Data (email address, phone number, etc.)</li>
              <li>Business Information (company name, website, etc.)</li>
              <li>Payment Data (processed securely by our payment processors)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide and deliver the services you request.</li>
              <li>To send you administrative information.</li>
              <li>To protect our Services.</li>
              <li>To enforce our terms, conditions, and policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at info@introscale.com.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
