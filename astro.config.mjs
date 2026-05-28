import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTE: `site` is used for canonical URLs, og:url, sitemap, etc.
// Keep this pointed at the LIVE URL right now (Vercel preview) so text-message
// link previews resolve correctly. When DNS flips and romysalon.com points at
// Vercel, change this back to 'https://romysalon.com'.
export default defineConfig({
  site: 'https://romy-salon-site.vercel.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: ['romysalon.com'],
  },
});
