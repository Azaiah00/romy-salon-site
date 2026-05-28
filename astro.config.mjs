import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://romysalon.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ['romysalon.com'],
  },
});
