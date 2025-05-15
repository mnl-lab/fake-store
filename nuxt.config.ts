// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  ssr: true, // or true if you want server-side rendering
  nitro: {
    preset: "static"
  },
  // runtimeConfig: {
  //   public: {
  //     firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
  //     // you can add the rest here
  //   }
  // }
})