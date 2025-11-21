import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: October 31, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client," "you") and IntroScale ("Company," "we," "us," or "our"), concerning your access to and use of the IntroScale marketing services (collectively, the "Services").</p>
            <p className="mt-2">By creating an account, clicking "I Agree," signing a service agreement, or by accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the Services and you must discontinue use immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
            <p>We provide digital marketing and lead generation services for businesses. These Services may include, but are not limited to, running advertising campaigns, creating landing pages, managing client communications, and generating potential customer leads ("Leads"). We will use commercially reasonable efforts to provide the Services as described in your selected service plan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Registration</h2>
            <p>To use the Services (including any client portal), you may be required to register for an account. You agree to provide and maintain true, accurate, current, and complete information about yourself as prompted by the registration form. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Plans, Fees, and Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">4.1. Service Plans:</h3>
                <p>The Services are provided on a recurring basis for the term specified in your selected plan ("Service Term").</p>
              </div>
              <div>
                <h3 className="font-bold text-white">4.2. Fees:</h3>
                <p>You agree to pay all fees specified in your selected service plan ("Service Fees"). All fees are non-cancelable and non-refundable, except as expressly stated in these Terms. Service Fees are based on the services purchased and not actual usage.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">4.3. Billing and Payment:</h3>
                <p>Service Fees are billed in advance on a recurring basis (e.g., monthly or annually). You must provide us with a valid credit card or other payment method acceptable to us. You authorize us to charge such payment method for all applicable fees.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">4.4. Non-Payment:</h3>
                <p>If any fees are not received from you by the due date, then at our discretion, we may suspend your access to the Services until all overdue amounts are paid in full.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use Policy</h2>
            <p>You agree not to use the Services (including any client portal) to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Upload, post, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
              <li>Violate any applicable local, state, national, or international law.</li>
              <li>Transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
              <li>Engage in any activity that interferes with or disrupts the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">6.1. Our Intellectual Property:</h3>
                <p>We own all right, title, and interest in and to the Services, including all underlying technology, software, marketing strategies, ad copy, creative, and campaign structures created by us ("Service IP"). We grant you a limited, non-exclusive, non-transferable license to access and use any provided client portal during your Service Term solely for your internal business purposes.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">6.2. Client Materials:</h3>
                <p>You retain all right, title, and interest in and to the data, logos, trademarks, and other materials you provide to us ("Client Materials"). You grant us a worldwide, limited-term license to host, copy, transmit, display, and use Client Materials as reasonably necessary for us to provide the Services in accordance with these Terms.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">6.3. Lead Data:</h3>
                <p>As part of the Services, we will collect data from End-Customers (Leads) and provide this data to you. Upon your full payment for the Services, you may use this Lead Data for your internal business purposes, subject to Section 7 of these Terms and our Privacy Policy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Client Responsibilities and Data Privacy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">7.1. Responsibility for Client Materials and Use of Leads:</h3>
                <p>You are solely responsible for the accuracy, quality, and legality of your Client Materials. You represent and warrant that you have all necessary rights to provide the Client Materials to us for use in the Services. You further agree that you are solely responsible for your use of the Lead Data provided by us. You represent and warrant that you will comply with all applicable laws in your communications with Leads, including, but not limited to, the Telephone Consumer Protection Act (TCPA).</p>
              </div>
              <div>
                <h3 className="font-bold text-white">7.2. Privacy and Data Use:</h3>
                <p>Our collection and use of Personal Information (of both Clients and End-Customers) is governed by our Privacy Policy, which is incorporated into these Terms. We will collect Lead Data as a Data Fiduciary/Controller in accordance with our Privacy Policy. When we provide this Lead Data to you, you become a separate and independent Data Fiduciary/Controller of that data. You are solely responsible for ensuring your use, storage, and processing of that Lead Data complies with all applicable privacy laws.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
            <p>Each party agrees to treat as confidential all information obtained from the other party that is marked as "Confidential" or that reasonably should be understood to be confidential. Each party agrees not to disclose such information to any third party without the prior written consent of the other party, except as required by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Term, Termination, and Suspension</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">9.1. Term:</h3>
                <p>These Terms commence on the date you first accept them and continue for the duration of your Service Term. Service Terms will automatically renew for additional periods equal to the expiring Service Term unless either party gives the other notice of non-renewal at least thirty (30) days before the end of the relevant Service Term.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">9.2. Termination for Cause:</h3>
                <p>A party may terminate these Terms for cause upon thirty (30) days written notice to the other party of a material breach if such breach remains uncured at the expiration of such period.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">9.3. Effect of Termination:</h3>
                <p>Upon termination, your right to use the Services will immediately cease. We will have no obligation to maintain or provide any of your data and may thereafter delete all of your data in our systems.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers and Limitation of Liability</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">10.1. Disclaimer of Warranties:</h3>
                <p className="uppercase">THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE ANY SPECIFIC RESULTS, NUMBER OF LEADS, OR REVENUE FROM THE USE OF OUR SERVICES.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">10.2. Limitation of Liability:</h3>
                <p className="uppercase">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS EXCEED THE TOTAL AMOUNT PAID BY YOU HEREUNDER IN THE TWELVE (12) MONTHS PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE. THE FOREGOING LIMITATION WILL APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold us harmless from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of the Services in violation of these Terms; (b) your Client Materials, including any claim that your Client Materials infringe or violate the rights of a third party; or (c) your use of Lead Data in violation of any applicable law (including privacy or telemarketing laws).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Dispute Resolution</h2>
            <p>These Terms and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles. The parties irrevocably agree that the courts of Panchmahals District, Gujarat, India shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. General Provisions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">13.1. Entire Agreement:</h3>
                <p>These Terms, including the Privacy Policy, constitute the entire agreement between you and us and supersede all prior agreements.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">13.2. Severability:</h3>
                <p>If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full force and effect.</p>
              </div>
              <div>
                <h3 className="font-bold text-white">13.3. No Waiver:</h3>
                <p>The failure by either party to enforce any provision of these Terms will not constitute a waiver of future enforcement of that or any other provision.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
