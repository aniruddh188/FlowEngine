import { MapPin, Smartphone, Bot, CalendarCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Hyper-Local Targeting",
      desc: "We launch ad campaigns (Facebook, Google) in a 10-15 mile radius of your service area."
    },
    {
      icon: Smartphone,
      title: "Instant Lead Capture",
      desc: "Leads are engaged via Call, SMS & email in under 60 seconds the moment they sign up."
    },
    {
      icon: Bot,
      title: "AI Nurture & Qualify",
      desc: "Our system filters out tire-kickers so you only talk to serious buyers ready to book."
    },
    {
      icon: CalendarCheck,
      title: "Auto-Booked Appointment",
      desc: "Qualified leads book a time on your calendar. No chasing, no phone tag."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Introscale Engine</h2>
          <p className="text-xl text-gray-400">Our entire process is automated. You only get involved when a new appointment appears.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-white/20 to-transparent -z-10"></div>
              )}

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 duration-300 h-full backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-xs font-bold text-blue-400 mb-3 uppercase tracking-widest">Step 0{index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
