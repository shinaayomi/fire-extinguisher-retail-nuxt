// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  plugins: [{src: '~/plugins/bootstrap.client.js'}, {src: '~/plugins/vue-calendar.js', mode: 'client'}],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  nitro: { preset: "netlify" },
  app: {
    baseURL: "/",  // change if your site is under a subpath
    cdnURL: ""     // leave empty unless using a CDN
  }
})