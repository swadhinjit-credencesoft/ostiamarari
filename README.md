# Ostia Marari — Next.js 14 Website

Production-grade Next.js 14 website cloned from **mudravillaandresort.com**  
Stack: **Next.js 14 · TypeScript · Tailwind CSS · Lucide React**

---

## Quick Start

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm start
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (Hero, Why Choose, Rooms, Attractions, Gallery, Reviews) |
| `/rooms-suites` | Full Rooms & Suites detail page |
| `/gallery` | Filterable photo gallery with lightbox |
| `/contact` | Contact form + Google Map |
| `/privacy-policy` | Privacy Policy |
| `/cancellation-policy` | Cancellation Policy |
| `/terms` | Terms & Conditions |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout (Navbar + Footer + WhatsApp)
│   ├── globals.css              # Global styles, fonts, utilities
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   ├── rooms-suites/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── cancellation-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx               # Sticky transparent → solid navbar
│   ├── Footer.tsx               # Full footer with map embed
│   ├── WhatsAppButton.tsx       # Fixed floating WhatsApp button
│   └── home/
│       ├── HeroSection.tsx      # Full-screen hero with Ken Burns
│       ├── WhyChooseSection.tsx # 3-card features section
│       ├── RoomsSection.tsx     # 4 rooms with images + booking CTA
│       ├── AttractionsSection.tsx # 3 nearby attractions
│       ├── GallerySection.tsx   # Filterable gallery + lightbox
│       └── TestimonialsSection.tsx # Infinite marquee reviews
└── lib/
    └── utils.ts                 # cn() utility
```

---

## Design System

| Token | Value |
|---|---|
| Primary gold | `#c9a84c` |
| Background dark | `#0a0a0a` |
| Background card | `#111111` |
| Heading font | Playfair Display |
| Body font | Raleway |

---

## Deploy to Vercel

```bash
npx vercel
```
Zero config — just run and it works.
