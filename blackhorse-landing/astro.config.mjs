// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Tu dominio base
  site: "https://martincajiao.github.io",

  // TIENE QUE SER IGUAL AL NOMBRE DEL REPO EN MINÚSCULAS
  base: "/blackhorseland",

  vite: {
    plugins: [tailwindcss()],
  },
});
