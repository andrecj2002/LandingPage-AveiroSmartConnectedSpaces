

import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  ssr: false,

  typescript: {
    shim: false,
  },
  
  

  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt"],

  app: {
    head: {
      title: "Aveiro Smart Connected Spaces - Aveiro Test Bed",
      link: [
        // Inter font for typography
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap' },
        // favicon using public path - place `logopagina.jpg` in `package/public/`
        { rel: 'icon', type: 'image/jpeg', href: '/logopagina.jpg' }
      ],
      meta: [
        { name: 'theme-color', content: '#0E0971' }
      ]
      
    },
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],
  compatibilityDate: '2025-05-15',
});
