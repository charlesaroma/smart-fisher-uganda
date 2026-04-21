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
      {/* Water Wave Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/water-wave.jpg?updatedAt=1776799594896"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity opacity-[0.04] dark:opacity-[0.07]"
        />
        {/* Fade to background color so it perfectly blends into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-(--sectionBgA)/50 to-(--sectionBgA)" />
      </div>

      {/* Dynamic Background Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none z-0" />

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
            <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-(--zurich-blue-500) mb-6">
              Sovereign Infrastructure
            </h4>

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
                className="w-full sm:w-auto bg-(--zurich-blue-500) text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 border-none"
              >
                Explore Platform
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
