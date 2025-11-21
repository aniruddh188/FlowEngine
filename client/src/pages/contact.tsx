import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans text-gray-300">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400">
            We’d love to hear from you! Reach out to us using any of the options below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">info@introscale.com</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+1 415-941-3717</p>
            <p className="text-gray-400">+91 7016658905</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Address</h3>
            <p className="text-gray-400">RAJPUT FALIYU, Bordi, Kharol</p>
            <p className="text-gray-400">Panchmahals, Gujarat, India - 389220</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400 mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
            <p className="text-gray-400">Monday – Friday</p>
            <p className="text-gray-400">10:00 AM – 6:00 PM IST</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Business Inquiries</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            If you’re interested in our lead generation or marketing automation services, email <a href="mailto:info@introscale.com" className="text-blue-400 hover:underline">info@introscale.com</a> and we will respond within 24 hours.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
