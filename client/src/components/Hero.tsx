import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "@assets/generated_images/professional_pressure_washing_action_shot_for_hero_section.png";

export function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image with Heavy Overlay for Dark Theme */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Pressure Washing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Accepting New Partners for Q4
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Your Predictable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Job Flow Engine
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              We help pressure washing businesses get an extra predictable flow of qualified, booked estimates to their calendar within 30 days.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <Button 
                onClick={scrollToBooking}
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-7 rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all group"
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-white font-semibold">20+ owners trust us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
