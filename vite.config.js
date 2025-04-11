import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: "/", // Cambiado de "./" a "/"
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});