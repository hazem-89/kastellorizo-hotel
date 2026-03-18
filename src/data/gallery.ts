/**
 * GALLERY DATA
 * ============
 * Images from public/images/island — Kastellorizo / Meis island.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "property" | "rooms" | "nature" | "village";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/island/kastellorizo.jpg",
    alt: "Kastellorizo harbour, colourful houses and calm Aegean — Dodecanese Greece",
    category: "village",
  },
  {
    id: "g2",
    src: "/images/island/Meis2.jpg",
    alt: "Megisti (Kastellorizo) coastline and blue sea — eastern Greece",
    category: "nature",
  },
  {
    id: "g3",
    src: "/images/island/unnamed.jpg",
    alt: "Kastellorizo village lanes and island scenery near studios and apartments",
    category: "village",
  },
  {
    id: "g4",
    src: "/images/island/unnamed (1).jpg",
    alt: "Kastellorizo rocky coastline and Mediterranean waters",
    category: "nature",
  },
  {
    id: "g5",
    src: "/images/island/unnamed (5).jpg",
    alt: "Aegean seascape from Kastellorizo — Dodecanese island views",
    category: "nature",
  },
  {
    id: "g6",
    src: "/images/island/unnamed (7).jpg",
    alt: "Crystal waters and landscape around Kastellorizo Greece",
    category: "nature",
  },
  {
    id: "g7",
    src: "/images/island/unnamed (9).jpg",
    alt: "Kastellorizo town vista — traditional architecture Megisti",
    category: "village",
  },
  {
    id: "g8",
    src: "/images/island/unnamed (11).jpg",
    alt: "Kastellorizo island and open Aegean Sea — Greece holidays",
    category: "nature",
  },
];
