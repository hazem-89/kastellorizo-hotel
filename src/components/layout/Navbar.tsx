"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Studios & Apartments", href: "#studios" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E0D8]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col leading-none text-left"
          >
            <span
              className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#1A3A5C]" : "text-white"
              }`}
            >
              {siteConfig.name}
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                scrolled ? "text-[#C9A84C]" : "text-[#C9A84C]"
              }`}
            >
              Kastellorizo · Greece
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-[#C9A84C] ${
                  scrolled ? "text-[#1A3A5C]" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-[#C9A84C] text-white rounded-sm hover:bg-[#b8934a] transition-colors duration-200"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-[#1A3A5C]" : "text-white"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-[#E5E0D8] shadow-xl md:hidden"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="px-8 py-4 text-sm uppercase tracking-widest text-[#1A3A5C] font-medium text-left hover:text-[#C9A84C] hover:bg-[#FAF8F4] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="px-8 py-4">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 text-xs uppercase tracking-widest font-semibold bg-[#C9A84C] text-white rounded-sm hover:bg-[#b8934a] transition-colors"
                >
                  Book Now
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
