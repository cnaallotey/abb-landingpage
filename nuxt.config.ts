import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {    plugins: [      tailwindcss(),    ],  },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/sitemap'
  ],
  
    content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  // SEO Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Africa Business Bureau - Premium Workspace Solutions',
      meta: [
        {
          name: 'description',
          content: 'Discover Africa Business Bureau\'s state-of-the-art workspace solutions designed for innovation, collaboration, and productivity.'
        }
      ]
    }
  },

  // Content configuration
  content: {
    // Enable code highlighting
    highlight: {
      theme: 'github-light'
    }
  },

  // Image optimization
  image: {
    // Enable image optimization
    quality: 85,
    format: ['webp', 'avif', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://workspace.abb.com',
    gzip: true,
    routes: [
      '/',
      '/services',
      '/about',
      '/contact',
      '/spaces',
      '/membership'
    ]
  },

  // Runtime config for SEO
  runtimeConfig: {
    public: {
      siteUrl: 'https://workspace.abb.com',
      siteName: 'ABB Workspace',
      siteDescription: 'Premium workspace solutions by ABB'
    }
  }
})