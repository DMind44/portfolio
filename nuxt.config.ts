// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s — david64.dev',
      title: 'David Mindlin',
      htmlAttrs: { lang: 'en' },
    },
  },
  colorMode: { classSuffix: '', preference: 'dark' },
  compatibilityDate: '2024-04-03',
})
