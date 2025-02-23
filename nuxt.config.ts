// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["nuxt-swiper", "@pinia/nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  build: {
    transpile: ["swiper"],
  },
});
