# Content Management Guide — Kastellorizo Studios & Apartments

This guide explains how to update the website content **without writing code**.
All changes are free and take effect automatically when you push to GitHub (Vercel auto-deploys).

---

## 1. Update property info / contact details

Edit `src/data/site-config.ts`:

```ts
contact: {
  address: "Your address here",
  phone: "+30 22460 XXXXX",
  email: "info@yourdomain.gr",
  checkIn: "14:00",
  checkOut: "11:00",
},
```

---

## 2. Update accommodation listings

Edit `src/data/rooms.ts` (rooms, studios, apartments).

Each listing has these fields:
- `name` — e.g. studio or apartment name
- `description` — one-line description (shown on the card)
- `size` — e.g. `"35 m²"`
- `maxGuests` — number of guests
- `image` — URL or local path (see below)
- `amenities` — list of features
- `badge` — optional label like "Most Popular" (remove the line to hide it)

### To use your own photos:
1. Put your photo in `public/images/rooms/` (e.g. `public/images/rooms/sea-view.jpg`)
2. Change the `image` field to `"/images/rooms/sea-view.jpg"`

---

## 3. Update gallery images

Edit `src/data/gallery.ts`.

Each entry has:
- `src` — URL or local path
- `alt` — description (used by Google for image SEO — be descriptive!)
- `category` — `property` | `rooms` | `nature` | `village`

### To use your own photos:
1. Put your photos in `public/images/gallery/`
2. Change `src` to `"/images/gallery/your-photo.jpg"`

---

## 4. Update SEO settings

Edit `src/data/site-config.ts`:
- `siteUrl` — set to your real domain (e.g. `https://www.Kastellorizoaccommodation.de`)
- `keywords` — add relevant search terms
- `description` — shown in Google search results (keep under 160 characters)

---

## 5. Add an OG image (for social sharing)

Add a `1200×630px` image named `og-image.jpg` to the `public/` folder.
This is what appears when your link is shared on Facebook, WhatsApp, etc.

---

## 6. Deploy changes

1. Push to GitHub
2. Vercel will automatically rebuild and deploy (usually takes ~1 minute)
3. That's it!

---

## 7. Future booking system

When you're ready to add online booking, popular options are:
- **Booking.com Partner Widget** — embed their widget (free, no code changes needed)
- **Cloudbeds / Smoobu** — property management with booking widget
- **Custom form** — already set up in the Contact section, just wire up to an email service

The contact form is ready to connect to [Resend](https://resend.com) or [Formspree](https://formspree.io) (both have free tiers).
