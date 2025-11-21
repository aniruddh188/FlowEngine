import { MapPin, Smartphone, Bot, CalendarCheck } from "lucide-react";
import textureBg from "@assets/generated_images/abstract_clean_water_texture_background.png";

export function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Hyper-Local Targeting",
      desc: "We launch ad campaigns (Facebook, Google) in a 10-15 mile radius of your service area, targeting homeowners actively looking for pressure washing."
    },
    {
      icon: Smartphone,
      title: "Instant Lead Capture",
      desc: "Leads are sent to a high-converting landing page. The moment they submit info, our system engages them via Call, SMS & email in under 60 seconds."
    },
    {
      icon: Bot,
      title: "AI Nurture & Qualify",
      desc: "Our automated system follows up, answers FAQs, and qualifies the lead, filtering out tire-kickers so you only talk to serious buyers."
    },
    {
      icon: CalendarCheck,
      title: "Auto-Booked Appointment",
      desc: "Qualified leads are sent a link to your calendar. They book a time, and it appears on your schedule. No chasing, no phone tag."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src={textureBg} alt="Texture" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">THE 4-STEP INTROSCALE ENGINE</h2>
          <p className="text-lg text-gray-600">Our entire process is automated and managed for you. You only get involved when a new appointment appears in your calendar.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute top-0 left-6 w-px h-full bg-gray-200 -z-10 md:hidden"></div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-200 -z-10"></div>
              )}

              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full relative">
                <div className="w-16 h-16 bg-primary text-secondary rounded-lg flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 -z-10 select-none font-heading opacity-50">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-primary">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
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
