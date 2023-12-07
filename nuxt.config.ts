// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/style/main.css"],
  runtimeConfig: {
    apiSecret: "hehehe.com", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "public.com", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  imports: {
    dirs: ["composables", "components/**", "Icons/**"],
  },
});
