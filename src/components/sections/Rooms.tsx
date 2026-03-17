"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ROOM_IMAGES = [
  "/images/rooms/room-1.jpg",
  "/images/rooms/room-2.jpg",
  "/images/rooms/room-3.jpg",
  "/images/rooms/room-4.jpg",
  "/images/rooms/room-5.jpg",
  "/images/rooms/homepage-5.jpg",
];

const L = ROOM_IMAGES.length;

function getIndices(center: number) {
  return {
    prev: (center - 1 + L) % L,
    curr: center,
    next: (center + 1) % L,
  };
}

export default function Rooms() {
  const [index, setIndex] = useState(0);
  const { prev, curr, next } = getIndices(index);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % L);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + L) % L);
  }, []);

  useEffect(() => {
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [goNext]);

  return (
    <section id="studios" className="py-28 bg-[#FAF8F4]">
      <div className="max-w-[108rem] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Studios &{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">Apartments</span>
          </h2>
          <p className="text-[#8A8680] mt-4 max-w-xl mx-auto leading-relaxed">
            A glimpse of our studios and apartments. Each is individually designed to reflect the
            character of Kastellorizo.
          </p>
        </div>

        {/* Slider row: prev button | images | next button */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={goPrev}
            className="shrink-0 w-12 h-12 rounded-full bg-white border border-[#E5E0D8] hover:bg-[#FAF8F4] hover:border-[#C9A84C] text-[#1A3A5C] shadow-md flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 items-stretch">
              {/* Left — desktop only */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#E5E0D8] hidden md:block">
                <Image
                  src={ROOM_IMAGES[prev]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 28vw, 420px"
                />
              </div>

              {/* Center — full width on mobile, middle column on md+ */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#E5E0D8] shadow-lg ring-2 ring-[#C9A84C]/30">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={curr}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={ROOM_IMAGES[curr]}
                      alt={`Accommodation ${curr + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 28vw, 420px"
                      priority={curr <= 1}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right — desktop only */}
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#E5E0D8] hidden md:block">
                <Image
                  src={ROOM_IMAGES[next]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 28vw, 420px"
                />
              </div>
            </div>

            {/* Dots below the slider */}
            <div className="flex justify-center gap-2 mt-6">
              {ROOM_IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === index
                      ? "bg-[#C9A84C] scale-110"
                      : "bg-[#8A8680]/40 hover:bg-[#8A8680]/60"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="shrink-0 w-12 h-12 rounded-full bg-white border border-[#E5E0D8] hover:bg-[#FAF8F4] hover:border-[#C9A84C] text-[#1A3A5C] shadow-md flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
