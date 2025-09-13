# NovaCoffee — Landing Website (Vite + Tailwind CSS)

**Figma:** [Figma link](https://www.figma.com/design/dtyEOCCrjoYc57DNZ8Y5N3/NovaCoffee?node-id=223-56245&m=dev&t=B8YN1MgX1mBNYopg-1)

**Demo:** https://nova-coffee.netlify.app/  


A responsive, accessible coffee brand landing site built with **Vite** and **Tailwind CSS 3**.

It includes:
- A **fixed navbar** that **changes color** and **shrinks** on scroll (transparent → beige, large → compact).
- A **Hero** with responsive background positioning (left text space from `lg+`).
- **Products** grid (2×2 on mobile/tablet, 1×4 on desktop) with subtle image hover.
- **Origins** full-bleed banner with responsive aspect ratios.
- **“Sips of Trust”** reviews (static grid; side arrows placed via 3-column layout so they never overlap).
- **Smooth anchor scrolling** with offset for the fixed navbar.
- **Dark mode** (class strategy).
- A fully responsive **Footer** matching the Figma layout across `sm`, `md/lg`, and `xl`.

---

## Tech Stack

- **Vite**
- **Tailwind CSS 3**
- **Vanilla JS** (small scroll handler for the navbar)
- **Google Fonts**: Albert Sans

---

## Prerequisites

- **Node.js** ≥ 18  
- **npm** ≥ 8

---

## Setup

```bash
# 1) Install dependencies
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview production build
npm run preview

```

## Project Structure
```
.
├─ index.html                  # main HTML
├─ src/
│  ├─ main.js                  # JS entry (navbar scroll logic init, etc.)
│  └─ style.css                # Tailwind input (if used)
├─ public/                     # static assets served at /
│  ├─ hero-bg.png
│  ├─ xl-hero-bg.png
│  ├─ origin-bg.png
│  ├─ product1.png … product4.png
│  ├─ avatar1.png avatar2.png avatar3.png
│  ├─ google.svg
│  ├─ menu.svg search.svg cart.svg
│  ├─ arrow-left.svg arrow-right.svg
│  ├─ fb.svg insta.svg
│  └─ (any other images/icons)
├─ tailwind.config.js          # Tailwind theme customization
├─ postcss.config.js
├─ package.json
└─ README.md
```



## Tailwind Configuration

Key points used in this project:

- Dark Mode strategy: media 
- Custom palette with coffee & beige tones
- Font family setup for Albert Sans

Example:
```javascript
// tailwind.config.js
export default {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        coffee: {
          500: "#331B07", // cta, section darkmode
          400: "#3A1C03" // cta hover
        },
        beige: {
          50: "#E8DCCF", //cta text
          200: "#DCC8B2", // testi chiari, cta light mode
          lighter: "#F5E9DD", // side menu, footer light mode
        },
      },
      fontFamily: {
        sans: ["'Albert Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
```
