// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      "data-theme": "lemonade"
    }
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
  target: 'static',
  compatibilityDate: '2024-08-24',
})