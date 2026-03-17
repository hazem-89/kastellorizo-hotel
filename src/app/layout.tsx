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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Boutique Hotel in Kastellorizo, Greece`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Boutique Hotel in Kastellorizo, Greece`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Kastellorizo, Greece`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Boutique Hotel in Kastellorizo`,
    description: siteConfig.description,
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
    canonical: siteConfig.siteUrl,
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
        {/* Schema.org structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.siteUrl,
              telephone: siteConfig.contact.phone,
              email: siteConfig.contact.emails[0],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kastellorizo",
                addressRegion: "Dodecanese",
                addressCountry: "GR",
                postalCode: "85111",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1476,
                longitude: 29.5913,
              },
              starRating: {
                "@type": "Rating",
                ratingValue: "4",
              },
              checkinTime: siteConfig.contact.checkIn,
              checkoutTime: siteConfig.contact.checkOut,
            }),
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
