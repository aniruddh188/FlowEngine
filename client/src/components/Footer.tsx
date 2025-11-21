import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-secondary rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-wider">INTROSCALE</span>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">
              We help pressure washing businesses scale with predictable job flow. Stop chasing leads and start booking jobs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>info@introscale.com</li>
              <li>+1 415 941 3717</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-xs text-center text-gray-600">
          <p className="mb-2">© 2025 Introscale. All rights reserved.</p>
          <p>This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any way.</p>
        </div>
      </div>
    </footer>
  );
}
