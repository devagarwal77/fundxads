export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'FundXAds | Personal Loan Marketing | Financial Growth Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Transform your financial marketing with FundXAds. Expert solutions for personal loans, financial services, and digital marketing growth.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'FundXAds | Financial Marketing Solutions' },
        { 
          property: 'og:description', 
          content: 'Expert solutions for personal loans, financial services, and digital marketing growth.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2024-11-15'
})