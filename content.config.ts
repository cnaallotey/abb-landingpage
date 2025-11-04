import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections:{
    hero: defineCollection({
      type: 'data',
      source: 'hero.md'
    }),
    benefits: defineCollection({
      type: 'data',
      source: 'benefits.md'
    }),
    services: defineCollection({
      type: 'data',
      source: 'services.md'
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats.md'
    }),
    testimonials: defineCollection({
      type: 'data',
      source: 'testimonials.md'
    }),
    showcase: defineCollection({
      type: 'data',
      source: 'showcase.md'
    }),
    cta: defineCollection({
      type: 'data',
      source: 'cta.md'
    }),
    seo: defineCollection({
      type: 'data',
      source: 'seo.md'
    }),
    branches: defineCollection({
      type: 'data',
      source: 'branches/*.md'
    })
  }
})