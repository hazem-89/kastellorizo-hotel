"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks: (
  | { label: string; hash: string }
  | { label: string; href: string }
)[] = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Studios & Apartments", href: "/rooms" },
  { label: "Gallery", hash: "gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Getting here", hash: "travel" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHash = (hash: string) => {
    const el = document.querySelector(`#${hash}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSamePageNav = (e: React.MouseEvent, hash: string) => {
    if (isHome) {
      e.preventDefault();
      scrollToHash(hash);
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  const linkClass = `cursor-pointer text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-[#C9A84C] whitespace-nowrap ${
    scrolled ? "text-[#1A3A5C]" : "text-white/90"
  }`;

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
          <Link
            href="/"
            className="flex flex-col leading-none text-left cursor-pointer"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToHash("home");
              }
            }}
          >
            <span
              className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#1A3A5C]" : "text-white"
              }`}
            >
              {siteConfig.heroTitleLine1}
            </span>
            <span
              className={`font-serif text-sm pb-1 font-bold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#1A3A5C]" : "text-white"
              }`}
            >
              {siteConfig.heroTitleLine2}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A84C]">
              Kastellorizo · Greece
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) =>
              "href" in link ? (
                <Link key={link.href} href={link.href} className={linkClass} onClick={() => setMenuOpen(false)} >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.hash}
                  href={`/#${link.hash}`}
                  onClick={(e) => handleSamePageNav(e, link.hash)}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-xs uppercase tracking-widest font-semibold bg-[#C9A84C] text-white rounded-sm hover:bg-[#b8934a] transition-colors duration-200"
            >
              Book Now
            </Link>
          </nav>

          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-[#1A3A5C]" : "text-white"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open or close menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-[#E5E0D8] shadow-xl md:hidden"
            id="mobile-menu"
          >
            <nav
              className="flex flex-col py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={"href" in link ? link.href : link.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {"href" in link ? (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-8 py-4 text-sm uppercase tracking-widest text-[#1A3A5C] font-medium text-left hover:text-[#C9A84C] hover:bg-[#FAF8F4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={`/#${link.hash}`}
                      onClick={(e) => handleSamePageNav(e, link.hash)}
                      className="block px-8 py-4 text-sm uppercase tracking-widest text-[#1A3A5C] font-medium text-left hover:text-[#C9A84C] hover:bg-[#FAF8F4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="px-8 py-4">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-3 text-center text-xs uppercase tracking-widest font-semibold bg-[#C9A84C] text-white rounded-sm hover:bg-[#b8934a] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
