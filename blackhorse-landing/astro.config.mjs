// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Tu dominio base de GitHub
  site: "https://martincajiao.github.io",

  // EL NOMBRE EXACTO DE TU REPOSITORIO (asegúrate de que coincida con mayúsculas y minúsculas)
  base: "/BlackHorse",

  vite: {
    plugins: [tailwindcss()],
  },
});
