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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 relative py-32 overflow-hidden bg-(--sectionBgA)"
    >
      {/* Dynamic Background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-(--nav-bg) border border-(--nav-border) mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.45)]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-(--color-text-secondary)">
                Sovereign Infrastructure
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-(--hero-title) leading-tight mb-8">
              Securing Uganda&apos;s Waters for Future Generations
            </h1>

            <p className="text-lg text-(--hero-body) leading-relaxed max-w-2xl mb-12">
              Transitioning Uganda&apos;s fisheries from unregulated waters to a
              secure, transparent national digital asset powered by
              Omni-Intelligence.
            </p>

            <div className="flex flex-wrap gap-6 mb-2">
              <button
                onClick={() => scrollTo("system")}
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                Explore The Platform
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border border-(--btn-secondary-border) text-(--btn-secondary-text) hover:bg-(--btn-secondary-hover-bg) px-6 py-3 rounded-lg font-medium transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                Get in Touch
              </button>
            </div>

            {/* <div className="flex gap-12 border-t border-white/5 pt-12">
              <div>
                <div className="text-3xl font-heading text-white mb-1">
                  $400M+
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Annual Recovery
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading text-white mb-1">
                  100%
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Tax Sovereignty
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading text-white mb-1">
                  50K+
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                  Digital Identities
                </div>
              </div>
            </div> */}
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative z-10 scale-100 md:scale-110 lg:scale-125">
              <DotLottieReact
                src="https://lottie.host/92c511e7-deb0-4f91-a7ae-6b03f4217eea/TELC1s6N5o.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
