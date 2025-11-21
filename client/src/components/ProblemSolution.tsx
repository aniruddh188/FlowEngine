import { AlertTriangle, CheckCircle2, ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSolution() {
  return (
    <section id="problem" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* The Problem */}
          <div>
            <h2 className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Stuck in the "Technician's Trap"?</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Most pressure washing owners are either busy on the truck doing the work, or desperately trying to find the next job. This "feast or famine" cycle makes it impossible to scale.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "Unpredictable Revenue", desc: "Never knowing where the next job comes from." },
                { title: "Wasted Time", desc: "Spending hours chasing dead-end leads." },
                { title: "Growth Ceiling", desc: "Unable to hire because work isn't consistent." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="text-sm font-medium text-green-400 mb-4 uppercase tracking-widest">The Solution</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Performance Partnership</h3>
              <p className="text-gray-400 mb-8">
                We don't just send leads. We deliver a complete, end-to-end system that puts confirmed, qualified appointments directly into your calendar.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Guaranteed Outcome</h4>
                    <p className="text-sm text-gray-500">Booked estimates, not just clicks or leads.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">30 Day Sprint</h4>
                    <p className="text-sm text-gray-500">See results fill your calendar in the first month.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg">0% Risk Guarantee</h4>
                  <p className="text-white/80 text-sm">We hit our numbers or you don't pay.</p>
                </div>
                <DollarSign className="w-8 h-8 text-white/80" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
