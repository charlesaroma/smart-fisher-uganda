import React from "react";
import { motion } from "framer-motion";
import { Database, Monitor } from "lucide-react";

export default function System() {
  return (
    <motion.section
      id="system"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="scroll-mt-24 py-24 lg:py-32 bg-(--sectionBgB)"
    >
      <div className="layout-spine">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-(--nav-bg) border border-(--nav-border) mb-6">
            <span className="w-2 h-2 rounded-full bg-(--zurich-blue-500) animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-(--color-text-muted)">
              Core Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase text-(--hero-title) mb-6">
            The Platform
          </h2>
          <p className="text-lg text-(--hero-body) leading-relaxed">
            Smart-Fisher Uganda is built as sovereign digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 md:p-10">
            <Database className="text-(--zurich-blue-500) mb-6" size={32} />
            <h3 className="text-2xl font-bold text-(--color-text-primary) mb-4">
              Central Registry
            </h3>
            <ul className="space-y-4 text-(--color-text-secondary)">
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--zurich-blue-500) shrink-0" />
                Omni-Intelligence recordkeeping for all maritime stakeholders.
              </li>
            </ul>
          </div>
          <div className="glass-card p-6 md:p-10">
            <Monitor className="text-(--militant-green-500) mb-6" size={32} />
            <h3 className="text-2xl font-bold text-(--color-text-primary) mb-4">
              Live Monitoring
            </h3>
            <ul className="space-y-4 text-(--color-text-secondary)">
              <li className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--militant-green-500) shrink-0" />
                Real-time awareness for enforcement and Search & Rescue.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
