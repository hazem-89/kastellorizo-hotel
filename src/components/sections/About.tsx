"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12", label: "Rooms & Suites" },
  { value: "4.9★", label: "Guest Rating" },
  { value: "1991", label: "Est. Year" },
  { value: "100m", label: "From the Sea" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=85&auto=format&fit=crop"
                alt="Kastellorizo island view"
                fill
                className="object-cover"
              />
              {/* Decorative gold border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#1A3A5C] text-white p-6 shadow-2xl"
            >
              <p className="font-serif text-3xl font-bold text-[#C9A84C]">30+</p>
              <p className="text-xs uppercase tracking-widest text-white/70 mt-1">
                Years of hospitality
              </p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight mb-6">
              The Spirit of the{" "}
              <span className="italic font-normal">Eastern Aegean</span>
            </h2>
            <div className="space-y-4 text-[#5A5650] leading-relaxed">
              <p>
                Perched at the edge of Europe, Kastellorizo is one of Greece's
                best-kept secrets — a tiny jewel of an island where time slows
                and the sea glitters with impossible clarity.
              </p>
              <p>
                Hotel Megisti was born from a passion for this extraordinary
                place. Every corner of the hotel reflects the island's layered
                history: Venetian balconies, Ottoman fountains, and the warm
                colours of houses that once greeted sailors from afar.
              </p>
              <p>
                We are a family-run boutique hotel with just{" "}
                <strong className="text-[#1A3A5C]">12 rooms and suites</strong>,
                each one crafted to feel like your own private corner of
                paradise.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-[#E5E0D8]">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  <p className="font-serif text-3xl font-bold text-[#C9A84C]">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#8A8680] mt-1">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
