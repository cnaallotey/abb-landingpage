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

</script>