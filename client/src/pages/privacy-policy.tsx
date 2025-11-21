import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="mb-4 text-sm text-gray-500">Last Updated: October 31, 2025</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to IntroScale ("we," "us," "our"). This Privacy Policy describes how and why we might collect, store, use, and/or share ("process") your information when you use our marketing services ("Services").</p>
            <p className="mt-2">This includes when you:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Visit our website at https://introscale.com/ or any website of ours that links to this privacy notice.</li>
              <li>Engage with us as a business client and purchase our marketing services.</li>
              <li>Interact with our marketing campaigns (e.g., on social media or search engines) and provide your information as a potential customer for our clients.</li>
              <li>Engage with us in other related ways, including sales or events.</li>
            </ul>
            <p className="mt-2">This Privacy Policy applies to personal information related to our business clients (e.g., pressure washing companies) and their authorized users (collectively, "Clients") and to the personal information of their potential customers ("End-Customers" or "Leads") that we collect through our marketing activities to provide to our Clients.</p>
            <p className="mt-2">Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@introscale.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
            <ul className="space-y-2">
              <li><strong>Client:</strong> The pressure washing business or other entity that purchases and uses our marketing Services.</li>
              <li><strong>End-Customer (or Lead):</strong> An individual who expresses interest in our Client's services through our marketing campaigns (e.g., by filling out a lead form on one of our landing pages).</li>
              <li><strong>Personal Information:</strong> Any information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular individual or household. This is synonymous with "Personal Data" under various regulations.</li>
              <li><strong>Data Fiduciary / Data Controller:</strong> The entity that, alone or jointly with others, determines the purposes and means of the processing of Personal Information. For the purposes of this policy, IntroScale is the Data Fiduciary/Controller of both Client Personal Information and End-Customer Personal Information.</li>
              <li><strong>Data Principal / Data Subject:</strong> The individual to whom the Personal Information relates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect and How We Collect It</h2>
            <p>We collect Personal Information from different sources and in different ways.</p>
            
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-bold text-white">3.1. Information You (Our Client) Provide to Us</h3>
                <p>When you purchase our Services, create an account, or communicate with us, you voluntarily provide us with Personal Information. This may include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Contact and Identity Data: Your first and last name, email address, phone number, company name, and job title.</li>
                  <li>Account Credentials: Your username, password, and similar security information used for authentication and account access (if a client portal is provided).</li>
                  <li>Payment Information: Credit card details or other payment information required to process your payments for our Services. This information is typically collected and processed directly by our third-party payment processors.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white">3.2. Information We Collect from End-Customers (Leads)</h3>
                <p>When an End-Customer interacts with our marketing campaigns (e.g., on social media, search engines) and voluntarily visits our landing pages, we collect the Personal Information they provide to us. This information includes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>End-Customer Contact Data: Name, email address, phone number.</li>
                  <li>Service Request Data: Address of the service location, date and time preferences, and notes or details related to the service requested (e.g., "driveway cleaning").</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white">3.3. Information Collected Automatically</h3>
                <p>When you (whether a Client or End-Customer) visit, use, or navigate our website or landing pages, we may automatically collect certain information. This information does not reveal your specific identity but may include device and usage information. This includes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Device and Connection Information: Your IP address, browser type and version, device characteristics, operating system, and language preferences.</li>
                  <li>Usage Information: Information about how you use our Services, such as the pages you visit, the features you use, and the dates and times of your access.</li>
                  <li>Cookies and Similar Technologies: We use cookies to collect and store your information. Please see our Cookie Policy (Section 11) for more details.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How and Why We Use Your Information</h2>
            <p>We process your information for specific, explicit, and legitimate purposes.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>To Provide and Manage the Services:</strong> We use Client Personal Information to create and manage your account, process payments, deliver our marketing services, and provide customer support.</li>
              <li><strong>To Generate and Provide Leads to our Clients:</strong> We use End-Customer Personal Information to qualify them as a lead and to transfer this information (e.g., their name, phone number, and service request) to our Client (the pressure washing business) so the Client can contact them to provide a quote and schedule an appointment.</li>
              <li><strong>To Communicate with You (Our Client):</strong> We may use your contact information to send you administrative information, such as updates to our terms, security alerts, and support messages.</li>
              <li><strong>For Analytics and Service Improvement:</strong> We analyze usage data to understand how our websites are used, to improve their functionality, and to develop new features.</li>
              <li><strong>For Marketing and Promotional Communications:</strong> With your consent, we may send you (our Clients) marketing communications about our products and services. You may opt-out of these communications at any time.</li>
              <li><strong>To Comply with Legal Obligations:</strong> We may process your information to comply with applicable laws, respond to lawful requests, and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Our Legal Bases for Processing</h2>
            <p>We only process your Personal Information when we have a valid legal basis to do so.</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Performance of a Contract:</strong> We process Client Personal Information to fulfill our contractual obligations to provide the marketing Services you have purchased.</li>
              <li><strong>Consent:</strong> We rely on consent to process End-Customer Personal Information via our lead forms. We also rely on your (our Client's) consent for marketing purposes and for non-essential cookies. Under India's DPDP Act, consent must be free, specific, informed, and unambiguous with a clear affirmative action. You have the right to withdraw your consent at any time.</li>
              <li><strong>Legitimate Interests:</strong> We may process your information for our legitimate business interests, such as for service improvement and security, provided that your rights do not override those interests.</li>
              <li><strong>Legal Obligation:</strong> We may process your information where necessary for compliance with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Disclosure and Sharing of Information</h2>
            <p>We do not sell your Personal Information. We only share your information in the following situations:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>To Our Clients:</strong> The primary purpose of our service is to collect End-Customer Personal Information (leads) and share it with our Clients (the service providers) so they can follow up and provide a quote or service.</li>
              <li><strong>Service Providers:</strong> We may share Personal Information with third-party vendors and service providers who perform services for us. Examples include cloud hosting providers, payment processors, and communication platforms for sending emails. We have contractual agreements in place to ensure they protect your information.</li>
              <li><strong>Business Transfers:</strong> We may share your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or legal process.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. International Transfer of Personal Information</h2>
            <p>Our company is based in India. If you are accessing our Services or marketing forms from the United States or Canada, your Personal Information will be transferred to, stored, and processed in India.</p>
            <p className="mt-2">We have taken appropriate safeguards to require that your Personal Information will remain protected in accordance with this Privacy Policy and applicable law. For transfers of Personal Information from Canada, we ensure a comparable level of protection through contractual or other means, in compliance with PIPEDA.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Security, Integrity, and Retention</h2>
            <p>We have implemented appropriate technical and organizational security measures to protect the Personal Information we process. However, no electronic transmission over the Internet can be guaranteed to be 100% secure.</p>
            <p className="mt-2">We will only keep your Personal Information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required by law. When we have no ongoing legitimate business need to process your Personal Information, we will either delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Your Privacy Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your Personal Information under applicable laws. These may include the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to and obtain a copy of your Personal Information.</li>
              <li>Request correction of any inaccurate or incomplete Personal Information.</li>
              <li>Request erasure (or deletion) of your Personal Information.</li>
              <li>Withdraw your consent at any time.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, please contact us using the details provided below. We will respond to your request in accordance with applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Region-Specific Disclosures</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white">10.1. For Residents of California (USA)</h3>
                <p>This section supplements our Privacy Policy and applies solely to residents of California. We adopt this notice to comply with the California Consumer Privacy Act (CCPA) as amended by the CPRA.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Your Rights:</strong> You have the right to know what personal information is collected, to delete personal information, to correct inaccurate personal information, to opt-out of the "sale" or "sharing" of your personal information, and to limit the use of sensitive personal information.</li>
                  <li><strong>No Sale or Sharing:</strong> We do not "sell" or "share" your personal information as those terms are defined under the CCPA.</li>
                  <li><strong>Notice at Collection:</strong> The categories of personal information we have collected, the sources, and the purposes for use are described in Section 3 and Section 4 of this Policy.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white">10.2. For Residents of Canada</h3>
                <p>This section applies to individuals in Canada whose personal information we collect. We adopt this notice to comply with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Your Rights:</strong> You have the right to access your personal information held by us, request correction of any inaccuracies, and challenge our compliance with PIPEDA's Fair Information Principles.</li>
                  <li><strong>Accountability:</strong> We are responsible for all personal information under our control, including information transferred to a third party. We have designated a Privacy Officer accountable for our compliance.</li>
                  <li><strong>Consent:</strong> We will obtain your meaningful consent for the collection, use, and disclosure of your personal information.</li>
                  <li><strong>Cross-Border Transfers:</strong> As stated in Section 7, your personal information may be transferred to and processed in India. While we use contractual means to provide a comparable level of protection, your information may be subject to the laws of India.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Cookie Policy</h2>
            <p>We use cookies and similar tracking technologies. A cookie is a small text file placed on your device. We use them to operate and secure our Services, remember your preferences, and analyze website traffic. You can set your browser to refuse all or some cookies. If you disable cookies, some parts of our Services may not function properly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Children's Privacy</h2>
            <p>Our Services are not directed to children under the age of 13 (or 18 for consent under India's DPDP Act). We do not knowingly collect Personal Information from children.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. The updated version will be indicated by a "Last Updated" date. We encourage you to review this privacy notice frequently.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. How to Contact Us</h2>
            <p>If you have questions or comments about this notice, or if you would like to exercise your privacy rights, you may contact our designated Privacy Officer at:</p>
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
