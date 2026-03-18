"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

const viewportOpts = { amount: 0.15, once: false };
const transition = { duration: 0.8 };
const itemTransition = { duration: 0.6 };

function GalleryImage({
  img,
  index,
  onSelect,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOpts);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.07, ...itemTransition }}
      className="break-inside-avoid"
    >
      <div
        className="group relative overflow-hidden rounded-sm cursor-pointer"
        onClick={onSelect}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={600}
          height={index % 3 === 0 ? 500 : 400}
          className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1A3A5C]/0 group-hover:bg-[#1A3A5C]/50 transition-all duration-400 flex items-center justify-center">
          <motion.div
            initial={false}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
              <ZoomIn size={20} className="text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedImage = galleryImages.find((g) => g.id === selected);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, viewportOpts);

  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={transition}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Life at{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">
              Kastellorizo island
            </span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <GalleryImage
              key={img.id}
              img={img}
              index={i}
              onSelect={() => setSelected(img.id)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          showCloseButton={false}
          className="!fixed !inset-2 sm:!inset-4 md:!inset-6 !left-2 !right-2 !top-2 !bottom-2 sm:!left-4 sm:!right-4 sm:!top-4 sm:!bottom-4 md:!left-6 md:!right-6 md:!top-6 md:!bottom-6 !flex !h-[calc(100dvh-1rem)] sm:!h-[calc(100dvh-2rem)] !max-h-none !w-auto !max-w-none !translate-x-0 !translate-y-0 flex-col gap-0 rounded-sm border-0 bg-black p-0 shadow-2xl overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/85"
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative min-h-0 flex-1 w-full"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
          {selectedImage && (
            <p className="shrink-0 border-t border-white/10 bg-black/80 px-4 py-3 text-center text-sm text-white/70 backdrop-blur-sm">
              {selectedImage.alt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
