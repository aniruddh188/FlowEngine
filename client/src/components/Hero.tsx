import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/professional_pressure_washing_action_shot_for_hero_section.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Pressure Washing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-secondary/20 border border-secondary text-secondary font-bold text-sm uppercase tracking-widest mb-6 rounded-sm">
              For Pressure Washing Business Owners
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              YOUR PREDICTABLE <span className="text-secondary">JOB FLOW ENGINE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We help pressure washing businesses get an extra predictable flow of qualified, booked estimates to their calendar within 30 days using our Battle Tested System or you get your money back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 font-bold uppercase tracking-wide rounded-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
                Book Your Free Strategy Call
              </Button>
              <div className="flex items-center gap-2 text-white/80 px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Accepting New Partners for Q4</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
