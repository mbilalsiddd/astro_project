@ts-check
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';





export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'ar'], 
    defaultLocale: 'en',
  }, 
});














