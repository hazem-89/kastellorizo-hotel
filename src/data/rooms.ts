/**
 * ACCOMMODATION DATA (rooms, studios, apartments)
 * ===============================================
 * To add, remove, or update listings:
 *   1. Replace the image URL with your own photo URL or a path like "/images/rooms/my-room.jpg"
 *      (put photos in the /public/images/rooms/ folder for local images)
 *   2. Edit name, description, size, and amenities below
 *   3. Save the file and push to GitHub — the site will update automatically
 */

export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  size: string;
  maxGuests: number;
  image: string;
  badge?: string;
  amenities: string[];
}

export const rooms: Room[] = [
  {
    id: "sea-view-suite",
    name: "Sea View Suite",
    description: "Panoramic Aegean views from your private terrace.",
    longDescription:
      "Our flagship suite wraps you in luxury while the turquoise Aegean stretches endlessly before you. Wake to the sound of gentle waves and watch the sun dip below the horizon from your private terrace.",
    size: "55 m²",
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=85&auto=format&fit=crop",
    badge: "Most Popular",
    amenities: [
      "Sea-facing terrace",
      "King bed",
      "Ensuite bath & rain shower",
      "Air conditioning",
      "Mini bar",
      "Free Wi-Fi",
    ],
  },
  {
    id: "superior-double",
    name: "Superior Double",
    description: "Elegant stone interiors with a furnished balcony.",
    longDescription:
      "Inspired by Kastellorizo's Venetian heritage, this room blends traditional stone walls with modern comforts. Step onto your private balcony and breathe in the Mediterranean air.",
    size: "35 m²",
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85&auto=format&fit=crop",
    amenities: [
      "Private balcony",
      "Double bed",
      "Ensuite shower",
      "Air conditioning",
      "Safe",
      "Free Wi-Fi",
    ],
  },
  {
    id: "classic-room",
    name: "Classic Room",
    description: "Intimate and charming — the essence of island simplicity.",
    longDescription:
      "Cosy and beautifully appointed, our classic spaces reflect the authentic character of the island. Perfect for those who seek simplicity without sacrificing comfort.",
    size: "22 m²",
    maxGuests: 2,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85&auto=format&fit=crop",
    amenities: [
      "Garden view",
      "Double or twin beds",
      "Ensuite shower",
      "Air conditioning",
      "Free Wi-Fi",
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious two-room suite for families or extended stays.",
    longDescription:
      "With a generous living area and two separate sleeping zones, our Family Suite is ideal for families, couples, or guests staying longer. Enjoy ample space and full sea views.",
    size: "70 m²",
    maxGuests: 4,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&auto=format&fit=crop",
    badge: "Best for Families",
    amenities: [
      "Two bedrooms",
      "Sea-view terrace",
      "Living area",
      "Ensuite bath & shower",
      "Air conditioning",
      "Mini kitchen",
      "Free Wi-Fi",
    ],
  },
];
