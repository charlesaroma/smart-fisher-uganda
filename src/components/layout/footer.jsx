import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import useTheme from "../theme/useTheme";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <footer className="bg-(--sectionBgA) border-t border-(--nav-border) pt-24 pb-12 transition-colors">
      <div className="layout-spine">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          {/* Brand Identity — Col Span 4 */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-4 mb-8 group cursor-pointer border-none bg-transparent p-0"
            >
              <div className="w-12 h-12 rounded-xl bg-(--nav-bg) border border-(--nav-border) flex items-center justify-center transition-all group-hover:scale-110 group-hover:border-(--zurich-blue-500)">
                <img
                  src={isLight ? "/SMART FISHER_LOGO_v2.png" : "/SMART FISHER_LOGO_v3_blue.png"}
                  className="w-8 h-8 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  alt="Smart Fisher Technologies Logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-heading text-2xl uppercase tracking-tighter text-(--color-text-primary)">
                  Smart Fisher
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-(--zurich-blue-500) font-bold">
                  Technologies
                </span>
              </div>
            </button>

            <p className="text-(--color-text-secondary) leading-relaxed mb-8 max-w-sm font-body">
              Engineering Uganda's digital maritime sovereignty through
              immutable data governance and high-precision surveillance.
            </p>

            <div className="flex gap-4">
              {[Globe, Shield, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-(--nav-bg) border border-(--nav-border) flex items-center justify-center text-(--color-text-muted) hover:text-(--zurich-blue-500) hover:border-(--zurich-blue-500) transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation — Col Span 2 */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-(--zurich-blue-500) mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "The Platform", id: "system" },
                { name: "Solutions", id: "solutions" },
                { name: "About Us", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm font-bold uppercase tracking-widest text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors cursor-pointer border-none bg-transparent p-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details — Col Span 3 */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-(--zurich-blue-500) mb-8">
              Command Link
            </h4>
            <ul className="space-y-6">
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                <MapPin
                  size={18}
                  className="text-(--zurich-blue-500) shrink-0"
                />
                <span className="text-sm text-(--color-text-secondary) leading-relaxed group-hover:text-(--color-text-primary) transition-colors font-body">
                  Plot 123, Jinja Road, <br /> Kampala, Uganda
                </span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group cursor-pointer">
                <Mail
                  size={18}
                  className="text-(--militant-green-500) shrink-0"
                />
                <span className="text-sm text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors font-body">
                  info@smartfisher.go.ug
                </span>
              </li>
              <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group">
                <Phone
                  size={18}
                  className="text-(--zurich-blue-500) shrink-0"
                />
                <span className="text-sm text-(--color-text-secondary) group-hover:text-(--color-text-primary) transition-colors font-bold font-body">
                  0800 100 200
                </span>
              </li>
            </ul>
          </div>

          {/* Portal Interface — Col Span 3 */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 border-(--nav-border) hover:border-(--zurich-blue-500)/30 transition-all flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-(--zurich-blue-500)" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-(--color-text-primary)">
                  Command Portal
                </h4>
              </div>
              <p className="text-[11px] text-(--color-text-muted) mb-6 leading-relaxed font-body">
                Access secure government and cooperative interfaces via
                encrypted node.
              </p>
              <button className="w-full py-3 bg-(--zurich-blue-500) hover:bg-(--zurich-blue-400) text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border-none shadow-lg shadow-blue-950/20">
                Secure Login <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bottom Bar */}
        <div className="pt-12 border-t border-(--nav-border) flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-text-muted) opacity-60">
            © {currentYear} Smart Fisher Technologies. Sovereign Digital
            Infrastructure.
          </div>
          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service"].map((legal) => (
              <a
                key={legal}
                href="#"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-text-muted) hover:text-(--color-text-primary) transition-colors no-underline"
              >
                {legal}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
