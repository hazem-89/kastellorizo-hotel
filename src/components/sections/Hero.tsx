"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const customEase = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: customEase },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=90&auto=format&fit=crop"
        alt="Kastellorizo island aerial view"
        fill
        priority
        className="object-cover object-center scale-105"
        style={{ transformOrigin: "center" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2337]/70 via-[#0F2337]/50 to-[#0F2337]/80" />

      {/* Subtle animated bokeh particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#C9A84C]/10"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#C9A84C] text-xs uppercase tracking-[0.5em] mb-6 font-medium"
        >
          Kastellorizo · Dodecanese · Greece
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="text-white/75 text-lg sm:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#rooms")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-[#C9A84C] text-white text-sm uppercase tracking-widest font-semibold hover:bg-[#b8934a] transition-all duration-300 hover:scale-105 rounded-sm"
          >
            Explore Rooms
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border border-white/50 text-white text-sm uppercase tracking-widest font-medium hover:bg-white/10 hover:border-white transition-all duration-300 rounded-sm"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
