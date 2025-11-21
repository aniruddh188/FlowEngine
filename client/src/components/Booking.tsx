import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function Booking() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal && window.Cal("init", "growthcall", { origin: "https://app.cal.com" });

    window.Cal && window.Cal.ns.growthcall("inline", {
      elementOrSelector: "#my-cal-inline-growthcall",
      config: { layout: "month_view" },
      calLink: "introscale/growthcall",
    });

    window.Cal && window.Cal.ns.growthcall("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <section id="booking-section" className="py-16 bg-background border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Fill Your Calendar?
          </h2>
          <p className="text-xl text-gray-400">
            Book your free 30 min growth call to see how we can fill your calendar.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div 
            style={{ width: "100%", height: "100%", overflow: "scroll" }} 
            id="my-cal-inline-growthcall"
          ></div>
        </div>
      </div>
    </section>
  );
}
