import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "MAAIF", src: "/MAAIF-LOGO.png" },
  { name: "NITA-U", src: "/NITA-LOGO.png" },
  { name: "NaFIRRI", src: "/NAFIRRI-LOGO.png" },
  { name: "URA", src: "/URA.png" },
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
            Smart-Fisher Uganda operates within a collaborative sovereign
            hierarchy ensuring data integrity and nationwide implementation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="rounded-2xl bg-(--nav-bg) border border-(--nav-border) backdrop-blur-md p-6 flex items-center justify-center"
            >
              <img
                src={p.src}
                alt={p.name}
                className="h-12 w-auto grayscale contrast-50 hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
