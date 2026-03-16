"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a backend / email service (e.g. Resend, Formspree)
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#FAF8F4] border border-[#E5E0D8] rounded-sm text-sm text-[#1A3A5C] placeholder:text-[#B0A89F] focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors";

  return (
    <section id="contact" className="py-28 bg-[#FAF8F4]">
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
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Plan Your{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">Stay</span>
          </h2>
          <p className="text-[#8A8680] mt-4 max-w-lg mx-auto leading-relaxed">
            We'd love to hear from you. Fill in the form or reach us directly —
            we reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#1A3A5C] text-white p-8 rounded-sm">
              <h3 className="font-serif text-xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                      Address
                    </p>
                    <p className="text-sm text-white/80">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm text-white/80 hover:text-[#C9A84C] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-white/80 hover:text-[#C9A84C] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <Clock size={14} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50 mb-1">
                      Check-in / Check-out
                    </p>
                    <p className="text-sm text-white/80">
                      Check-in from {siteConfig.contact.checkIn}
                    </p>
                    <p className="text-sm text-white/80">
                      Check-out by {siteConfig.contact.checkOut}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Season note */}
            <div className="p-6 border border-[#E5E0D8] rounded-sm bg-white">
              <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-2">
                Season
              </p>
              <p className="text-sm text-[#6B6860] leading-relaxed">
                We are open from <strong className="text-[#1A3A5C]">April to October</strong>.
                The best months to visit Kastellorizo are May–June and
                September–October for mild weather and fewer crowds.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white border border-[#E5E0D8] rounded-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mb-6">
                  <Send size={28} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A3A5C] mb-3">
                  Message Sent!
                </h3>
                <p className="text-[#8A8680] max-w-sm leading-relaxed">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#C9A84C] underline underline-offset-4 hover:text-[#b8934a] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E5E0D8] rounded-sm p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={form.checkIn}
                      onChange={(e) =>
                        setForm({ ...form, checkIn: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={form.checkOut}
                      onChange={(e) =>
                        setForm({ ...form, checkOut: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+30 ..."
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A8680] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your stay, any special requests..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A3A5C] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#C9A84C] transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Send Enquiry
                </button>
                <p className="text-xs text-[#B0A89F] text-center">
                  We reply within 24 hours · Your data is never shared
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
