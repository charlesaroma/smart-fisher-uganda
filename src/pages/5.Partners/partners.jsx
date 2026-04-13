import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "MAAIF", src: "/MAAIF-LOGO.png" },
  { name: "NITA-U", src: "/NITA-LOGO.png" },
  { name: "NaFIRRI", src: "/NAFIRRI-LOGO.png" },
  { name: "URA", src: "/URA.png" },
  { name: "LVFO", src: "/LVFO-LOGO.png" },
];

export default function Partners() {
  return (
    <motion.section
      id="partners"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24 py-24 lg:py-32 bg-(--sectionBgA)"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-blue-600 mb-4">
            Institutional Framework
          </h4>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-(--hero-title) mb-6">
            National Partners
          </h2>
          <p className="text-lg text-(--hero-body) leading-relaxed">
            Smart Fisher Technologies operates within a collaborative sovereign
            hierarchy ensuring data integrity and nationwide implementation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8 lg:gap-12">
          {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Logo Card - Fixed Size */}
                <div className="w-44 h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 bg-white rounded-2xl border border-(--nav-border) shadow-sm flex items-center justify-center p-6 mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500/30 group-hover:-translate-y-2">
                  <img
                    src={p.src}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Partner Identity - Below Card */}
                <div className="text-center w-full">
                  <p className="text-sm font-bold tracking-tight text-(--color-text-primary) uppercase group-hover:text-blue-600 transition-colors">
                    {p.name}
                  </p>
                  <div className="mt-1 h-0.5 w-0 bg-blue-500 mx-auto group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
