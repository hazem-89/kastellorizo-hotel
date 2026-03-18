import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Rooms from "@/components/sections/Rooms";
import HowToGetHere from "@/components/sections/HowToGetHere";
import Gallery from "@/components/sections/Gallery";
import CarettaGiftShop from "@/components/sections/CarettaGiftShop";
import Contact from "@/components/sections/Contact";
import { siteConfig } from "@/data/site-config";

const url = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Studios & Apartments in Kastellorizo",
  description: siteConfig.description,
  alternates: { canonical: url },
  openGraph: {
    title: `${siteConfig.name} — Kastellorizo, Greece`,
    description: siteConfig.description,
    url,
    images: [
      {
        url: `${url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Aegean harbour view — ${siteConfig.brandShort}, Kastellorizo Dodecanese`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Rooms />
        <Gallery />
        <CarettaGiftShop />
        <Contact />
        <HowToGetHere />
      </main>
      <Footer />
    </>
  );
}
