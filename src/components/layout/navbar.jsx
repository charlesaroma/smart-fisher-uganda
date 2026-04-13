import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import useTheme from "../theme/useTheme";

const links = [
  { name: "Home", id: "home" },
  { name: "The Platform", id: "system" },
  { name: "Solutions", id: "solutions" },
  { name: "About Us", id: "about" },
  { name: "Partners", id: "partners" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = theme === "light";

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-(--nav-border) bg-(--nav-bg) backdrop-blur-xl">
      <div className="layout-spine py-5 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src="/SMART FISHER_LOGO_v2.png"
            className="h-14 w-14 object-contain"
            alt="Logo"
          />
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-xl uppercase tracking-tighter">
              Smart Fisher
            </span>
            <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">
              Technologies
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="cursor-pointer text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] md:top-[96px] bg-(--nav-bg) backdrop-blur-2xl border-b border-(--nav-border) transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="layout-spine py-8 flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left py-2 text-sm font-bold uppercase tracking-[0.2em] text-(--color-text-secondary) hover:text-(--color-primary) transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 border-t border-(--nav-border) flex flex-col gap-4">
            <button className="w-full py-4 bg-(--zurich-blue-500) text-white rounded-xl text-xs font-bold uppercase tracking-widest">
              Secure Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
