<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled ? 'bg-blue-600/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  ]">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2 group cursor-pointer" @click="scrollToSection('#home')">
          <BarChart3 class="h-8 w-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          <span class="text-2xl font-bold group-hover:text-blue-100 transition-colors duration-300">
            FundXAds
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="flex space-x-6">
            <button
              v-for="item in navItems"
              :key="item.title"
              @click="scrollToSection(item.href)"
              class="text-white relative group py-2"
            >
              <span class="relative z-10 font-medium transition-colors duration-300 group-hover:text-blue-100">
                {{ item.title }}
              </span>
              <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span class="absolute inset-0 w-full h-full border-b-2 border-transparent group-hover:border-white/10 transition-colors duration-300"></span>
            </button>
          </div>
          <button 
            @click="scrollToSection('#contact')"
            class="relative overflow-hidden bg-white text-blue-600 px-6 py-2 rounded-full font-semibold 
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <span class="relative z-10">Get Started</span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-white p-2 hover:bg-blue-500 rounded-lg transition-all duration-300"
          @click="isMenuOpen = !isMenuOpen"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <div class="relative w-6 h-6">
            <span :class="[
              'absolute block w-6 h-0.5 bg-white transform transition-all duration-300',
              isMenuOpen ? 'rotate-45 top-3' : 'top-2'
            ]"></span>
            <span :class="[
              'absolute block w-6 h-0.5 bg-white transform transition-all duration-300',
              isMenuOpen ? '-rotate-45 top-3' : 'top-4'
            ]"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        :class="[
          'md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-blue-600 to-blue-700 backdrop-blur-lg transform transition-all duration-300 ease-in-out',
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        ]"
      >
        <div class="flex flex-col space-y-4 p-6">
          <button
            v-for="(item, index) in navItems"
            :key="item.title"
            @click="scrollToSection(item.href)"
            class="text-white hover:text-blue-100 transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2"
            :style="{ 
              transitionDelay: `${index * 75}ms`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-1rem)'
            }"
          >
            <span class="w-2 h-2 bg-white rounded-full transform scale-0 transition-transform duration-300 group-hover:scale-100"></span>
            <span>{{ item.title }}</span>
          </button>
          <button 
            @click="scrollToSection('#contact')"
            class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold 
            transition-all duration-300 transform hover:scale-105 w-full hover:shadow-lg
            hover:bg-gradient-to-r hover:from-white hover:to-blue-50"
            :style="{ 
              transitionDelay: `${navItems.length * 75}ms`,
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-1rem)'
            }"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { BarChart3 } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Industry Insights", href: "#insights" },
  { title: "About Us", href: "#about" },
  { title: "Contact", href: "#contact" }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>