// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Задайте базовий шлях залежно від вашого розміщення
  base: "/perfumery/", // Замініть на назву вашого репозиторію, якщо деплоїте на GitHub Pages піддомен
  build: {
    outDir: "dist",
    // Додаткові налаштування збірки можуть бути додані тут
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
