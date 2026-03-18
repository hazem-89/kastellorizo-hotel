import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Rooms from "@/components/sections/Rooms";
import { siteConfig } from "@/data/site-config";

const url = `${siteConfig.siteUrl}/rooms`;
const desc =
  "Browse our studios and apartments in Kastellorizo, Greece—family-run rooms in the Dodecanese near the Aegean. Photos of accommodations on Megisti island.";

export const metadata: Metadata = {
  title: "Rooms, Studios & Apartments",
  description: desc,
  alternates: { canonical: url },
  openGraph: {
    title: `Studios & Apartments — ${siteConfig.brandShort}`,
    description: desc,
    url,
    images: [
      {
        url: `${siteConfig.siteUrl}/rooms/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Studios and apartments interior and exterior — Kastellorizo, Greece`,
      },
    ],
  },
};

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main>
        <article className="pt-28 pb-8 px-6 lg:px-10 max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            Accommodations
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            Studios & apartments in{" "}
            <span className="italic font-normal text-[#1A3A5C]/80">
              Kastellorizo
            </span>
          </h1>
          <p className="text-[#8A8680] mt-4 max-w-2xl mx-auto leading-relaxed">
            Family-run stays in the Dodecanese—each room, studio, and apartment
            reflects the character of Greece&apos;s easternmost island.
          </p>
        </article>
        <Rooms hideTopHeading />
      </main>
      <Footer />
    </>
  );
}
