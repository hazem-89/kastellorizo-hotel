import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.siteUrl;
const ogImageUrl = `${siteUrl}/opengraph-image`;

const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: "Kastellorizo",
    addressRegion: "Dodecanese",
    postalCode: "85111",
    addressCountry: "GR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1476,
    longitude: 29.5913,
  },
  image: [`${siteUrl}${siteConfig.ogImagePath}`],
  priceRange: siteConfig.priceRange,
  checkinTime: siteConfig.contact.checkIn,
  checkoutTime: siteConfig.contact.checkOut,
  sameAs: [
    siteConfig.social.facebookPlaceholder,
    siteConfig.social.instagramPlaceholder,
    siteConfig.social.tripadvisor,
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.brandShort} — Kastellorizo Studios & Apartments`,
    template: `%s | ${siteConfig.brandShort}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Kastellorizo, Greece`,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Studios & Apartments in Kastellorizo, Dodecanese, Greece`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandShort} — Kastellorizo`,
    description: siteConfig.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Time stamp for last modification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingJsonLd),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-[#FAF8F4] text-[#1C1C1C]`}
      >
        {children}
      </body>
    </html>
  );
}
