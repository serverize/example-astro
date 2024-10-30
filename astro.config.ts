// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  adapter: node({
    mode: 'standalone',
  }),
});