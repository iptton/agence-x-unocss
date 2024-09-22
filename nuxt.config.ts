// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        "data-theme": "light"
      }
    },
  },
  modules:[
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'app-theme'
  },
  ssr: false,
  compatibilityDate: '2024-09-15',

  ...(process.env.NODE_ENV === 'development' && {
    routeRules: {
      '/api/**': { proxy: 'http://localhost:8787/api/**' },
    },
  })
})