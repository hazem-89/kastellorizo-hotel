"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Gift, Sparkles, Facebook } from "lucide-react";

const viewportOpts = { amount: 0.2, once: true };
const ease = [0.22, 1, 0.36, 1] as const;

const DECOR_ITEMS = [
  { label: "Clothes & jewelry", delay: 0.1 },
  { label: "Ceramics", delay: 0.2 },
  { label: "Souvenirs", delay: 0.3 },
];

export default function CarettaGiftShop() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, viewportOpts);

  return (
    <section
      ref={sectionRef}
      id="caretta"
      className="py-24 lg:py-28 bg-[#FAF8F4] relative overflow-hidden"
    >
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #1A3A5C 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 w-72 h-72 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #C9A84C 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 lg:order-2"
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
            transition={{ duration: 0.85, ease }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
              While you&apos;re here
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1A3A5C] leading-tight">
              Caretta{" "}
              <span className="italic font-normal text-[#1A3A5C]/72">
                Gift Shop
              </span>
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#5A5650]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-white border border-[#E5E0D8] text-[#1A3A5C]">
                <MapPin className="w-3.5 h-3.5 text-[#C9A84C] shrink-0" aria-hidden />
                Old fish market
              </span>
            </p>
            <p className="mt-8 text-[#5A5650] leading-relaxed text-[15px] sm:text-base">
              The Caretta Gift Shop is in the{" "}
              <strong className="text-[#1A3A5C] font-semibold">
                old fish market
              </strong>
              . Browse clothes and jewelry, ceramics, and souvenirs — perfect
              mementos of your stay on the island.
            </p>
            <p className="mt-4 text-[#5A5650] leading-relaxed text-[15px] sm:text-base">
              Find us on Facebook as{" "}
              <strong className="text-[#1A3A5C] font-semibold">
                Caretta Kastellorizo
              </strong>
              .
            </p>
            <motion.a
              href="https://www.facebook.com/caretta.kastellorizo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1A3A5C] text-white text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-[#152d45] transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Facebook className="w-5 h-5 text-[#C9A84C]" aria-hidden />
              Caretta on Facebook
            </motion.a>
          </motion.div>

          {/* Visual card */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 lg:order-1"
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
            transition={{ duration: 0.85, ease, delay: 0.08 }}
          >
            <div className="relative max-w-xl mx-auto lg:max-w-none">
              <div className="absolute -inset-px bg-gradient-to-br from-[#C9A84C]/40 via-transparent to-[#1A3A5C]/20 rounded-sm" />
              <div className="relative bg-[#1A3A5C] rounded-sm p-8 sm:p-10 lg:p-12 text-white overflow-hidden shadow-xl">
                <div
                  className="absolute top-0 right-0 w-64 h-64 opacity-[0.12]"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, #C9A84C, transparent 55%)",
                  }}
                />
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-6 ring-1 ring-[#C9A84C]/35">
                    <Gift className="w-8 h-8 text-[#C9A84C]" strokeWidth={1.25} />
                  </div>
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                    Caretta
                  </p>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] mb-10">
                    Gift shop · Kastellorizo
                  </p>
                  <ul className="w-full space-y-4 text-left max-w-sm mx-auto">
                    {DECOR_ITEMS.map((item) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={
                          inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                        }
                        transition={{
                          delay: 0.25 + item.delay,
                          duration: 0.5,
                          ease,
                        }}
                        className="flex items-center gap-3 py-3 px-4 rounded-sm bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <Sparkles
                          className="w-4 h-4 text-[#C9A84C] shrink-0"
                          aria-hidden
                        />
                        <span className="text-sm text-white/90 tracking-wide">
                          {item.label}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
