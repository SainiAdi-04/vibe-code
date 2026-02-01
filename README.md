# Meraz Festival Connect 🎭✨

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

The official website for **Meraz** - IIT Bhilai's annual cultural festival. A cosmic-themed, interactive web experience featuring event showcases, venue mapping, gallery displays, and pass purchasing functionality.

## 🌟 Features

- **🎨 Cosmic Theme**: Beautiful gradient-based design with yellow-orange theme and smooth animations
- **⏱️ Live Countdown**: Real-time countdown timer to the festival date
- **🗺️ Interactive Venue Map**: Leaflet-powered map showing all festival locations at IIT Bhilai campus
- **📸 Parallax Gallery**: Stunning 3-column parallax scroll gallery with festival moments
- **🎫 Pass System**: Multiple pass tiers (Explorer, Star, Galaxy) with detailed features
- **📱 Responsive Design**: Fully responsive across all devices
- **🎭 Event Showcase**: Comprehensive listing of 50+ festival events
- **⚡ Performance**: Built with Vite for lightning-fast development and production builds

## 🚀 Tech Stack

### Core

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Maps & Visualization

- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 4.2.1** - React bindings for Leaflet
- **React Leaflet Cluster** - Marker clustering

### Forms & Validation

- **React Hook Form** - Form state management
- **Zod** - Schema validation

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd meraz-festival-connect-main

# Install dependencies
npm install

# For Leaflet dependencies (if needed)
npm install leaflet react-leaflet@4.2.1 react-leaflet-cluster @types/leaflet --legacy-peer-deps

# Start development server
npm run dev
```

The application will be available at `http://localhost:8081`

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

## 📁 Project Structure

```
src/
├── assets/          # Images, logos, and static assets
├── components/      # React components
│   ├── ui/         # shadcn/ui components
│   │   ├── interactive-map.tsx
│   │   ├── parallax-scroll.tsx
│   │   └── horizon-hero-section.tsx
│   ├── CountdownTimer.tsx
│   ├── EventCard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── NavLink.tsx
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
│   ├── Index.tsx   # Home page
│   ├── About.tsx   # About Meraz
│   ├── Events.tsx  # Events listing
│   ├── Gallery.tsx # Photo gallery
│   ├── Passes.tsx  # Pass purchasing
│   ├── Venue.tsx   # Interactive venue map
│   └── NotFound.tsx
├── App.tsx         # Main app component with routes
└── main.tsx        # Application entry point
```

## 🎨 Design System

### Color Palette

The website uses a warm **yellow-orange gradient theme**:

- Primary: `#ffff00` (Yellow) → `#ff6b35` (Red-Orange)
- Gradient stops: `#ffd700`, `#ffaa00`, `#ff8c00`

### Typography

- **Orbitron**: Primary font for headings and special text
- System fonts: For body text

### Custom CSS Classes

- `.text-gradient` - Yellow-orange text gradient
- `.bg-gradient-cosmic` - Background gradient
- `.bg-gradient-cosmic-hover` - Hover state gradient
- `.cosmic-card` - Card component with glassmorphism
- `.glow-box` - Glowing effect on hover

## 🗺️ Key Pages

### Home (`/`)

- Hero section with horizon animation
- Live countdown timer
- Feature highlights
- Call-to-action sections

### Events (`/events`)

- Comprehensive event listings
- Event categories and details
- Registration information

### Gallery (`/gallery`)

- Parallax scroll effect
- 24 curated festival moments
- Smooth animations

### Venue (`/venue`)

- Interactive Leaflet map
- 6 venue locations with markers
- Detailed venue information
- Custom colored markers

### Passes (`/passes`)

- Three pass tiers: Explorer (₹299), Star (₹599), Galaxy (₹999)
- Feature comparison
- Checkout flow integration

### About (`/about`)

- Festival history and timeline
- Vision and mission
- Core values
- Team information

## 🔧 Configuration

### Vite Config

Located at `vite.config.ts` - handles build optimization and dev server settings

### Tailwind Config

Located at `tailwind.config.ts` - custom theme configuration, colors, and plugins

### TypeScript Config

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js environment settings

## 🐛 Known Issues & Solutions

### Leaflet CSS Import

Leaflet CSS must be imported directly in the component file (`interactive-map.tsx`), not in `main.tsx`, when using Vite.

### React 18 Compatibility

This project uses `react-leaflet@4.2.1` (not v5) for React 18 compatibility. Install with `--legacy-peer-deps` flag if needed.

### Scrollbar Issues

Parallax scroll component uses page scroll, not container scroll, to avoid dual scrollbar issues.

## 📄 License

This project is part of Meraz - IIT Bhilai's annual cultural festival.

## 🤝 Contributing

This is a festival-specific project. For contributions or queries, please contact the Meraz organizing team at IIT Bhilai.

## 📞 Contact

- **Event**: Meraz Cultural Festival
- **Institution**: IIT Bhilai
- **Website**: [Link to be added]

---

**Built with ❤️ for Meraz 2026** - Where Stars Align ✨
