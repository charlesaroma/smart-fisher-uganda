import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 relative pt-16 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-(--sectionBgA)"
    >
      {/* Dynamic Background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Lottie Animation — Order 1 on Mobile, 2 on Desktop */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative z-10 scale-100 md:scale-110 lg:scale-125">
              <DotLottieReact
                src="https://lottie.host/92c511e7-deb0-4f91-a7ae-6b03f4217eea/TELC1s6N5o.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-(--nav-bg) border border-(--nav-border) mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.45)]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-(--color-text-secondary)">
                Sovereign Infrastructure
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-(--hero-title) leading-tight mb-8">
              Securing Uganda&apos;s Waters for Future Generations
            </h1>

            <p className="text-lg text-(--hero-body) leading-relaxed max-w-2xl mb-12">
              Transitioning Uganda&apos;s fisheries from unregulated waters to a
              secure, transparent national digital asset powered by
              Omni-Intelligence.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("system")}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                Explore Platform
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="bg-(--nav-bg) border border-(--nav-border) text-(--color-text-primary) hover:bg-white/10 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
