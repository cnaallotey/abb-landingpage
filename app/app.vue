<template>
  <UApp>
    <WorkspaceHeader />
    <NuxtPage />
    <WorkspaceFooter />
  </UApp>
</template>

<script setup>
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