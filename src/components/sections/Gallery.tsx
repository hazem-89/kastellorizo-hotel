"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedImage = galleryImages.find((g) => g.id === selected);

  return (
    <section id="gallery" className="py-28 bg-white">
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
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Life at{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">
              Hotel Megisti
            </span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="break-inside-avoid"
            >
              <div
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setSelected(img.id)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 500 : 400}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
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
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-0 overflow-hidden">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <AnimatePresence mode="wait">
            {selectedImage && (
              <motion.div
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-video"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
          {selectedImage && (
            <p className="p-4 text-center text-white/60 text-sm">
              {selectedImage.alt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
