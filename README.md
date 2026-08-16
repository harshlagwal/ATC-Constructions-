# Amit Traders & Constructions (ATC)

A modern, high-performance web platform for **Amit Traders & Constructions (ATC)** — a trusted government contractor and premier supplier of high-grade building & construction materials across Himachal Pradesh.

---

## 🌟 Overview

Amit Traders & Constructions is an officially awarded 5-year contract partner for Gram Panchayat infrastructure projects and a top-rated supplier for residential, commercial, and government construction needs.

This web application provides an interactive experience for customers, contractors, and panchayat representatives to explore materials, calculate/request real-time quotes, view delivery fleet specifications, and connect directly with the operations team.

---

## ✨ Key Features

- **🧱 Material Showcase**: Detailed catalog of sand, crushed stone (bajri), aggregates, bricks, TMT steel bars, and ACC/Ambuja cement.
- **🚚 Fleet & Logistics**: Dedicated high-capacity transport fleet (tipper trucks, tractors) ensuring rapid doorstep & off-road site delivery.
- **🏛️ Govt. Project Portfolio**: Official tender & Gram Panchayat verification section (Lagdevi, Pohanj, Jandru).
- **📋 Smart Instant Quotation**: Interactive quote request system with direct follow-up integration via WhatsApp & Email.
- **📱 Responsive & Mobile Optimized**: Tailored mobile action bar, quick calling, adaptive layouts, and seamless scroll-to-top experience.
- **⚡ Ultra Fast & Modern UI**: Built with React 19, Tailwind CSS, smooth animations, and optimized asset delivery.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
├── public/                 # Static assets, icons, manifest
├── src/
│   ├── assets/             # Images and media assets
│   ├── components/
│   │   ├── layout/         # Header, Footer, MobileActionBar
│   │   └── ui/             # Buttons, Modals, Logo, ScrollToTop, WhatsApp
│   ├── config/             # Business info, material catalog & contact details
│   ├── pages/              # Legal pages (Privacy Policy, Terms of Service)
│   ├── sections/           # Landing page sections (Hero, Materials, Fleet, Contact, etc.)
│   ├── App.jsx             # Main Application router & state
│   ├── index.css           # Global typography & Tailwind styles
│   └── main.jsx            # React root entry point
├── package.json            # Project dependencies and build scripts
├── tailwind.config.js      # Custom theme colors and design tokens
└── vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshlagwal/ATC-Constructions-.git
   cd ATC-Constructions-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to view the live app.

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Configuration

Business contact details, owner info, services, and materials can be customized in:
`src/config/business.js`

---

## 👨‍💻 Developer & Credits

- **Project Lead / Developer**: [Harsh Lagwal](https://github.com/harshlagwal)
- **Business Owner**: Amit Thakur (Amit Traders & Constructions)

---

## 📄 License

This project is proprietary and built for Amit Traders & Constructions. All rights reserved.
