// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/style/main.css"],
  
  imports: {
    dirs: ["composables", "components/**", "Icons/**"],
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
    [
      "@nuxtjs/supabase",
      {
        redirect: false,
      },
    ],
  ],
});
