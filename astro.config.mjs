import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://IEEE-ESTl.github.io',
  base: '/IEEE-ESTl-Student-Web-Hub'
});