import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
// import solidJs from "@astrojs/solid-js";
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';
const tina = ({ directiveName = 'tina' } = {}) => ({
  name: 'tina-cms',
  hooks: {
    'astro:config:setup': ({ addClientDirective, opts }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: './client-directives/tina.mjs',
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://theshoolingroup.com',
  integrations: [robotsTxt(), sitemap(), react(), tina()],
  output: 'hybrid',
  adapter: netlify(),
  // image: {
  //   remotePatterns: [{ protocol: "https" }],
  //   domains: ["assets.tina.io"],
  // }
});
