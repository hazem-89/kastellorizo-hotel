/**
 * GALLERY DATA
 * ============
 * Images from public/images/island — Kastellorizo / Meis island.
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "hotel" | "rooms" | "nature" | "village";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/island/kastellorizo.jpg",
    alt: "Kastellorizo harbor and village",
    category: "village",
  },
  {
    id: "g2",
    src: "/images/island/Meis2.jpg",
    alt: "Meis island view",
    category: "nature",
  },
  {
    id: "g3",
    src: "/images/island/unnamed.jpg",
    alt: "Kastellorizo island scenery",
    category: "village",
  },
  {
    id: "g4",
    src: "/images/island/unnamed (1).jpg",
    alt: "Kastellorizo coastline",
    category: "nature",
  },
  {
    id: "g5",
    src: "/images/island/unnamed (5).jpg",
    alt: "Aegean view from Kastellorizo",
    category: "nature",
  },
  {
    id: "g6",
    src: "/images/island/unnamed (7).jpg",
    alt: "Kastellorizo waters and landscape",
    category: "nature",
  },
  {
    id: "g7",
    src: "/images/island/unnamed (9).jpg",
    alt: "Kastellorizo island vista",
    category: "village",
  },
  {
    id: "g8",
    src: "/images/island/unnamed (11).jpg",
    alt: "Kastellorizo and the Aegean Sea",
    category: "nature",
  },
];
