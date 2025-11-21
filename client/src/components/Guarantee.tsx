import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Guarantee() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
          
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
            <ShieldCheck className="w-10 h-10" />
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-6">0% RISK GUARANTEE</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If we don't hit our promised estimates, we'll refund your service fee. The risk is 100% on us.
          </p>
          
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-6 font-bold uppercase tracking-wide rounded-sm shadow-lg">
            Claim Your Free Strategy Call
          </Button>
          <p className="mt-4 text-sm text-gray-500">Limited spots available for this month</p>
        </div>
      </div>
    </section>
  );
}
