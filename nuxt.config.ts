// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      "data-theme": "cupcake"
    }
  },
  modules:[
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image'
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
