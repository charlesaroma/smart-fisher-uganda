import {
  Shield,
  Globe,
  Sprout,
  Users,
  Ship,
  DollarSign,
  Fish,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

const metrics = [
  {
    icon: DollarSign,
    value: "$400M",
    label: "Annual Revenue Recovery",
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Jobs Created",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    icon: Fish,
    value: "180+",
    label: "Species Protected",
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Export Compliance",
    color: "text-sky-600",
    bg: "bg-sky-600/10",
  },
];

const stakeholders = [
  {
    title: "The Fisherman",
    icon: Ship,
    accent: "text-blue-600",
    borderColor: "border-white/10",
    benefits: [
      "Legal protection from maritime harassment",
      "Digital catch history for financial inclusion",
      "Sacco loan accessibility via verified records",
      "Official vessel ownership documentation",
    ],
  },
  {
    title: "National Revenue",
    icon: BarChart3,
    accent: "text-emerald-600",
    borderColor: "border-white/10",
    benefits: [
      "Real-time e-invoicing for every catch",
      "Elimination of revenue leakages",
      "Data-driven strategic policy decisions",
      "Automated national tax compliance",
    ],
  },
];

export default function About() {
  const pillars = [
    {
      title: "Security",
      desc: "Enhancing real-time maritime surveillance and awareness across all inland water bodies.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      color: "from-(--zurich-blue-500)/20 to-transparent",
      borderColor: "border-(--zurich-blue-400)/20",
    },
    {
      title: "Transparency",
      desc: "Providing a single, immutable source of truth for all fishery industry facts via digital access.",
      icon: <Globe className="w-8 h-8 text-sky-600" />,
      color: "from-(--water-spirit-400)/20 to-transparent",
      borderColor: "border-(--water-spirit-400)/20",
    },
    {
      title: "Sustainability",
      desc: "Protecting aquatic ecosystems through automated management and intelligent geofencing.",
      icon: <Sprout className="w-8 h-8 text-emerald-600" />,
      color: "from-(--militant-green-500)/20 to-transparent",
      borderColor: "border-(--militant-green-400)/20",
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 py-24 lg:py-32 relative bg-(--sectionBgB) overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* About: Section Header */}
        <div className="mb-20 text-center">
          <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4">
            Identity & Vision
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading text-(--color-heading) uppercase tracking-tight">
            About Smart Fisher <span className="text-blue-600">Technologies</span>
          </h1>
        </div>

        {/* About: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 lg:mb-32">
          <div className="p-8 lg:p-12 rounded-3xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-md transition-all">
            <h3 className="text-3xl font-heading tracking-widest uppercase mb-8 text-(--color-heading)">
              The Mission
            </h3>
            <p className="text-lg leading-relaxed text-(--hero-body) font-body">
              To modernize and secure Uganda's maritime economy by implementing
              a 100% transparent, sovereign digital infrastructure that empowers
              local producers and ensures national resource sustainability.
            </p>
          </div>
          <div className="p-8 lg:p-12 rounded-3xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-md transition-all">
            <h3 className="text-3xl font-heading tracking-widest uppercase mb-8 text-(--color-heading)">
              The Vision
            </h3>
            <p className="text-lg leading-relaxed text-(--hero-body) font-body">
              To transform Uganda into a global leader of maritime digital
              governance, where every drop of water is accounted for and every
              stakeholder thrives in a secure, data-driven ecosystem.
            </p>
          </div>
        </div>

        {/* About: Core Outcomes (Merged from Impact) */}
        <div className="mb-24 lg:mb-40">
          <div className="text-center mb-16 lg:mb-20">
            <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4">
              Economic Transformation
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-(--color-heading) uppercase tracking-wide">
              Measurable National Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-8 lg:p-10 rounded-3xl bg-(--nav-bg) border border-(--nav-border) text-center transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-8 flex items-center justify-center ${metric.bg}`}
                >
                  <metric.icon size={24} className={metric.color} />
                </div>
                <div
                  className={`text-4xl md:text-5xl font-heading tracking-widest mb-2 ${metric.color}`}
                >
                  {metric.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-(--color-text-muted)">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About: Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-emerald-600 mb-4">
              Strategic Framework
            </h4>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-(--color-heading) uppercase tracking-wide mb-8">
              Unregulated Waters to National Asset
            </h2>
            <p className="text-xl text-(--hero-body) leading-relaxed mb-10">
              Smart Fisher Technologies is engineered to resolve critical bottlenecks
              through pure digital governance, recovering lost revenue and
              securing maritime sovereignty.
            </p>
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-(--nav-border) flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 transition-colors">
                    {pillar.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-heading text-(--color-text-primary) uppercase tracking-widest mb-1">
                      {pillar.title}
                    </h5>
                    <p className="text-(--color-text-secondary) leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-8">
            {stakeholders.map((s) => (
              <div
                key={s.title}
                className="p-8 lg:p-10 rounded-3xl bg-(--nav-bg) border border-(--nav-border) transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <s.icon className={`w-8 h-8 ${s.accent}`} />
                  <h4 className="text-2xl font-heading text-(--color-text-primary) uppercase tracking-widest">
                    {s.title}
                  </h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {s.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-(--color-text-secondary) items-start"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
