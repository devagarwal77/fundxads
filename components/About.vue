<template>
  <section class="py-24">
    <div class="container mx-auto px-6">
      <!-- Hero Section -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <h1 class="text-4xl font-bold mb-6">Empowering Financial Brands with Advanced Marketing</h1>
        <p class="text-xl text-gray-600 mb-12">
          We're on a mission to revolutionize financial marketing through innovation, 
          data-driven strategies, and creative excellence.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Story Section -->
      <div class="mb-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <p class="text-gray-600 mb-4">
              Founded in 2020, FundXAds emerged from a vision to bridge the gap between 
              traditional financial marketing and modern digital solutions. Our journey 
              began with a simple mission: to help financial institutions connect with 
              their audiences more effectively.
            </p>
            <p class="text-gray-600">
              Today, we're proud to be at the forefront of financial marketing innovation, 
              serving clients across the globe with data-driven strategies and creative 
              solutions that drive real results.
            </p>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
              alt="Our Team"
              class="rounded-2xl shadow-xl"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div>
        <h2 class="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(value, index) in values" 
            :key="index"
            class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div class="mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <component :is="value.icon" />
            </div>
            <h3 class="text-xl font-bold mb-2">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Target, Users, Award, Rocket } from 'lucide-vue-next'
import { h } from 'vue'

const stats = [
  { label: "Clients Served", value: "500+" },
  { label: "ROI Generated", value: "300%" },
  { label: "Team Members", value: "50+" },
  { label: "Global Presence", value: "15+" }
]

const values = [
  {
    icon: h(Target, { class: 'w-12 h-12 text-blue-600' }),
    title: "Innovation First",
    description: "We constantly push boundaries to deliver cutting-edge marketing solutions"
  },
  {
    icon: h(Users, { class: 'w-12 h-12 text-blue-600' }),
    title: "Client Success",
    description: "Your growth and success are at the heart of everything we do"
  },
  {
    icon: h(Award, { class: 'w-12 h-12 text-blue-600' }),
    title: "Excellence",
    description: "We maintain the highest standards in all our deliverables"
  },
  {
    icon: h(Rocket, { class: 'w-12 h-12 text-blue-600' }),
    title: "Growth Mindset",
    description: "Continuous learning and improvement drive our approach"
  }
]
</script>