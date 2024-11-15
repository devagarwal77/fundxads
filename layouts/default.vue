<template>
  <div>
    <header id="home" class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-16">
      <Navbar />
      <Hero />
    </header>
    <main class="relative">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div class="absolute top-1/3 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 1s"></div>
      </div>
      <slot />
    </main>
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-6 text-center">
        <p class="animate-pulse-soft">© {{ new Date().getFullYear() }} FundXAds. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - FundXAds` : 'FundXAds | Financial Marketing Solutions';
  }
});
</script>