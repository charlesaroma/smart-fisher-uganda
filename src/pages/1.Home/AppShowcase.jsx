import React from "react";
import { motion } from "framer-motion";
import { Shield, BarChart, Lock, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const screenshots = [
  {
    id: 1,
    title: "Growth Analytics",
    url: "https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/growpage1.png",
    description: "Market insights and ecosystem growth trends.",
  },
  {
    id: 2,
    title: "Dashboard",
    url: "https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/dashboard.png?updatedAt=1776799116198",
    description: "Real-time data visualization and fleet monitoring.",
  },
  {
    id: 3,
    title: "Landing Screen",
    url: "https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/landing-screen.png?updatedAt=1776799118972",
    description: "Secure entry point for the Smart Fisher ecosystem.",
  },
  {
    id: 4,
    title: "Landing Site",
    url: "https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/landing-site.png?updatedAt=1776799117053",
    description: "Operational overview of maritime activities.",
  },
  {
    id: 5,
    title: "PIN Entry",
    url: "https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/pin.png?updatedAt=1776799115724",
    description: "Multi-factor authentication for data security.",
  },
];

export default function AppShowcase() {
  const navigate = useNavigate();
  return (
    <section id="showcase" className="py-24 lg:py-32 bg-blue-50/30 dark:bg-(--sectionBgA) relative overflow-hidden">
      {/* Soft Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[700px] bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="layout-spine relative z-10 w-full overflow-visible">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h4 className="text-sm font-mono tracking-[0.4em] uppercase text-(--zurich-blue-500) mb-4">
            Join 5k+ Members
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-(--color-heading) mb-8 leading-[1.05]"
          >
            The Future of <br className="hidden md:block" />
            <span className="text-(--zurich-blue-500)">Maritime Intelligence</span> & Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Don't just track your fleet—secure it. Reliable synchronization of your dashboard with on-the-ground operatives to show the true pulse of your operations.
          </motion.p>
          

        </div>

        {/* Desktop & Tablet View: Extravagant Overlapping Cluster */}
        <div className="hidden md:flex relative w-full h-[500px] lg:h-[650px] justify-center items-center my-10 perspective-[1200px]">
          {/* Far Left (Index 0) */}
          <motion.div
            initial={{ x: 0, y: 50, opacity: 0 }}
            whileInView={{ x: '-165%', y: '16%', opacity: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="absolute z-10 w-[24%] drop-shadow-2xl overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] group cursor-pointer"
          >
            <img src={screenshots[0].url} alt={screenshots[0].title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Far Right (Index 4) */}
          <motion.div
            initial={{ x: 0, y: 50, opacity: 0 }}
            whileInView={{ x: '165%', y: '15%', opacity: 1, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="absolute z-10 w-[24%] drop-shadow-2xl overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] group cursor-pointer"
          >
            <img src={screenshots[4].url} alt={screenshots[4].title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Mid Left (Index 1) */}
          <motion.div
            initial={{ x: 0, y: 50, opacity: 0 }}
            whileInView={{ x: '-85%', y: '8%', opacity: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="absolute z-20 w-[26%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] group cursor-pointer"
          >
            <img src={screenshots[1].url} alt={screenshots[1].title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>

          {/* Mid Right (Index 3) */}
          <motion.div
            initial={{ x: 0, y: 50, opacity: 0 }}
            whileInView={{ x: '85%', y: '7%', opacity: 1, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, type: "spring", bounce: 0.3 }}
            className="absolute z-20 w-[26%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] group cursor-pointer"
          >
            <img src={screenshots[3].url} alt={screenshots[3].title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>

          {/* Center Front (Index 2 - Dashboard) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ x: '0%', y: '0%', opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.45, type: "spring", bounce: 0.4 }}
            className="absolute z-30 w-[31%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)] overflow-hidden rounded-[2rem] lg:rounded-[3rem] group cursor-pointer"
          >
            <img src={screenshots[2].url} alt={screenshots[2].title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* Mobile View: Horizontal Snap Scroll Collection */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 pt-6 -mx-6 custom-scrollbar">
          {[
            screenshots[2], // Landing Screen
            screenshots[1], // Dashboard
            screenshots[3], // Landing Site
            screenshots[0], // Growth Analytics
            screenshots[4]  // PIN Entry
          ].map((s) => (
            <div key={s.id} className="shrink-0 w-[80%] snap-center drop-shadow-2xl overflow-hidden rounded-[2rem]">
              <img src={s.url} alt={s.title} className="w-full h-auto" />
            </div>
          ))}
        </div>

        {/* Features Pill Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex flex-wrap justify-between items-center gap-x-4 gap-y-4 max-w-4xl mx-auto mt-4 mb-8 px-8 py-5 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest leading-none mt-0.5">End-to-End Auth</span>
          </div>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
          
          <div className="flex items-center gap-3">
            <BarChart className="w-4 h-4 text-blue-500" />
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest leading-none mt-0.5">Dashboard Tracking</span>
          </div>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
          
          <div className="flex items-center gap-3">
            <Target className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest leading-none mt-0.5">Real-Time Security Alerts</span>
          </div>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
          
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-indigo-500" />
            <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest leading-none mt-0.5">Authentic Data Logs</span>
          </div>
        </motion.div>
        
        {/* Extra Mobile-only indicator */}
        <div className="md:hidden text-center text-xs text-gray-400 font-bold uppercase tracking-widest mt-2 mb-10">
          Swipe to view all screens
        </div>

      </div>
    </section>
  );
}
