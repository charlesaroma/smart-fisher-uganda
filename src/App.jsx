import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Hero from "./pages/1.Home/hero";
import System from "./pages/2.System/system";
import Solutions from "./pages/3.Solutions/solutions";
import About from "./pages/4.About/about";
import Partners from "./pages/5.Partners/partners";
import Contact from "./pages/6.Contact/contact";
import MobileOverviewPage from "./pages/7.MobileOverview/MobileOverviewPage";

import AppShowcase from "./pages/1.Home/AppShowcase";

const sectionTitles = {
  home: "Home",
  system: "The Platform",
  solutions: "Solutions",
  showcase: "Showcase",
  about: "About Us",
  partners: "Partners",
  contact: "Contact",
};

const HomePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "-20% 0px -75% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const sectionName = sectionTitles[id];
          if (sectionName) {
            document.title = `${sectionName} | Smart Fisher Technologies`;
          }
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <AppShowcase />
      <System />
      <Solutions />
      <About />
      <Partners />
      <Contact />
    </main>
  );
};


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobile-overview" element={<MobileOverviewPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default App;

