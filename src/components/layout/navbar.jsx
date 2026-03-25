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
        <button onClick={() => scrollTo("home")} className="flex items-center gap-4 cursor-pointer">
          <img src="/SMART FISHER_LOGO_v2.png" className="h-14 w-14 object-contain" alt="Logo" />
          <div className="flex flex-col items-start leading-none">
            <span className="font-heading text-xl uppercase tracking-tighter">Smart-Fisher</span>
            <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Uganda</span>
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
          <button onClick={toggleTheme} className="cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors">
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden cursor-pointer">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}