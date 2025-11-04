/**
 * SEO Plugin for ABB Workspace
 * Adds global SEO enhancements and optimization
 */

export default defineNuxtPlugin({
  name: 'seo-global',
  setup() {
    // Add global SEO enhancements
    useHead({
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // Basic meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
        // Security headers
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        
        // Performance hints
        { name: 'dns-prefetch', content: '//fonts.googleapis.com' },
        { name: 'preconnect', content: 'https://fonts.gstatic.com' },
        
        // Mobile optimization
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'ABB Workspace' },
        
        // Microsoft tiles
        { name: 'msapplication-TileColor', content: '#ef4444' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        
        // Theme colors
        { name: 'theme-color', content: '#ef4444' },
        { name: 'msapplication-navbutton-color', content: '#ef4444' },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#ef4444' }
      ],
      link: [
        // Favicons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        
        // Preload critical resources
        { rel: 'preload', href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    })

    // Add structured data for organization (global)
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ABB Workspace',
            url: 'https://workspace.abb.com',
            logo: 'https://workspace.abb.com/images/abb-workspace-logo.png',
            description: 'Premium workspace solutions provider offering modern office spaces, coworking facilities, and meeting rooms.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Affolternstrasse 44',
              addressLocality: 'Zurich',
              postalCode: '8050',
              addressCountry: 'Switzerland'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+41-43-317-71-11',
              contactType: 'customer service',
              email: 'workspace@abb.com'
            },
            sameAs: [
              'https://linkedin.com/company/abb',
              'https://twitter.com/abb',
              'https://instagram.com/abb'
            ]
          })
        }
      ]
    })
  }
})