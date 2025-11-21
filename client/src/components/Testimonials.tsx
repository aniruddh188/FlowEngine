import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Martinez",
    company: "BrightClean Exteriors",
    review: "Our revenue increased by over $6,000 in the first month from the jobs Introscale sent us. The ROI is a no-brainer.",
    time: "1 month ago"
  },
  {
    name: "Michael Roberts",
    company: "Spotless Exterior",
    review: "We went from unpredictable referrals to 18 high-quality booked jobs in just 4 weeks. The system just works.",
    time: "2 months ago"
  },
  {
    name: "Matthew Lewis",
    company: "Crystal Clean Wash",
    review: "The quality of the jobs is what impressed me most. We're getting high-ticket clients who are ready to buy, not price shoppers.",
    time: "3 months ago"
  },
  {
    name: "Kevin Peterson",
    company: "ProShine Services",
    review: "I've gotten back 10+ hours a week because I no longer have to chase dead-end leads. I just wake up to confirmed bookings.",
    time: "4 months ago"
  },
  {
    name: "Jacob Phillips",
    company: "Diamond Clean",
    review: "The feast-or-famine cycle is over. Having a consistent $5,000+ in extra revenue each month has brought incredible financial stability to my business.",
    time: "5 months ago"
  },
  {
    name: "Johnathan Miller",
    company: "CleanPro Washers",
    review: "Within 4 weeks, Introscale booked 16 new Appointments directly into my calendar. It's like having a marketing team that handles everything for you.",
    time: "6 months ago"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">DON'T TAKE OUR WORD FOR IT</h2>
          <p className="text-xl text-gray-400">
            Hear from pressure washing owners just like you who are no longer stuck in the "Technician's Trap."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.review}"</p>
              <div className="flex items-center gap-3 mt-auto border-t border-white/10 pt-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-secondary uppercase tracking-wider font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
