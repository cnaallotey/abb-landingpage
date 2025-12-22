<script setup>
    const locations = [
  {
    name: 'ABB Airport West Office',
    description: 'A premium corporate workspace located in the heart of Accra’s business district. Featuring state-of-the-art facilities, panoramic city views, and direct access to major transport links. Ideal for multinational corporations and established enterprises.',
    address: '2 Allotey road, East Legon, Accra, Ghana',
    image: '/images/workspace-hero.jpg',
    slug: 'airport-west-office',
    features: [
  "Airport shuttle service",
  "Conference facilities",
  "Premium internet",
  "Business lounge",
  "Concierge services",
  "Meeting rooms",
  "Hot desks",
  "Private offices"
],
    stats: [
      { label: 'Capacity', value: '200+ Seats' },
      { label: 'Meeting Rooms', value: '5 Rooms' },
      { label: 'Availability', value: 'Immediate' }
    ]
  },
  {
    name: 'ABB Tema Office',
    description: 'A vibrant and flexible coworking environment designed for startups and freelancers. Offers open-plan desks, creative studios, and a collaborative community atmosphere. Located in the industrial hub with easy access to the port.',
    address: 'Tema Community 16, Tema, Ghana',
    image: '/images/office/tema.jpg',
    slug: 'tema-office',
    features: [
      "High-speed fiber internet",
      "24/7 security",
      "Port proximity",
      "Industrial partnerships",
      "Logistics support",
      "Meeting rooms",
      "Co-working spaces",
      "Private offices"
    ],
    stats: [
      { label: 'Capacity', value: '150+ Seats' },
      { label: 'Meeting Rooms', value: '3 Rooms' },
      { label: 'Availability', value: 'Limited' }
    ]
  }
]
</script>

<template>
        <!-- Locations Preview -->
    <section class="bg-white pt-20 md:pt-32">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-16 max-w-2xl animate-on-scroll">
          <h2 class="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our <span class="text-[#E60000]">Locations</span>
          </h2>
          <p class="text-xl text-gray-500 leading-relaxed">
            Strategically located workspaces designed to enhance productivity and collaboration. Choose the location that suits your business needs.
          </p>
        </div>
        
        <div class="flex flex-col gap-12 animate-on-scroll delay-100">
          <LocationListItem 
            v-for="location in locations" 
            :key="location.slug" 
            v-bind="location"
          />
        </div>
      </div>
    </section>
</template>
