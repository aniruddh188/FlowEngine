import { ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-white/10 to-white/5 rounded-[3rem] p-1 border border-white/10">
          <div className="bg-[#0f0f11] rounded-[2.8rem] p-8 md:p-20 text-center relative overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/20 blur-[100px] -z-10"></div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-8 border border-blue-500/20">
              <ShieldCheck className="w-4 h-4" />
              Ironclad Promise
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              0% Risk. <br/>
              100% Results.
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              If we don't hit our promised estimates in the first 30 days, we'll refund your service fee. The risk is entirely on us.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-7 rounded-full font-medium w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Claim Your Strategy Call
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> No Lock-in Contracts</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Cancel Anytime</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Results Guaranteed</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
