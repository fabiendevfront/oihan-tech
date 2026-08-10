# Oihan Tech – Professional Website

[![Lighthouse Score: 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen.svg)](https://oihantech.fr)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

## 🌲 Overview

Static one-page website for **Oihan Tech**, a freelance IT services micro-business based in Anglet (Basque Country, France).

The name "Oihan" translates to "forest" in Basque. The design system is heavily inspired by local nature, featuring a primary teal palette (`#047272`), organic curves, and a strong commitment to digital sustainability and accessibility.

## 🛠️ Tech Stack & Architecture

- **HTML5 / Vanilla JS / Tailwind CSS (v4)** — This stack was an intentional choice. It ensures maximum SEO compatibility (fully server-renderable HTML), a minimal carbon footprint, and strict adherence to eco-design principles.
- **Vite** — Fast development server and optimized production build.
- **Web3Forms** — Simple, serverless contact form handling with hCaptcha anti-spam protection.

> **Technical Note:** Heavy JavaScript frameworks (like React) were deliberately avoided for this initial showcase site to prevent unnecessary JS hydration overhead and prioritize load speed. As the business and the website's features grow, the architecture will evolve towards **Next.js** to maintain advanced SEO while handling more complex routing and server-side rendering.

## ✨ Key Features

- **📱 Mobile-first responsive design** with a custom bottom-sheet mobile menu.
- **🌓 Dark / Light mode toggle** saving user preferences to `localStorage`.
- **♿ 100/100 Accessibility (a11y)**:
  - Native HTML `<dialog>` implementation for service modals (with backdrop click-to-close).
  - Keyboard navigation support ("skip to content" link, focus traps, sensible DOM ordering).
  - WCAG AA compliant color contrast ratios across all themes.
- **🔒 Privacy & Anti-Scraping**:
  - Client-side obfuscation of email and phone data to deter basic HTML scrapers.
  - No invasive third-party cookies.
- **🌍 Advanced Local SEO**:
  - JSON-LD LocalBusiness Schema injected.
  - Open Graph & Twitter Cards configured.
  - Custom `robots.txt` and `sitemap.xml`.
- **🍃 Eco-conception**:
  - CSS SVG sprites used to reduce DOM size and network payload.
  - Self-hosted `Jost` fonts (`font-display: swap`).
  - WebP image compression.

## 📦 Deployment

The project is currently hosted on **Infomaniak**.
The Vite build process automatically outputs optimized static assets to the `dist/` directory. Only the compiled contents of this `dist/` folder are uploaded to the production server.
