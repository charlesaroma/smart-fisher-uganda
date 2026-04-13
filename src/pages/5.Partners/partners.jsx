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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="group rounded-3xl bg-white border border-(--nav-border) p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="h-24 w-full flex items-center justify-center mb-6">
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-full max-w-[80%] object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold tracking-tight text-slate-900">
                  {p.name}
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Official Partner
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
