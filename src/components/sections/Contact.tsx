"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const viewportOpts = { amount: 0.15, once: false };
const transition = { duration: 0.8 };

function gmailComposeUrl(email: string) {
  const to = encodeURIComponent(email);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`;
}

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, viewportOpts);
  const infoInView = useInView(infoRef, viewportOpts);

  return (
    <section id="contact" className="py-28 bg-[#FAF8F4]">
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
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Plan Your{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">Stay</span>
          </h2>
          <p className="text-[#8A8680] mt-4 max-w-lg mx-auto leading-relaxed">
            Reach us directly by phone or email — we reply within 24 hours.
          </p>
        </motion.div>

        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 24 }}
          animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={transition}
          className="space-y-8"
        >
          {/* Contact Information — full width */}
          <div className="bg-[#1A3A5C] text-white p-8 lg:p-10 rounded-sm w-full">
            <h3 className="font-serif text-xl font-bold mb-8 text-center lg:text-left">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                    Address
                  </p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                    Phone ({siteConfig.contact.phoneLabel})
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:col-span-2 xl:col-span-1">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                    Email
                  </p>
                  <div className="flex flex-col gap-1">
                    {siteConfig.contact.emails.map((email) => (
                      <a
                        key={email}
                        href={gmailComposeUrl(email)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors break-all underline-offset-2 hover:underline"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                    Check-in / Check-out
                  </p>
                  <p className="text-sm text-white/90">
                    Check-in from {siteConfig.contact.checkIn}
                  </p>
                  <p className="text-sm text-white/90">
                    Check-out by {siteConfig.contact.checkOut}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Season note */}
          <div className="p-6 border border-[#E5E0D8] rounded-sm bg-white w-full">
            <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-2">
              Season
            </p>
            <p className="text-sm text-[#6B6860] leading-relaxed max-w-3xl">
              We are open from <strong className="text-[#1A3A5C]">April to October</strong>.
              The best months to visit Kastellorizo are May–June and
              September–October for mild weather and fewer crowds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
