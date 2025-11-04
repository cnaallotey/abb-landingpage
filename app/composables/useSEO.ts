/**
 * Simplified SEO Composable for ABB Workspace
 * Manages basic meta tags without complex async operations
 */

// Simple SEO configuration - no async operations
export const useSimpleSEO = (options: {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
} = {}) => {
  const defaultSEO = {
    title: 'ABB Workspace - Premium Office Solutions',
    description: 'Discover ABB\'s state-of-the-art workspace solutions designed for innovation, collaboration, and productivity.',
    keywords: 'ABB workspace, office solutions, coworking, meeting rooms',
    ogImage: '/images/workspace-hero-og.jpg'
  }

  const seo = { ...defaultSEO, ...options }
  const baseUrl = 'https://workspace.abb.com'

  // Set meta tags using useSeoMeta
  useSeoMeta({
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    
    // Open Graph
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogImage: seo.ogImage,
    ogUrl: baseUrl,
    ogType: 'website',
    ogSiteName: 'ABB Workspace',
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: seo.ogImage,
    twitterSite: '@abb',
    twitterCreator: '@abb',
    
    // Additional meta tags
    robots: 'index,follow',
    author: 'ABB Workspace',
    publisher: 'ABB'
  })

  return seo
}

// Advanced SEO function that can handle async data
export const useSEO = async (pageKey?: string) => {
  try {
    // For now, use simple SEO with future content integration
    // TODO: Implement proper SEO content integration when collection types are available
    const seoConfig = {
      title: 'ABB Workspace - Premium Office Solutions',
      description: 'Discover ABB\'s state-of-the-art workspace solutions designed for innovation, collaboration, and productivity.',
      keywords: 'ABB workspace, office solutions, coworking, meeting rooms, workspace rental'
    }

    return useSimpleSEO(seoConfig)
  } catch (error) {
    console.warn('SEO data loading failed, using defaults:', error)
  }

  // Fallback to simple SEO
  return useSimpleSEO()
}

// Generate structured data separately (not dependent on composables)
export const generateStructuredData = (type: 'organization' | 'website' | 'service', data: any = {}) => {
  const baseUrl = 'https://workspace.abb.com'
  
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ABB Workspace',
      url: baseUrl,
      logo: `${baseUrl}/images/abb-workspace-logo.png`,
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
      ],
      ...data
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ABB Workspace',
      url: baseUrl,
      description: 'Premium workspace solutions and office spaces',
      publisher: {
        '@type': 'Organization',
        name: 'ABB Workspace'
      },
      ...data
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Workspace Solutions',
      provider: {
        '@type': 'Organization',
        name: 'ABB Workspace'
      },
      areaServed: 'Switzerland',
      ...data
    }
  }

  return schemas[type] || schemas.organization
}