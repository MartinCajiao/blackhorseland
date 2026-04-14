// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://martincajiao.github.io",
  base: "/blackhorseland",
  vite: {
    plugins: [tailwindcss()],
  },
});
