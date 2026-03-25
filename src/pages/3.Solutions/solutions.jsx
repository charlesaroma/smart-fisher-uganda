import React from "react";
import { Anchor, Landmark, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const modules = [
    {
      title: "Smart-Fisher",
      user: "Fishers & Operators",
      func: "Catch reporting, biometric credentials, and secure loan applications.",
      icon: Anchor,
      accent: "blue",
      features: [
        "Catch History Dashboard",
        "SACCO Loan Portal",
        "Vessel Registration Docs",
      ],
    },
    {
      title: "Smart-Force",
      user: "UPDF Marine Unit",
      func: "Tactical maritime surveillance, real-time tracking, and sovereign enforcement.",
      icon: Shield,
      accent: "emerald",
      features: [
        "Live Fleet Map",
        "Geofence Breach Alerts",
        "Search & Rescue (SAR) Ping",
      ],
    },
    {
      title: "Smart-Gov",
      user: "MAAIF / URA / UBOS",
      func: "Policy regulation, fiscal oversight, and national predictive analytics.",
      icon: Landmark,
      accent: "green",
      features: [
        "Automated Tax Invoicing",
        "Real-time Yield Forecasts",
        "Export Traceability Logs",
      ],
    },
  ];

  const accentClass = (accent) => {
    switch (accent) {
      case "emerald":
        return {
          ring: "bg-emerald-500/10 border-emerald-500/20",
          text: "text-emerald-600",
          dot: "bg-emerald-600",
        };
      case "green":
        return {
          ring: "bg-green-500/10 border-green-500/20",
          text: "text-green-600",
          dot: "bg-green-600",
        };
      default:
        return {
          ring: "bg-blue-500/10 border-blue-500/20",
          text: "text-blue-600",
          dot: "bg-blue-600",
        };
    }
  };

  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 py-24 lg:py-32 bg-(--sectionBgA)"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4">
            PaaS Architecture
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--color-heading) mb-8">
            Service Modules
          </h2>
          <p className="text-lg text-(--hero-body) leading-relaxed">
            Scalable command modules engineered for Uganda&apos;s stakeholder
            groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {modules.map((mod) => {
            const c = accentClass(mod.accent);
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="p-6 md:p-10 rounded-4xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-md shadow-sm hover:-translate-y-1 transition-all flex flex-col"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border ${c.ring}`}
                >
                  <Icon size={30} className={c.text} />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-(--color-text-primary) mb-2">
                  {mod.title}
                </h3>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-(--color-text-muted) mb-6">
                  Target: {mod.user}
                </div>

                <p className="text-(--color-text-secondary) leading-relaxed mb-8">
                  {mod.func}
                </p>

                <div className="mt-auto space-y-3 pt-6 border-t border-(--nav-border)">
                  {mod.features.map((feat) => (
                    <div key={feat} className="flex gap-3 items-start">
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full ${c.dot}`}
                      />
                      <span className="text-sm text-(--color-text-secondary)">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
