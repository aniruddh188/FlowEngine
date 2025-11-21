import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Refund & Cancellation Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: November 4, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p>At Introscale, we are committed to delivering high-quality, performance-based digital marketing services. This Refund & Cancellation Policy outlines the terms under which you may request a refund or cancel your subscription.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Refund Eligibility</h2>
            <p>Refunds are applicable only under the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>If we fail to deliver the number of qualified, booked appointments as outlined in your service agreement.</li>
              <li>If a duplicate payment was made due to a technical error.</li>
              <li>If the service was purchased but never initiated due to internal reasons on our part.</li>
            </ul>
            <p className="mt-2">Refunds are not applicable for partial service usage, client-side delays, or performance beyond our control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Refund Process</h2>
            <p>To request a refund, please email info@introscale.com with your campaign details and results summary. Once your request is verified, approved refunds will be processed within 7–10 business days to the original payment method.</p>
            <p className="mt-2">Cancellations made before campaign launch are eligible for a full refund. Cancellations made after launch but before 30 days are not eligible, as the service is already in execution.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cancellation Policy</h2>
            <p>Clients may cancel their service subscription with a 30-day written notice before the next billing cycle. Cancellations made after renewal will take effect in the next cycle.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Exceptions</h2>
            <p>No refunds will be issued once the guaranteed results have been achieved, or if campaign data shows leads were generated as per service commitments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>If you have any questions about our refund or cancellation process, please contact us at:</p>
            <ul className="mt-2 space-y-1">
              <li>Email: info@introscale.com</li>
              <li>Phone: +1 415-941-3717 / +91 7016658905</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
