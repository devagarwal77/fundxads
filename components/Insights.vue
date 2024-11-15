<template>
  <section class="py-24 bg-gradient-to-b from-white to-blue-50">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto mb-16 text-center">
        <h1 class="text-4xl font-bold mb-6">Industry Insights & Latest Trends</h1>
        <p class="text-xl text-gray-600">Stay ahead of the curve with our expert analysis and industry updates</p>
      </div>

      <!-- Featured Content -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <article 
          v-for="(insight, index) in insights" 
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl group"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="insight.image" 
              :alt="insight.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-blue-600 text-sm font-semibold">{{ insight.category }}</span>
              <span class="text-gray-500 text-sm">{{ insight.date }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ insight.title }}
            </h3>
            <p class="text-gray-600 mb-4">{{ insight.excerpt }}</p>
            <button class="text-blue-600 font-semibold inline-flex items-center group/btn">
              Read More 
              <ArrowRight class="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </article>
      </div>

      <!-- Resources Section -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(resource, index) in resources" 
          :key="index"
          class="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <component 
            :is="resource.icon" 
            class="w-12 h-12 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300"
          />
          <h3 class="text-xl font-bold mb-2">{{ resource.title }}</h3>
          <p class="text-gray-600 mb-4">{{ resource.description }}</p>
          <template v-if="resource.type === 'newsletter'">
            <form class="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              />
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </template>
          <template v-else>
            <a href="#" class="text-blue-600 font-semibold inline-flex items-center">
              {{ resource.actionText }} <ArrowRight class="ml-2 w-4 h-4" />
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TrendingUp, BookOpen, Newspaper, ArrowRight } from 'lucide-vue-next'

const insights = [
  {
    category: "Market Analysis",
    date: "March 15, 2024",
    title: "The Evolution of Personal Loan Marketing in 2024",
    excerpt: "Discover how AI and personalization are reshaping the landscape of personal loan marketing...",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Industry Trends",
    date: "March 12, 2024",
    title: "Digital Transformation in Financial Marketing",
    excerpt: "Exploring the latest technologies driving growth in financial services marketing...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    category: "Best Practices",
    date: "March 10, 2024",
    title: "Optimizing Conversion Rates in Loan Marketing",
    excerpt: "Learn proven strategies to improve your loan marketing conversion rates...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
]

const resources = [
  {
    icon: TrendingUp,
    title: "Market Reports",
    description: "Access detailed market analysis and industry forecasts",
    actionText: "View Reports",
    type: "link"
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Learn from real success stories and implementations",
    actionText: "Read Cases",
    type: "link"
  },
  {
    icon: Newspaper,
    title: "Newsletter",
    description: "Subscribe to our weekly industry updates",
    type: "newsletter"
  }
]
</script>