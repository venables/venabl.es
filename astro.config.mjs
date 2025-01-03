// @ts-check
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://venabl.es",
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ]
})