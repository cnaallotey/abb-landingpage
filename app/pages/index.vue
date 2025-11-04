<template>
  <div class="flex flex-col gap-20 md:gap-32">
    <!-- Hero Section -->
    <WorkspaceHero />
    
    <!-- Stats Section -->
    <WorkspaceStats />
    
    <!-- Services Section -->
    <WorkspaceFeatures />

    <WorkspaceLocation />
    
    <!-- Benefits Section -->
    <WorkspaceBenefits />
    
    <!-- Testimonials -->
    <WorkspaceTestimonials />

    <!-- Image Marquee Section -->
    <WorkspaceImageMarquee />
    
    <!-- Call to Action -->
    <WorkspaceCTA />
  </div>
</template>

<script setup lang="ts">
// Use simple SEO for the home page
useSimpleSEO({
  title: 'ABB Workspace - Premium Office Solutions',
  description: 'Discover ABB\'s state-of-the-art workspace solutions designed for innovation, collaboration, and productivity. Modern offices, coworking spaces, and meeting rooms.',
  keywords: 'ABB workspace, office solutions, coworking, meeting rooms, workspace rental',
  ogImage: '/images/workspace-hero-og.jpg'
})

// Add structured data for the landing page
const structuredData = generateStructuredData('organization')

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
})
</script>