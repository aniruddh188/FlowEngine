import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* The Problem */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
            <Card className="border-l-4 border-l-red-500 shadow-lg bg-white relative overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-100 rounded-full text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">The "Technician's Trap"</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Most pressure washing owners are stuck. You're either busy on the truck doing the work, or you're desperately trying to find the *next* job. This "feast or famine" cycle makes it impossible to scale, hire, or build real wealth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Unpredictable revenue month-to-month
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Wasting time on "dead-end" leads
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    Stuck working IN the business, not ON it
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* The Solution */}
          <div className="relative mt-12 md:mt-0">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="bg-primary text-white p-8 sm:p-12 rounded-lg shadow-2xl relative overflow-hidden border border-secondary/20">
              <div className="absolute top-0 right-0 p-12 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/20 rounded-full text-secondary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Performance Partnership</h3>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  This isn't a "leads" service. We don't just send you a list of names to chase. We deliver a complete, end-to-end system that puts confirmed, qualified appointments directly into your calendar.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                      <span className="text-secondary font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Guaranteed Outcome</h4>
                      <p className="text-sm text-gray-400">We promise qualified, high-value booked estimates. Not clicks... booked estimates.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/20">
                      <span className="text-secondary font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">30 Day Timeframe</h4>
                      <p className="text-sm text-gray-400">See the system fill your calendar within the first 30 days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
