// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://martincajiao.github.io",
  base: "/blackhorseland", // <--- DEBE SER EL NOMBRE DEL REPO EN MINÚSCULAS
  vite: {
    plugins: [tailwindcss()],
  },
});
