import { defineConfig } from 'vite';

export default defineConfig({
  base: "./", // Si no funciona, intenta con "/"
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});
