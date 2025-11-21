import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Refund & Cancellation Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: November 21, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Performance Guarantee</h2>
            <p>At Introscale, we stand behind our service with a strict performance guarantee. Our "0% Risk Guarantee" states that if we do not deliver the promised number of booked estimates within the agreed-upon timeframe (typically 30 days), you are eligible for a full refund of your service fee.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Refund Eligibility</h2>
            <p>To be eligible for a refund under our performance guarantee:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You must have onboarded and launched the system as instructed.</li>
              <li>You must have attended scheduled check-in calls.</li>
              <li>You must have responded to leads/appointments in a timely manner as per our training.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation</h2>
            <p>You may cancel your service at any time. There are no long-term lock-in contracts. To cancel, simply notify us in writing at least 3 days before your next billing cycle to avoid being charged for the subsequent month.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Processing Refunds</h2>
            <p>Approved refunds are processed within 5-7 business days and will be returned to the original payment method used. Banks may take additional time to reflect the transaction in your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions concerning our return policy, please contact us at: info@introscale.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
