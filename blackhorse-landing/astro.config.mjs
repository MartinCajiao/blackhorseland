import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://martincajiao.github.io",
  base: "/blackhorseland", // <--- ESTO ES LO MÁS IMPORTANTE
  vite: {
    plugins: [tailwindcss()],
  },
});
