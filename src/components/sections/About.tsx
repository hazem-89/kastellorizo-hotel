"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const viewportOpts = { amount: 0.15, once: false };
const transition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

const stats = [
  { value: "9", label: "Studios & Apartments" },
  { value: "4.9★", label: "Guest Rating" },
  { value: "1991", label: "Est. Year" },
  { value: "100m", label: "From the Sea" },
];

function StatBlock({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOpts);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
    >
      <p className="font-serif text-3xl font-bold text-[#C9A84C]">{stat.value}</p>
      <p className="text-xs uppercase tracking-widest text-[#8A8680] mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, viewportOpts);
  const textInView = useInView(textRef, viewportOpts);
  const cardInView = useInView(cardRef, viewportOpts);

  return (
    <section id="about" className="py-28 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={transition}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Kastellorizo island view"
                fill
                className="object-cover"
              />
              {/* Decorative gold border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Floating accent card */}
            {/* <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#1A3A5C] text-white p-6 shadow-2xl"
            >
              <p className="font-serif text-3xl font-bold text-[#C9A84C]">30+</p>
              <p className="text-xs uppercase tracking-widest text-white/70 mt-1">
                Years of hospitality
              </p>
            </motion.div> */}
          </motion.div>

          {/* Text column */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={transition}
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
              Hello and welcome to Monika and
                    Damien’sstudios and apartments We can of er you
                    studios or apartments to make your
                    stay on Kastellorizo a pleasant and
                    memorable one. Below you can see
                    what we have to of er and if you have
                    any questions, feel free to ask us.
              </p>
              <p>
                Monika and Damien&apos;s studios and apartments were born from a passion
                for this extraordinary place. Every space reflects the island&apos;s layered
                history: Venetian balconies, Ottoman fountains, and the warm
                colours of houses that once greeted sailors from afar.
              </p>
              <p>
                We are family-run hosts with{" "}
                <strong className="text-[#1A3A5C]">5 rooms, 2 studios, and 2 two-room apartments</strong>
                — each one crafted to feel like your own private corner of
                paradise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
