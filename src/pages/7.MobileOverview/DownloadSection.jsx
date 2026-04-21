import React from "react";
import { Download, FileText, ChevronRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function DownloadSection() {
  const navigate = useNavigate();
  const handleDownload = () => {
    // In a real scenario, this would be the actual file path
    const link = document.createElement("a");
    link.href = "/documents/smart-fisher-brochure.pdf";
    link.download = "Smart-Fisher-Mobile-Overview.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[calc(100vh-88px)] flex items-center py-24 bg-(--sectionBgB) transition-colors duration-500 relative overflow-hidden">
      {/* Water Wave Texture Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="https://ik.imagekit.io/sbgenu6wj/Smart-fisher-tech/water-wave.jpg?updatedAt=1776799594896"
          alt=""
          className="w-full h-full object-cover mix-blend-luminosity opacity-[0.05] dark:opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-(--sectionBgB) via-(--sectionBgB)/80 to-transparent transition-colors duration-500" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-(--zurich-blue-500)/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-(--color-heading)/5 skew-x-[20deg] -translate-x-1/2 pointer-events-none z-0" />

      <div className="layout-spine relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:max-w-2xl text-center lg:text-left">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-mono tracking-[0.4em] uppercase text-(--zurich-blue-500) mb-8"
            >
              Official Resource
            </motion.h4>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading text-(--color-heading) mb-6 uppercase leading-tight">
              Get the Complete <br />
              <span className="text-(--zurich-blue-500)">Mobile Overview</span>
            </h2>
            <p className="text-lg text-(--color-text-secondary) font-body leading-relaxed mb-8">
              Download the detailed Smart Fisher Technologies brochure to understand our full suite of maritime surveillance solutions, data governance protocols, and implementation strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto bg-(--zurich-blue-500) text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 border-none"
              >
                Download Brochure
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full sm:w-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                Visit Platform
                <Home size={18} />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-1/3 flex flex-col items-center lg:items-start"
          >
            <div className="relative z-10 w-full">
              <div className="w-16 h-16 bg-(--zurich-blue-500) flex items-center justify-center mb-8 shadow-2xl">
                <FileText size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-(--color-heading) mb-2 uppercase tracking-wide">
                Technical Spec
              </h4>
              <p className="text-sm text-(--color-text-secondary) mb-6 font-body leading-relaxed">
                Version 2.4.0 (2026) <br />
                Format: PDF (4.2 MB)
              </p>
              <div className="h-1 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-(--zurich-blue-500)"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
