import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Martinez",
    company: "BrightClean Exteriors",
    review: "Our revenue increased by over $6,000 in the first month. The ROI is a no-brainer.",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Michael Roberts",
    company: "Spotless Exterior",
    review: "We went from unpredictable referrals to 18 high-quality booked jobs in just 4 weeks.",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Matthew Lewis",
    company: "Crystal Clean Wash",
    review: "We're getting high-ticket clients who are ready to buy, not price shoppers.",
    image: "https://i.pravatar.cc/150?u=matthew"
  },
  {
    name: "Kevin Peterson",
    company: "ProShine Services",
    review: "I've gotten back 10+ hours a week because I no longer have to chase dead-end leads.",
    image: "https://i.pravatar.cc/150?u=kevin"
  },
  {
    name: "Jacob Phillips",
    company: "Diamond Clean",
    review: "Having a consistent $5,000+ in extra revenue each month has brought financial stability.",
    image: "https://i.pravatar.cc/150?u=jacob"
  },
  {
    name: "Johnathan Miller",
    company: "CleanPro Washers",
    review: "It's like having a marketing team that handles everything for you.",
    image: "https://i.pravatar.cc/150?u=john"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results</h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Hear from pressure washing owners just like you who are no longer stuck in the "Technician's Trap."
            </p>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium">
              4.9/5 Average Rating
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                  {/* Using a placeholder avatar service if image fails, or initials */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
