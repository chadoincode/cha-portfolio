// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
console.log('[VITE CONFIG] alias @ =', path.resolve('./src'));

// https://astro.build/config
export default defineConfig({
  vite:{
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    plugins: [tailwindcss()]
},
  integrations: [react()]
});
