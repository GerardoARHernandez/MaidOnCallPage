import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // 👈 Asegúrate de incluir esta línea
  base: "./", // O usa "/" si sigue fallando
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});
