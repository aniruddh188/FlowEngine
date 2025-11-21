import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex flex-col items-center mb-12">
          <span className="font-heading text-2xl font-bold text-white tracking-tight mb-6">INTROSCALE</span>
          <p className="max-w-sm leading-relaxed text-gray-500 mb-8">
            We help pressure washing businesses scale with predictable job flow. Stop chasing leads and start booking jobs.
          </p>
        </div>

        <div className="border-t border-white/5 pt-8 text-sm text-gray-600 flex flex-col items-center gap-6">
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p>© 2025 Introscale. All rights reserved.</p>
            <p className="text-xs max-w-lg">This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any way.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
