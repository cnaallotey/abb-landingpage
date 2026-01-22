import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    hero: defineCollection({
      type: 'data',
      source: 'hero.md',
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        cta: z.object({
          primary: z.object({ text: z.string(), link: z.string() }),
          secondary: z.object({ text: z.string(), link: z.string() })
        }),
        image: z.object({ src: z.string(), alt: z.string() })
      })
    }),
    benefits: defineCollection({
      type: 'data',
      source: 'benefits.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        benefits: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        })),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          buttons: z.object({
            primary: z.object({ text: z.string(), link: z.string() }),
            secondary: z.object({ text: z.string(), link: z.string() })
          })
        })
      })
    }),
    services: defineCollection({
      type: 'data',
      source: 'services.md'
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        stats: z.array(z.object({
          label: z.string(),
          value: z.string(), // or number, keeping as string for "20+"
          icon: z.string().optional()
        })),
        image: z.object({ src: z.string(), alt: z.string() }).optional()
      })
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
      source: 'cta.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        quickBenefits: z.array(z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string()
        })).optional(),
        buttons: z.object({
          primary: z.object({ text: z.string(), url: z.string(), icon: z.string().optional() }),
          secondary: z.object({ text: z.string(), url: z.string(), icon: z.string().optional() })
        }).optional(),
        stats: z.array(z.object({
          label: z.string(),
          value: z.string()
        })).optional()
      })
    }),
    locations: defineCollection({
      type: 'data',
      source: 'locations.json',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        address: z.string(),
        image: z.string(),
        slug: z.string(),
        contact: z.object({
          email: z.string(),
          phone: z.string(),
          whatsapp: z.string().optional()
        }).optional(),
        operating_hours: z.object({
          weekdays: z.string()
        }).optional(),
        features: z.array(z.string()),
        stats: z.array(z.object({
          label: z.string(),
          value: z.string()
        }))
      })
    }),
    seo: defineCollection({
      type: 'data',
      source: 'seo.md'
    }),
    branches: defineCollection({ // Keeping for backward compatibility if needed, but 'locations' supersedes it
      type: 'data',
      source: 'branches/*.md'
    }),
    clients: defineCollection({
      type: 'data',
      source: 'clients/*.md'
    })
  }
})