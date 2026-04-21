import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useTheme from "../theme/useTheme";

const links = [
  { name: "Home", id: "home" },
  { name: "Showcase", id: "showcase" },
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-(--nav-border) bg-(--nav-bg) backdrop-blur-xl">
        <div className="layout-spine py-5 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-4 cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src={isLight ? "/SMART FISHER_LOGO_v2.png" : "/SMART FISHER_LOGO_v3_blue.png"}
              className="h-14 w-14 object-contain"
              alt="Logo"
            />
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-heading text-xl uppercase tracking-tighter text-(--color-heading)">
                Smart Fisher
              </span>
              <span className="text-[10px] uppercase tracking-widest text-(--zurich-blue-500) font-bold">
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="cursor-pointer text-xs font-bold uppercase tracking-widest text-(--color-text-primary) hover:text-(--zurich-blue-500) transition-colors bg-transparent border-none"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => navigate('/mobile-overview')}
              className="hidden lg:flex cursor-pointer text-xs font-bold uppercase tracking-widest text-white bg-(--zurich-blue-500) px-6 py-2.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 border-none"
            >
              Mobile Overview
            </button>
            <button
              onClick={toggleTheme}
              className="cursor-pointer p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors bg-transparent border-none text-(--color-heading)"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden cursor-pointer p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors bg-transparent border-none text-(--color-heading)"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="lg:hidden fixed inset-0 z-[100] bg-(--sectionBgA) flex flex-col"
          >
            {/* Navbar Mirror inside the menu */}
            <div className="layout-spine py-5 flex justify-between items-center border-b border-(--nav-border)">
              <button
                onClick={() => scrollTo("home")}
                className="flex items-center gap-4 cursor-pointer bg-transparent border-none p-0"
              >
                <img
                  src={isLight ? "/SMART FISHER_LOGO_v2.png" : "/SMART FISHER_LOGO_v3_blue.png"}
                  className="h-14 w-14 object-contain"
                  alt="Logo"
                />
                <div className="flex flex-col items-start leading-none text-left">
                  <span className="font-heading text-xl uppercase tracking-tighter text-(--color-heading)">
                    Smart Fisher
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-(--zurich-blue-500) font-bold">
                    Technologies
                  </span>
                </div>
              </button>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="cursor-pointer p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors bg-transparent border-none text-(--color-heading)"
                >
                  {isLight ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors bg-transparent border-none text-(--color-heading)"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Vertically Centered Links */}
            <div className="flex-1 flex flex-col justify-center px-6 pb-20 overflow-y-auto">
              <div className="flex flex-col gap-8 text-center pt-10">
                {links.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => scrollTo(link.id)}
                    className="text-3xl font-heading uppercase tracking-widest text-(--color-heading) hover:text-(--zurich-blue-500) transition-colors bg-transparent border-none"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 max-w-sm w-full mx-auto"
              >
                <button 
                  onClick={() => { setIsMenuOpen(false); navigate('/mobile-overview'); }}
                  className="w-full py-4 bg-(--zurich-blue-500) text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-90 transition-all duration-300 cursor-pointer border-none"
                >
                  Mobile Overview
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
