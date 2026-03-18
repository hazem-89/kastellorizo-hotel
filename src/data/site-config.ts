/**
 * SITE CONFIGURATION
 * ==================
 * Update this file to change property information, contact details, and SEO settings.
 */

export const siteConfig = {
  /** Legal / SEO name */
  name: "Monika & Damien Studios & Apartments",

  /** Shorter name for title template (metadata) */
  brandShort: "Monika & Damien Studios",

  /** Hero: large first line + smaller second line */
  heroTitleLine1: "Monika and Damien's",
  heroTitleLine2: "Studios & Apartments",

  tagline: "Where the Aegean Meets Eternity",

  /** 150–160 chars, keywords: kastellorizo, studios, apartments, greece, dodecanese */
  description:
    "Family-run studios & apartments in Kastellorizo, Greece (Megisti). Stay in the Dodecanese near the Aegean—rooms, studios & holiday flats with warm, authentic island hospitality.",

  contact: {
    address: "Kastellorizo (Megisti), Dodecanese, 85111, Greece",
    /** Street-level hint for structured data */
    streetAddress: "Kastellorizo Old Town",
    phone: "+30 6978066375",
    phoneLabel: "Viber & WhatsApp",
    emails: ["dmkast@yahoo.co.uk", "damienblaksea@gmail.com"],
    checkIn: "14:00",
    checkOut: "11:00",
  },

  social: {
    facebook: "https://www.facebook.com/people/Diamantis-Mavrothalassitis/100000655580408/#",
    tripadvisor: "https://www.tripadvisor.com",
    instagramPlaceholder: "https://www.instagram.com/yourproperty",
    facebookPlaceholder: "https://www.facebook.com/yourproperty",
  },

  /** Placeholder production domain — replace when live */
  siteUrl: "https://yourdomain.com",

  keywords: [
    "kastellorizo studios",
    "kastellorizo apartments",
    "kastellorizo accommodation",
    "megisti greece",
    "dodecanese studios",
    "greece island apartments",
    "studios apartments kastellorizo",
    "family run apartments greece",
    "aegean holiday rentals",
    "kastellorizo booking",
    "dodecanese holidays",
    "kastellorizo hotels",
    "μεγίστη διαμερίσματα",
    "καστελλόριζο στούντιο",
    "eastern aegean accommodation",
  ],

  locale: "en_US",

  /** Primary hero image for schema / OG fallback */
  ogImagePath: "/images/hero/hero.jpg",

  priceRange: "€€",
} as const;
