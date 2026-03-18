import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/site-config";

const url = `${siteConfig.siteUrl}/contact`;
const desc =
  "Contact Monika & Damien Studios & Apartments in Kastellorizo, Greece—phone, Viber, WhatsApp, and email for bookings and questions about your Dodecanese stay.";

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description: desc,
  alternates: { canonical: url },
  openGraph: {
    title: `Contact & bookings — ${siteConfig.brandShort}`,
    description: desc,
    url,
    images: [
      {
        url: `${siteConfig.siteUrl}/contact/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.brandShort} for Kastellorizo accommodation`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <header className="pt-28 pb-4 px-6 lg:px-10 max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Plan your stay in{" "}
            <span className="italic font-normal text-[#1A3A5C]/80">
              Kastellorizo
            </span>
          </h1>
          <p className="text-[#8A8680] mt-4 leading-relaxed">
            Reach {siteConfig.name} by phone or email—we typically reply within
            24 hours.
          </p>
        </header>
        <Contact hideTopHeading />
      </main>
      <Footer />
    </>
  );
}
