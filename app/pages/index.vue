<template>
  <div class="flex flex-col gap-20 md:gap-32 [&>div]:scroll-mt-28">
    <!-- Hero Section -->
    <div>
      <WorkspaceHero />
    
    <!-- Stats Section -->
    <WorkspaceStats  id="about"/>
    </div>
    
    <!-- Services Section -->
    <WorkspaceFeatures id="services"/>

    <WorkspaceLocation id="locations"/>
    
    <!-- Benefits Section -->
    <WorkspaceBenefits id="benefits"/>

<!-- Clients Section -->
<WorkspaceClients id="clients"/>
    
    <!-- Testimonials -->
    <WorkspaceTestimonials id="testimonials"/>

    <!-- Image Marquee Section -->
    <WorkspaceImageMarquee />
    
    <!-- Call to Action -->
    <WorkspaceCTA id="contact"/>
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