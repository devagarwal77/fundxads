<template>
  <section class="py-20 container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-16">Our Core Services</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceCard 
        v-for="(service, index) in services" 
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
      />
    </div>
  </section>
</template>

<script setup>
import { Target, Lightbulb, TrendingUp, Search, LineChart, BarChart } from 'lucide-vue-next'
import { h } from 'vue'

const services = [
  {
    icon: h(Target, { class: 'h-8 w-8 text-blue-600' }),
    title: "Digital Advertising",
    description: "Targeted campaigns across social media, display ads, and search marketing"
  },
  {
    icon: h(Lightbulb, { class: 'h-8 w-8 text-blue-600' }),
    title: "Content Marketing",
    description: "Engaging, informative content that builds trust and drives conversions"
  },
  {
    icon: h(TrendingUp, { class: 'h-8 w-8 text-blue-600' }),
    title: "Performance Marketing",
    description: "Data-backed strategies designed to maximize ROI with clear insights"
  },
  {
    icon: h(Search, { class: 'h-8 w-8 text-blue-600' }),
    title: "SEO & SEM",
    description: "Increase visibility with cutting-edge SEO and search marketing techniques"
  },
  {
    icon: h(LineChart, { class: 'h-8 w-8 text-blue-600' }),
    title: "Analytics & Optimization",
    description: "Continuous monitoring and optimization for peak campaign performance"
  },
  {
    icon: h(BarChart, { class: 'h-8 w-8 text-blue-600' }),
    title: "IRCTC Inventory Access",
    description: "Exclusive access to India's largest digital ecosystem for premium audience targeting"
  }
]
</script>