import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://readerly.ai",
  base: "/readerly-site/",
  output: "static",
  integrations: [tailwind(), sitemap()],
});
