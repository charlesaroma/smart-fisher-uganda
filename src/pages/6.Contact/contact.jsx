import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().min(10, "Min 10 chars").required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Transmission Sent:", values);
      alert("Inquiry Transmitted.");
    },
  });

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen py-24 lg:py-0 w-full bg-(--sectionBgB) relative overflow-hidden flex items-center transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-(--zurich-blue-500) opacity-[0.03] dark:opacity-[0.06] blur-[120px] pointer-events-none" />

      <div className="layout-spine relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Command Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--nav-bg) border border-(--nav-border) mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-(--zurich-blue-500) animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-(--zurich-blue-500) font-bold">
                Command Link
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase text-(--color-text-primary) mb-8 leading-[0.9]">
              Get In <br />{" "}
              <span className="text-(--zurich-blue-500)">Touch</span>
            </h2>

            <div className="grid grid-cols-1 gap-4 max-w-sm mb-12 lg:mb-0">
              {[
                {
                  icon: MapPin,
                  label: "HQ Command",
                  val: "Wabyona Building, 2nd floor, Namboole – Bweyogerere, Jinja Road",
                  accent: "var(--zurich-blue-500)",
                },
                {
                  icon: Mail,
                  label: "Secure Server",
                  val: "info@ffou.org",
                  accent: "var(--militant-green-500)",
                },
                {
                  icon: Phone,
                  label: "Voice Hotline",
                  val: "0800 100261 / +256 414 583 081",
                  accent: "var(--zurich-blue-500)",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 flex items-center gap-5 border-(--nav-border) hover:border-(--zurich-blue-500)/40 hover:bg-white/3 hover:-translate-y-1 transition-all duration-300 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl bg-(--nav-bg) border border-(--nav-border) flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon style={{ color: item.accent }} size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-(--color-text-muted) font-bold mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-(--color-text-primary) font-body font-semibold tracking-wide">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 lg:p-12 shadow-2xl border-(--nav-border) relative">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-(--color-text-muted) ml-1 font-bold">
                      Identity
                    </label>
                    <input
                      name="name"
                      {...formik.getFieldProps("name")}
                      className={`w-full bg-(--sectionBgA) border ${formik.touched.name && formik.errors.name ? "border-red-500/50" : "border-(--nav-border)"} rounded-xl p-4 text-(--color-text-primary) text-sm focus:border-(--zurich-blue-500) focus:ring-1 focus:ring-(--zurich-blue-500)/20 outline-none transition-all font-body`}
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-(--color-text-muted) ml-1 font-bold">
                      Email
                    </label>
                    <input
                      name="email"
                      {...formik.getFieldProps("email")}
                      className={`w-full bg-(--sectionBgA) border ${formik.touched.email && formik.errors.email ? "border-red-500/50" : "border-(--nav-border)"} rounded-xl p-4 text-(--color-text-primary) text-sm focus:border-(--zurich-blue-500) focus:ring-1 focus:ring-(--zurich-blue-500)/20 outline-none transition-all font-body`}
                      placeholder="Contact Email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-(--color-text-muted) ml-1 font-bold">
                    Subject
                  </label>
                  <input
                    name="subject"
                    {...formik.getFieldProps("subject")}
                    className={`w-full bg-(--sectionBgA) border ${formik.touched.subject && formik.errors.subject ? "border-red-500/50" : "border-(--nav-border)"} rounded-xl p-4 text-(--color-text-primary) text-sm focus:border-(--zurich-blue-500) focus:ring-1 focus:ring-(--zurich-blue-500)/20 outline-none transition-all font-body`}
                    placeholder="Inquiry Topic"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-(--color-text-muted) ml-1 font-bold">
                    Message Transmission
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    {...formik.getFieldProps("message")}
                    className={`w-full bg-(--sectionBgA) border ${formik.touched.message && formik.errors.message ? "border-red-500/50" : "border-(--nav-border)"} rounded-xl p-4 text-(--color-text-primary) text-sm focus:border-(--zurich-blue-500) focus:ring-1 focus:ring-(--zurich-blue-500)/20 outline-none transition-all font-body resize-none`}
                    placeholder="Transmission Details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  Transmit Inquiry{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
