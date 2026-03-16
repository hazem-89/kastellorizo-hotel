"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Maximize2, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { rooms } from "@/data/rooms";

export default function Rooms() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rooms" className="py-28 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Rooms &{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">Suites</span>
          </h2>
          <p className="text-[#8A8680] mt-4 max-w-xl mx-auto leading-relaxed">
            Each of our 12 rooms is individually designed to reflect the unique
            character of Kastellorizo.
          </p>
        </motion.div>

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <motion.article
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white border border-[#E5E0D8] rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {room.badge && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#C9A84C] text-white border-0 text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
                      {room.badge}
                    </Badge>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1A3A5C]/0 group-hover:bg-[#1A3A5C]/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-[#1A3A5C]">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#8A8680] shrink-0 ml-4">
                    <span className="flex items-center gap-1">
                      <Maximize2 size={12} />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {room.maxGuests}
                    </span>
                  </div>
                </div>

                <p className="text-[#6B6860] text-sm leading-relaxed mb-4">
                  {room.description}
                </p>

                {/* Amenities */}
                <ul className="grid grid-cols-2 gap-y-1.5 mb-6">
                  {room.amenities.slice(0, 4).map((am) => (
                    <li
                      key={am}
                      className="flex items-center gap-2 text-xs text-[#8A8680]"
                    >
                      <Check size={11} className="text-[#C9A84C] shrink-0" />
                      {am}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 border border-[#1A3A5C] text-[#1A3A5C] text-xs uppercase tracking-widest font-semibold hover:bg-[#1A3A5C] hover:text-white transition-all duration-300 rounded-sm"
                >
                  Enquire &amp; Book
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
