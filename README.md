# ABB Workspace Office Landing Page

A modern, responsive landing page for ABB's innovative workspace office, built with Nuxt 4 and Nuxt UI.

## Features

- 🎨 **Modern Design**: Clean, professional interface with ABB brand colors
- 📱 **Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark Mode**: Built-in dark/light mode support
- ⚡ **Performance**: Optimized with Nuxt 4 and modern web technologies
- 🧩 **Component-Based**: Modular architecture using Nuxt UI components
- 🎯 **SEO Optimized**: Meta tags and structured data for better search visibility

## Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Nuxt UI
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons via Nuxt Icon
- **Images**: Nuxt Image for optimized loading
- **TypeScript**: Full type safety

## Project Structure

```
app/
├── components/          # Reusable Vue components
│   ├── WorkspaceHero.vue       # Hero section
│   ├── WorkspaceFeatures.vue   # Features showcase
│   ├── WorkspaceShowcase.vue   # Space gallery
│   ├── WorkspaceCTA.vue        # Call-to-action
│   ├── UHeader.vue             # Navigation header
│   └── UFooter.vue             # Footer
├── pages/              # File-based routing
│   ├── index.vue       # Landing page
│   ├── book.vue        # Booking page
│   └── contact.vue     # Contact page
├── assets/css/         # Global styles
│   └── main.css        # Tailwind imports & custom styles
└── app.vue            # Root component

public/
└── images/            # Static images
```

## Development

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Setup

1. Install dependencies:
```bash
yarn install
```

2. Start development server:
```bash
yarn dev
```

3. Open http://localhost:3000

### Build

```bash
# Build for production
yarn build

# Preview production build
yarn preview

# Generate static site
yarn generate
```

## Features Overview

### 🏢 Hero Section
- Compelling headline and description
- Call-to-action buttons for booking and virtual tour
- ABB brand styling with gradient backgrounds

### ⚡ Features Showcase
- Grid layout highlighting workspace amenities
- Technology integration highlights
- Icon-based feature cards

### 🖼️ Workspace Gallery
- Visual tour of different workspace areas
- Interactive cards with space details
- Statistics and metrics display

### 📞 Call-to-Action
- Contact information and operating hours
- Multiple engagement options
- Social proof and company trust signals

### 🧭 Navigation
- Responsive header with mobile menu
- Smooth scrolling to page sections
- Dark/light mode toggle

### 📱 Mobile-First Design
- Optimized for all screen sizes
- Touch-friendly interactions
- Progressive enhancement

## Brand Guidelines

The project follows ABB's brand guidelines:

- **Primary Red**: #ef4444 (red-500)
- **Dark Red**: #dc2626 (red-600)  
- **Typography**: Inter font family
- **Color Scheme**: Red, black, white, and gray tones
- **Modern, clean aesthetic with professional styling

## Customization

### Colors
Brand colors are defined in `tailwind.config.ts` and can be easily modified:

```typescript
colors: {
  red: {
    500: '#ef4444', // Primary ABB Red
    600: '#dc2626', // Darker ABB Red
    // ... other shades
  }
}
```

### Content
Update content in the respective component files:
- Hero content: `components/WorkspaceHero.vue`
- Features: `components/WorkspaceFeatures.vue`
- Showcase: `components/WorkspaceShowcase.vue`

### Images
Add workspace images to `public/images/` directory following the naming convention in `public/images/README.md`.

## Deployment

The project can be deployed to any hosting platform supporting Nuxt:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop deployment
- **Digital Ocean**: App Platform
- **Traditional hosting**: Generate static files with `yarn generate`

## License

This project is proprietary to ABB Ltd. All rights reserved.
