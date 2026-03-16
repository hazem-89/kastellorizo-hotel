"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Sun,
  UtensilsCrossed,
  Wifi,
  Wind,
  Coffee,
  Map,
  ShipWheel,
} from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Crystal Clear Waters",
    description:
      "Step directly from the hotel onto the pier and dive into some of the clearest water in the Mediterranean.",
  },
  {
    icon: Sun,
    title: "Private Terraces",
    description:
      "Every room has its own outdoor space — savour your morning coffee with uninterrupted sea views.",
  },
  {
    icon: UtensilsCrossed,
    title: "Authentic Cuisine",
    description:
      "Freshly caught fish, local olive oil, and traditional Dodecanese recipes — breakfast served daily.",
  },
  {
    icon: Wifi,
    title: "Free High-Speed Wi-Fi",
    description:
      "Stay connected throughout the property with complimentary high-speed internet.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "All rooms are fully air-conditioned for comfortable Mediterranean summers.",
  },
  {
    icon: Coffee,
    title: "Daily Breakfast",
    description:
      "Start your day with a generous Greek breakfast — honey, pastries, fresh fruit, and local cheeses.",
  },
  {
    icon: Map,
    title: "Island Concierge",
    description:
      "Local tips, boat trip arrangements, and insider knowledge of Kastellorizo's hidden treasures.",
  },
  {
    icon: ShipWheel,
    title: "Boat Excursions",
    description:
      "We can arrange day trips to the Blue Cave (Galazia Spilia) and surrounding sea caves.",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-[#1A3A5C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
            A Complete Island{" "}
            <span className="italic font-normal text-white/70">Experience</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="group p-6 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 hover:border-[#C9A84C]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/30 transition-colors">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  {feat.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
