/**
 * GALLERY DATA
 * ============
 * To update gallery images:
 *   1. Replace the image URL with your own photo (Unsplash URL or "/images/gallery/my-photo.jpg")
 *   2. Update the alt text (important for SEO and accessibility)
 *   3. Save and push to GitHub
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
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=85&auto=format&fit=crop",
    alt: "Kastellorizo harbor with colorful Venetian houses",
    category: "village",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85&auto=format&fit=crop",
    alt: "Hotel pool overlooking the Aegean Sea",
    category: "hotel",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85&auto=format&fit=crop",
    alt: "Whitewashed Greek island architecture",
    category: "village",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1596436100849-8a27ad8db08c?w=1200&q=85&auto=format&fit=crop",
    alt: "Luxury suite interior with sea views",
    category: "rooms",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1200&q=85&auto=format&fit=crop",
    alt: "Terrace dining with Mediterranean sunset",
    category: "hotel",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1200&q=85&auto=format&fit=crop",
    alt: "Crystal clear Aegean waters near Kastellorizo",
    category: "nature",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=85&auto=format&fit=crop",
    alt: "Elegant hotel bedroom with balcony doors open",
    category: "rooms",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=1200&q=85&auto=format&fit=crop",
    alt: "Aegean sunset view from the island",
    category: "nature",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=85&auto=format&fit=crop",
    alt: "Hotel courtyard with stone architecture",
    category: "hotel",
  },
];
