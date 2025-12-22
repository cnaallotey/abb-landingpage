<template>
  <div class="flex flex-col gap-20 md:gap-32 [&>div]:scroll-mt-28">
    <!-- Hero Section -->
    <div class="flex flex-col gap-0" v-animate>
      <WorkspaceHero />
      <!-- Story Section -->
     <WorkspaceStory id="about" v-animate />

    <!-- Stats Section -->
    <WorkspaceStats v-animate />
    </div>
    
    <!-- Services Section -->
    <WorkspaceFeatures id="services" v-animate/>

    <WorkspaceLocations id="locations" v-animate/>
    
    <!-- Benefits Section -->
    <WorkspaceBenefits id="benefits" v-animate/>

<!-- Clients Section -->
<WorkspaceClients id="clients" v-animate/>
    
    <!-- Testimonials -->
    <!-- <WorkspaceTestimonials id="testimonials" v-animate/> -->

    <!-- Image Marquee Section -->
    <WorkspaceImageMarquee v-animate/>
    
    <!-- Call to Action -->
    <WorkspaceCTA id="contact" v-animate/>
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