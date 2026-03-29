import React, { useState } from "react";
import { Anchor, Landmark, Shield, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FeatureItem = ({ feat, colorDot }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group flex gap-3 items-start cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150 ${colorDot}`}
      />
      <span className="text-sm text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors">
        {feat.name}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute left-0 bottom-full mb-4 w-64 p-4 rounded-2xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-xl shadow-2xl z-50 pointer-events-none"
          >
            <div className="flex items-center gap-2 mb-2">
              <Info size={14} className="text-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold">
                Insight
              </span>
            </div>
            <p className="text-xs text-(--color-text-secondary) leading-relaxed">
              {feat.desc}
            </p>
            {/* Arrow */}
            <div className="absolute top-full left-4 -translate-y-1/2 w-3 h-3 bg-(--nav-bg) border-r border-b border-(--nav-border) rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Solutions() {
  const modules = [
    {
      title: "Smart-Fisher",
      user: "Fishers & Operators",
      func: "Catch reporting, biometric credentials, and secure loan applications.",
      icon: Anchor,
      accent: "blue",
      features: [
        {
          name: "Catch History Dashboard",
          desc: "Track every harvest with GPS-tagged records and species-specific data.",
        },
        {
          name: "SACCO Loan Portal",
          desc: "Unlock credit based on your verified fishing history and vessel ownership.",
        },
        {
          name: "Health Portal",
          desc: "Access specialized maritime medical services and insurance for your crew.",
        },
        {
          name: "Vessel Registration Docs",
          desc: "Digitally sign and store official documentation for national compliance.",
        },
      ],
    },
    {
      title: "Smart-Force",
      user: "UPDF Marine Unit",
      func: "Tactical maritime surveillance, real-time tracking, and sovereign enforcement.",
      icon: Shield,
      accent: "emerald",
      features: [
        {
          name: "Live Fleet Map",
          desc: "Real-time visualization of all active vessels across Uganda's water bodies.",
        },
        {
          name: "Geofence Breach Alerts",
          desc: "Automated notifications if vessels enter protected or restricted zones.",
        },
        {
          name: "Search & Rescue (SAR) Ping",
          desc: "Instant distress signaling with precise coordinates for rapid response.",
        },
      ],
    },
    {
      title: "Smart-Gov",
      user: "MAAIF / URA / UBOS",
      func: "Policy regulation, fiscal oversight, and national predictive analytics.",
      icon: Landmark,
      accent: "green",
      features: [
        {
          name: "Automated Tax Invoicing",
          desc: "Frictionless revenue collection integrated directly with the catch reporting.",
        },
        {
          name: "Real-time Yield Forecasts",
          desc: "Predictive analytics on fish stocks to inform national fishing quotas.",
        },
        {
          name: "Export Traceability Logs",
          desc: "End-to-end blockchain-ready audits for international export standards.",
        },
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
              <motion.div
                key={mod.title}
                whileHover={{ y: -5 }}
                className="p-6 md:p-10 rounded-4xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-md shadow-sm transition-all flex flex-col group/card hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover/card:scale-110 ${c.ring}`}
                >
                  <Icon size={30} className={c.text} />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-(--color-text-primary) mb-2">
                  {mod.title}
                </h3>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-(--color-text-muted) mb-6">
                  Target: {mod.user}
                </div>

                <p className="text-(--color-text-secondary) leading-relaxed mb-8 font-body">
                  {mod.func}
                </p>

                <div className="mt-auto space-y-4 pt-6 border-t border-(--nav-border)">
                  {mod.features.map((feat) => (
                    <FeatureItem key={feat.name} feat={feat} colorDot={c.dot} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
