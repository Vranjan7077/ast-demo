import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://www.example.com/",
  experimental: {
    assets: true,
  },
  integrations: [sitemap(), image()],
});
