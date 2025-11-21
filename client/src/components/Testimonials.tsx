import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

function getRandomTimeframe() {
  const timeframes = [
    "2 weeks ago",
    "1 month ago",
    "2 months ago",
    "3 months ago",
    "4 months ago",
    "5 months ago",
    "6 months ago"
  ];
  return timeframes[Math.floor(Math.random() * timeframes.length)];
}

const testimonials = [
  {
    name: "David Martinez",
    company: "BrightClean Exteriors",
    review: "Our revenue increased by over $6,000 in the first month from the jobs Introscale sent us. The ROI is a no-brainer.",
    image: "/owner1.png",
    logo: "/brightclean-exteriors.png"
  },
  {
    name: "Michael Roberts",
    company: "Spotless Exterior",
    review: "We went from unpredictable referrals to 18 high-quality booked jobs in just 4 weeks. The system just works.",
    image: "/owner2.png",
    logo: "/spotless-exterior.png"
  },
  {
    name: "Matthew Lewis",
    company: "Crystal Clean Wash",
    review: "The quality of the jobs is what impressed me most. We're getting high-ticket clients who are ready to buy, not price shoppers.",
    image: "/owner3.png",
    logo: "/crystal-clean-wash.png"
  },
  {
    name: "Kevin Peterson",
    company: "ProShine Services",
    review: "I've gotten back 10+ hours a week because I no longer have to chase dead-end leads. I just wake up to confirmed bookings.",
    image: "/owner4.png",
    logo: "/proshine-services.png"
  },
  {
    name: "Jacob Phillips",
    company: "Diamond Clean",
    review: "The feast-or-famine cycle is over. Having a consistent $5,000+ in extra revenue each month has brought incredible financial stability to my business.",
    image: "/owner5.png",
    logo: "/diamond-clean.png"
  },
  {
    name: "Johnathan Miller",
    company: "CleanPro Washers",
    review: "Within 4 weeks, Introscale booked 16 new Appointments directly into my calendar. It's like having a marketing team that handles everything for you.",
    image: "/owner6.png",
    logo: "/cleanpro-washers.png"
  },
  {
    name: "Alex Rodriguez",
    company: "ShinePro Cleaning",
    review: "The consistent flow of jobs gave us the revenue to hire another technician and buy a second rig. We're finally scaling.",
    image: "/owner7.png",
    logo: "/shinepro-cleaning.png"
  },
  {
    name: "Oliver James",
    company: "FreshStart Power Wash",
    review: "I was a one-man show, but the 18 jobs we got last month meant I could finally hire my first employee. We're growing faster than I ever thought possible.",
    image: "/owner8.png",
    logo: "/freshstart-power-wash.png"
  },
  {
    name: "David Chen",
    company: "Sparkle Wash Pros",
    review: "The best part is the predictability. I know my schedule will be full every month, which has completely removed the stress of running my business.",
    image: "/owner9.png",
    logo: "/sparkle-wash-pros.png"
  },
  {
    name: "Ethan Thomas",
    company: "Fresh Wash Co.",
    review: "I was skeptical of the promise, but we got 19 booked appointments in the first 30 days. This is the real deal.",
    image: "/owner10.png",
    logo: "/fresh-wash-co.png"
  },
  {
    name: "Samuel Peterson",
    company: "Pristine Power Wash",
    review: "The process is completely hands-off. We got 12 new clients in the first month without lifting a finger. A total game changer for our business.",
    image: "/owner11.png",
    logo: "/pristine-power-wash.png"
  },
  {
    name: "Daniel White",
    company: "AquaBlast Exteriors",
    review: "It's the definition of 'done for you.' We don't see leads or make calls. We just see confirmed appointments appear on our calendar.",
    image: "/owner12.png",
    logo: "/aquablast-exteriors.png"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results</h2>
          <p className="text-xl text-gray-400 mb-6">
            Hear from pressure washing owners just like you who are no longer stuck in the "Technician's Trap."
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">4.8</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">20+ reviews on</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path className="fill-green-500" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-400 text-xs font-semibold">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="flex overflow-hidden select-none mask-gradient">
        <div className="flex animate-scroll gap-6 py-4 px-4">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[400px] shrink-0 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Logo */}
                <div className="w-16 h-16 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                  <img src={t.logo} alt={t.company} className="w-full h-full object-cover scale-125" />
                </div>
                
                {/* Company name and stars */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-white">{t.company}</h4>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{getRandomTimeframe()}</p>
                </div>
              </div>
             
              <p className="text-gray-300 mb-8 leading-relaxed text-lg italic flex-grow">"{t.review}"</p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border border-white/10 shrink-0">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-bold">${t.name[0]}</span>`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
