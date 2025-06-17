// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

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
